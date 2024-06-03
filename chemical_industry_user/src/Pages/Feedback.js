import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Feedback() {
    const navigate = useNavigate();
    const [feedbackData, setFeedbackData] = useState({
        userName: "",
        rating: "1",
        review: "",
    })
    useEffect(() => {
        window.scrollTo(0, 0, { behavior: 'smooth' });
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target
        setFeedbackData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:8000/addFeedback", feedbackData);
            if (response.data.success) {
                alert(response.data.message);
                navigate("/");
            }
        } catch (error) {
            alert(error.response.data.message);
        }
    }
    return (
        <>
            <Header />
            {/* contact section */}
            <section className="contact_section layout_padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-5 offset-md-1">
                            <div className="heading_container">
                                <h2>
                                    Give <span>Feedback</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-5 offset-md-1">
                            <div className="form_container">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            type="text"
                                            name="userName"
                                            onChange={handleChange}
                                            value={feedbackData.userName}
                                            className="form-control"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div >
                                        <input
                                            className="range-box "
                                            type="range"
                                            name="rating"
                                            min="1"
                                            max="5"
                                            step="0.5"
                                            value={feedbackData.rating}
                                            onChange={handleChange}
                                            required
                                         />
                                        <output>{feedbackData.rating}</output>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="review"
                                            className="message-box"
                                            onChange={handleChange}
                                            value={feedbackData.review}
                                            placeholder="Message"
                                            required
                                        />
                                    </div>
                                    <div className="btn_box">
                                        <button type="submit">SEND</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 px-0">
                            <div className="map_container">
                                <div className="map">
                                    <div id="googleMap" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Feedback;
