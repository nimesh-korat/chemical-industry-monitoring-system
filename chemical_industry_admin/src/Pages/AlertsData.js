import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import { CDBDataTable } from "cdbreact";

function AlertsData() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/viewAlertsAdmin")
      .then((response) => response.json())
      .then((data) => setDatas(data)).catch((error) => console.log(error));
  }, []);

  const formattedAlertData =
    datas.alerts?.length > 0
      ? datas.alerts.map((sensor) => ({
        "Device ID": sensor._id,
        "User ID": sensor.userId,
        "Device Name": sensor.deviceName,
        Sensor: sensor.sensorName,
        Value: sensor.sensorValue,
        Area: sensor.area,
        Time: new Date(sensor.timestamp).toLocaleString(),
      }))
      : [];

  return (
    <>
      <div>
        <Sidebar />
        <div id="content" className="content">
          <Header />
          {/* Recent Sales Start */}
          <div className="container-fluid pt-4 px-4">
            <div className="bg-light text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Alerts Data</h6>
              </div>
              <div className="table-responsive">
                <div className="row">
                  <div className="col-sm-12">
                    {formattedAlertData.length === 0 ? null :
                      (
                        <CDBDataTable
                          striped
                          bordered
                          hover
                          entriesOptions={[5, 20, 25]}
                          entries={5}
                          pagesAmount={4}
                          data={{
                            columns: Object.keys(
                              formattedAlertData[0] || {}
                            ).map((key) => ({
                              label: key,
                              field: key,
                            })),
                            rows: formattedAlertData,
                          }}
                        />
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recent Sales End */}
        </div>
        {/* Content End */}
        {/* Back to Top */}
        <a
          href="/#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
      </div>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </>
  );
}

export default AlertsData;
