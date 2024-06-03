import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [data, setData] = React.useState({
        username: "",
        email: "",
        phone: "",
        area: "",
        role: "1",
        password: "",
        deviceId: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:8000/register", data);
            if (response.data.success) {
                alert(response.data.message)
                navigate("/login")
            }

        } catch (error) {
            alert(error.response.data.message)
        }

    }
    return (
        <>
            <section className="contact_section mt-5">
                <div className="card container w-50 p-5 shadow">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading_container ">
                                <h2>
                                    SIGN <span>UP</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form_container ">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            name="username"
                                            onChange={handleChange}
                                            value={data.username}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            onChange={handleChange}
                                            value={data.email}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Area"
                                            name="area"
                                            onChange={handleChange}
                                            value={data.area}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            maxLength={10}
                                            minLength={10}
                                            name="phone"
                                            onChange={handleChange}
                                            value={data.phone}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="24 Character Device ID"
                                            maxLength={24}
                                            minLength={24}
                                            name="deviceId"
                                            onChange={handleChange}
                                            value={data.deviceId}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            onChange={handleChange}
                                            value={data.password}
                                        />
                                    </div>
                                    <p>Already have an account? <Link to="/login">Login</Link> </p>
                                    <div className="btn_box">
                                        <button type="submit">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;
