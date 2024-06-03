import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  //storing registration data from input fields
  const [registrationData, setRegistrationData] = React.useState({
    username: "",
    email: "",
    password: "",
    role: 1,
  });

  //getting textdata from input fields
  const handleChange = async (e) => {
    const { name, value } = e.target;

    // storing textdata from input fields
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    console.log(registrationData);

    try {
      await axios.post(
        "http://localhost:8000/register",
        registrationData
      );
      navigate("/signin.html");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        {/* Sign Up Start */}
        <div className="container-fluid">
          <div
            className="row h-100 align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
              <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                <form onSubmit={handleRegistrationSubmit}>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h3 className="text-primary">Sign Up</h3>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingText"
                      placeholder="jhondoe"
                      onChange={handleChange}
                      name="username"
                      value={registrationData.username}
                      required
                    />
                    <label htmlFor="floatingText">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      onChange={handleChange}
                      name="email"
                      value={registrationData.email}
                      required
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      name="password"
                      value={registrationData.password}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  {/* <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <a href>Forgot Password</a>
                </div> */}
                  <button
                    type="submit"
                    className="btn btn-primary py-3 w-100 mb-4"
                  >
                    Sign Up
                  </button>
                </form>
                <p className="text-center mb-0">
                  Already have an Account?
                  <Link className="text-primary" to="/signin.html">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Sign Up End */}
      </div>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </>
  );
}

export default SignUp;
