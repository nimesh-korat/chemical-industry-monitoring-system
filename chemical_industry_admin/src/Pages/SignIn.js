import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

function SignIn() {
  
  axios.defaults.withCredentials = true;

  //storing login data from input fields
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
    role: '0'
  });

  //getting textdata from input fields
  const handleChange = async (e) => {
    const { name, value } = e.target;
    // storing textdata from input fields
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(loginData);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8000/login",
        loginData
      );
      window.location.reload(false);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        {/* Sign In Start */}
        <div className="container-fluid">
          <div
            className="row h-100 align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
              <form onSubmit={handleLoginSubmit}>
                <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h3 className="text-primary">Admin Login</h3>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      name="email"
                      onChange={handleChange}
                      value={loginData.email}
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
                      onChange={handleChange}
                      value={loginData.password}
                      required
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    {/* <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div> */}
                    {/* <a href>Forgot Password</a> */}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary py-3 w-100 mb-4"
                  >
                    Sign In
                  </button>

                  {/*<p className="text-center mb-0">
                    Don't have an account?{" "}
                    <Link className="text-primary" to="/signup.html">
                      Sign up
                    </Link>
                  </p> */}
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Sign In End */}
      </div>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </>
  );
}

export default SignIn;
