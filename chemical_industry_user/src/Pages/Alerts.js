import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";

function Alerts() {
    const [isLoaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0, { behavior: "smooth" });
        const fetchData = async () => {
            try {
                const response = await axios.post("http://localhost:8000/showAlerts");
                if (response.data.alerts && response.data.alerts.length > 0) {
                    setData(response.data.alerts);
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
                                Live <span>Sensor</span> Alerts
                            </h2>
                            <p>Here you can see alert data from your implemented device</p>
                        </div>
                        {
                            isLoaded ? (
                                data.length > 0 ? (
                                    <div className="row">
                                        {data.map((sensor, index) => (
                                            <div className="col-sm-6 col-lg-4" key={index}>
                                                <div className="box" style={{ backgroundColor: "orange" }}>
                                                    <div className="img-box" >
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
                                <p>Please wait, loading data...</p>
                            )
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Alerts;
