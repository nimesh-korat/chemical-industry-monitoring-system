import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from "cdbreact";

function DeviceLocation() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/getDeviceLocation")
      .then((response) => response.json())
      .then((data) => setDatas(data)).catch((error) => console.log(error));
  }, []);

  var formattedSensorData = [];
  if (datas.length === 0) {
  } else {
    formattedSensorData = datas.data?.map((sensor) => ({
      Device: sensor.deviceName,
      Area: sensor.area,
      "Login ID": sensor.loginId,
    }));
  }

  if (formattedSensorData.length === 0) {
    return null; // Return nothing if there is no sensor data
  }

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
                <h6 className="mb-0">Device Location</h6>
              </div>
              <div className="table-responsive">
                <div className="row">
                  <div className="col-sm-12">
                    <CDBContainer>
                      <CDBCard>
                        <CDBCardBody>
                          <CDBDataTable
                            striped
                            bordered
                            hover
                            entriesOptions={[5, 20, 25]}
                            entries={5}
                            pagesAmount={4}
                            data={{
                              columns: Object.keys(
                                formattedSensorData[0] || {}
                              ).map((key) => ({
                                label: key,
                                field: key,
                              })),
                              rows: formattedSensorData,
                            }}
                            materialSearch={true}
                          />
                        </CDBCardBody>
                      </CDBCard>
                    </CDBContainer>
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

export default DeviceLocation;
