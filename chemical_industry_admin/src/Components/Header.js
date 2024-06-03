import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

function Header() {
  function nav_open_close(e) {
    var element = document.getElementById("sidebar");
    var element2 = document.getElementById("content");
    element.classList.toggle("open");
    element2.classList.toggle("open");
  }
  const logout = async (e) => {
    try {
      await axios.post("http://localhost:8000/logout");
      window.location.reload(false);
    } catch (error) {
      console.log(" Error: ", error);
    }
  };
  return (
    <>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
        <a href="/" className="navbar-brand d-flex d-lg-none me-4">
          <h2 className="text-primary mb-0">
            <i className="fa fa-hashtag" />
          </h2>
        </a>
        <a href="/#" className="sidebar-toggler flex-shrink-0" onClick={nav_open_close}>
          <i className="fa fa-bars" />
        </a>
        <form className="d-none d-md-flex ms-4">
          <input
            className="form-control border-0"
            type="search"
            placeholder="Search"
          />
        </form>
        <div className="navbar-nav align-items-center ms-auto">
          <div className="nav-item dropdown">
            <a
              href="/#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <img
                className="rounded-circle me-lg-2"
                src="img/user.jpg"
                alt=''
                style={{ width: 40, height: 40 }}
              />
              <span className="d-none d-lg-inline-flex">Admin</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              {/* <a href="#" className="dropdown-item">
                My Profile
              </a> */}

              <Link
                onClick={() => logout()}
                className="dropdown-item"
                to="/signin.html"
              >
                <i className="fas fa-power-off mr-2" />
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
}

export default Header;
