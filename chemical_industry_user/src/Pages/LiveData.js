import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";

function LiveData() {
    const [isLoaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0, { behavior: "smooth" });
        const fetchData = async () => {
            try {
                const response = await axios.post("http://localhost:8000/getLiveData");
                if (response.data.liveData && response.data.liveData.length > 0) {
                    setData(response.data.liveData);
                }
                setLoaded(true);
            } catch (error) {
                console.error("Error fetching live data:", error);
                setLoaded(true); // Set loaded to true even if there's an error
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <section className="service_section layout_padding">
                <div className="service_container">
                    <div className="container ">
                        <div className="heading_container heading_center">
                            <h2>
                                Live <span>Sensor</span> Data
                            </h2>
                            <p>Here you can see live data from your implemented sensors</p>
                        </div>
                        {
                            isLoaded ? (
                                data.length > 0 ? (
                                    <div className="row">
                                        {data.map((sensor, index) => (
                                            <div className="col-sm-6 col-lg-4" key={index}>
                                                <div className="box">
                                                    <div className="img-box">
                                                        <img src={`images/s${index + 1}.png`} alt="" />
                                                    </div>
                                                    <div className="detail-box w-100">
                                                        <h5>{sensor.sensorName}</h5>
                                                        <br />
                                                        <h5>{sensor.sensorValue}</h5>
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>No data found</p>
                                )
                            ) : (
                                <p>Please wait, loading live data...</p>
                            )
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default LiveData;
