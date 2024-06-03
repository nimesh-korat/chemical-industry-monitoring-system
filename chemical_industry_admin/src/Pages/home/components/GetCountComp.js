import React, { useEffect, useState } from "react";

function GetCountComp() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("http://localhost:8000/getCounts")
      .then((response) => response.json())
      .then((data) => {
        setCount(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return count === 0 ? (
    <div>Please Wait</div>
  ) : (
    <>
      <div className="row g-4">
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-chart-line fa-3x text-primary" />
            <div className="ms-3">
              <p className="mb-2">Complaints</p>
              <h6 className="mb-0">{count.totalComplaints}</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-chart-bar fa-3x text-primary" />
            <div className="ms-3">
              <p className="mb-2">Alerts</p>
              <h6 className="mb-0">{count.totalAlerts}</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-chart-area fa-3x text-primary" />
            <div className="ms-3">
              <p className="mb-2">Devices</p>
              <h6 className="mb-0">{count.totalDevices}</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-chart-pie fa-3x text-primary" />
            <div className="ms-3">
              <p className="mb-2">Users</p>
              <h6 className="mb-0">{count.totalUsers}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetCountComp;
