import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import checkSession from "../auth/authService";
import axios from "axios";

function Header() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAlerts, setIsAlerts] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await checkSession();
      setIsLoggedIn(loggedIn);
      setLoading(false);
    };

    checkLoginStatus();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  useEffect(() => {
    if (isLoggedIn) {
      const id = setInterval(() => {
        fetchData();
      }, 10000); //10 seconds
      setIntervalId(id);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
    // eslint-disable-next-line
  }, [isLoggedIn]);

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:8000/showAlerts");
      if (response.data.alerts && response.data.alerts.length > 0) {
        setIsAlerts(true);
        console.log(response);
      }
    } catch (error) {
      // console.error("Error fetching live data:", error);
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post("http://localhost:8000/logout");
      console.log(response.data);
      if (response.data.success) {
        setIsLoggedIn(false);
        window.location.reload(false);
      }
    } catch (error) {
      alert(error.response.data.message);
      window.location.reload(false);
    }
  };

  return (
    <>
      <header className="header_section">
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <Link className="navbar-brand" to="/">
                <span>Chemical Industry</span>
              </Link>
              {!loading ? (
                <>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span> </span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item ">
                        <Link className="nav-link" to="/">
                          Home <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      {isLoggedIn ? (
                        <>
                          <li className="nav-item">
                            <Link className="nav-link" to="/liveData">
                              Live Data
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/historyData">
                              History Data
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/feedback">
                              Feedback
                            </Link>
                          </li>
                          <li
                            className={`nav-item ${isAlerts ? "bg-danger" : ""
                              }`}
                          >
                            <Link className="nav-link" to="/alerts">
                              Alerts
                            </Link>
                          </li>
                        </>
                      ) : (
                        <li className="nav-item">
                          <Link className="nav-link" to="/service">
                            Services
                          </Link>
                        </li>
                      )}

                      <li className="nav-item">
                        <Link className="nav-link" to="/about">
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                          Contact Us
                        </Link>
                      </li>
                      {isLoggedIn ? (
                        <li
                          className="nav-item"
                          onClick={() => console.log("logout")}
                        >
                          <Link className="nav-link" onClick={logout}>
                            <i className="fa fa-user" aria-hidden="true" /> Logout
                          </Link>
                        </li>
                      ) : (
                        <li className="nav-item">
                          <Link className="nav-link" to="/login">
                            <i className="fa fa-user" aria-hidden="true" /> Login
                          </Link>
                        </li>
                      )}
                      <button
                        className="btn  my-2 my-sm-0 nav_search-btn"
                        type="submit"
                      >
                        <i className="fa fa-search" aria-hidden="true" />
                      </button>
                    </ul>
                  </div>
                </>
              ) : null}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
