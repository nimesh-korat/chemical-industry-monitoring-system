import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Login() {
    const [data, setData] = React.useState({
        email: "",
        role: "1",
        password: "",
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
            const response = await axios.post("http://localhost:8000/login", data);
            if (response.data.success) {
                window.location.reload(false);
            }
        } catch (error) {
            alert(error.response.data.message);
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
                                    LOG <span>IN</span>
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
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            onChange={handleChange}
                                            value={data.email}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            onChange={handleChange}
                                            value={data.password}
                                            required
                                        />
                                    </div>
                                    <p>Already have an account? <Link to="/register">Register</Link> </p>
                                    <div className="btn_box">
                                        <button type="submit">Login</button>
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

export default Login;
