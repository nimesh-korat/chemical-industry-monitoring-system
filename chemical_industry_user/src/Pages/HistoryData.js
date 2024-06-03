import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import axios from 'axios';
import { CDBDataTable } from 'cdbreact';

function HistoryData() {
    const [isLoaded, setLoaded] = useState(false);
    const [datas, setDatas] = useState([]);
    const [selectedSensor, setSelectedSensor] = useState('fireData');

    useEffect(() => {
        window.scrollTo(0, 0, { behavior: 'smooth' });
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:8000/getHistoryData')
                if (response.data.data) {
                    setDatas(response.data.data);
                }

                setLoaded(true);
            } catch (error) {
                console.error("Error fetching live data:", error);
                setLoaded(true); // Set loaded to true even if there's an error
            }
        };

        fetchData();


    }, []);

    console.log(datas);


    const filteredData = datas[selectedSensor];

    return (
        <>
            <Header />
            <section className="service_section layout_padding">
                <div className="service_container">

                    <div className="container ">
                        {
                            isLoaded ? (
                                filteredData.length > 0 ? (
                                    <>
                                        <select className="form-select mb-3 w-25" value={selectedSensor} onChange={(e) => setSelectedSensor(e.target.value)}>
                                            <option value="fireData">Fire Data</option>
                                            <option value="mq3Data">MQ3 Data</option>
                                            <option value="mqToxicGasData">MQ Toxic Gas Data</option>
                                            <option value="mq135Data">MQ 135 Data</option>
                                            <option value="smokeData">Smoke Data</option>
                                            <option value="tempData">Temperature Data</option>
                                        </select>
                                        <CDBDataTable
                                            paginationLabel={["Previous", "Next"]}
                                            striped
                                            sortable
                                            bordered
                                            responsive
                                            hover
                                            entriesOptions={[5, 20, 25]}
                                            entries={5}
                                            pagesAmount={4}
                                            data={{
                                                columns: [
                                                    { label: 'ID', field: '_id' },
                                                    { label: 'Device ID', field: 'deviceId' },
                                                    { label: 'Sensor Value', field: 'sensorValue' },
                                                    { label: 'TimeStamp', field: 'timestamp' }
                                                ],
                                                rows: filteredData.map(data => ({
                                                    _id: data._id,
                                                    deviceId: data.deviceId,
                                                    sensorValue: data.sensorValue,
                                                    timestamp: new Date(data.timestamp).toLocaleString()
                                                }))
                                            }}
                                        />
                                    </>
                                ) : (
                                    <p>No data found</p>
                                )
                            ) : (
                                <p>Please wait, loading data...</p>
                            )
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default HistoryData