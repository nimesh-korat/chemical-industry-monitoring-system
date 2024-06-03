import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      {/* Sidebar Start */}
      <div id="sidebar" className="sidebar pe-4 pb-3">
        <nav className="navbar bg-light navbar-light">
          <Link to="/" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary">
              <i className="fa fa-hashtag me-2" />
              ADMIN
            </h3>
          </Link>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img
                className="rounded-circle"
                alt=''
                src="img/user.jpg"
                style={{ width: 40, height: 40 }}
              />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Admin</h6>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <Link to="/" className="nav-item nav-link active">
              <i className="fa fa-tachometer-alt me-2" />
              Dashboard
            </Link>
            <Link to="/temprature.html" className="nav-item nav-link">
              <i className="fa fa-th me-2" />
              Temp. Sensor
            </Link>
            <Link to="/smoke.html" className="nav-item nav-link">
              <i className="fa fa-th me-2" />
              Smoke Sensor
            </Link>
            <Link to="/mq135.html" className="nav-item nav-link">
              <i className="fa fa-keyboard me-2" />
              MQ 135 Sensor
            </Link>
            <Link to="/mq3.html" className="nav-item nav-link">
              <i className="fa fa-keyboard me-2" />
              MQ 3 Sensor
            </Link>
            <Link to="/fire.html" className="nav-item nav-link">
              <i className="fa fa-table me-2" />
              Fire Sensor
            </Link>
            <Link to="/mqToxicGas.html" className="nav-item nav-link">
              <i className="fa fa-table me-2" />
              MQTGas Sensor
            </Link>
            <Link to="/users.html" className="nav-item nav-link">
              <i className="fa fa-table me-2" />
              Users
            </Link>
            {/* <Link to="/deviceLocation.html" className="nav-item nav-link">
              <i className="fa fa-table me-2" />
              Device Location
            </Link> */}
            <Link to="/complainsData.html" className="nav-item nav-link">
              <i className="fa fa-table me-2" />
              Complains Data
            </Link>
            <Link to="/feedbackData.html" className="nav-item nav-link">
              <i className="fa fa-table me-2" />
              Feedback Data
            </Link>
            <Link to="/alertData.html" className="nav-item nav-link">
              <i className="fa fa-table me-2" />
              Alerts Data
            </Link>
          </div>
        </nav>
      </div>
      {/* Sidebar End */}
    </>
  );
}

export default Sidebar;
