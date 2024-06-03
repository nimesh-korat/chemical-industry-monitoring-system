import React, { useEffect, useState } from "react";
import { CDBDataTable } from "cdbreact";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import GetCountComp from "./components/GetCountComp";

function Home() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/getDeviceLocation")
      .then((response) => response.json())
      .then((data) => setDatas(data))
      .catch((error) => console.log(error));
  }, []);

  var formattedSensorData = [];
  if (datas.length === 0) {
  } else {
    formattedSensorData = datas.data?.map((sensor) => ({
      Device: sensor.deviceName,
      Area: sensor.area,
      "User ID": sensor.userId,
    }));
  }

  return (
    <>
      <div>
        <Sidebar />
        <div id="content" className="content">
          <Header />
          {/* Sale & Revenue Start */}
          <div className="container-fluid pt-4 px-4">
            <GetCountComp />
          </div>
          {/* Sale & Revenue End */}
          {/* Recent Sales Start */}
          <div className="container-fluid pt-4 px-4">
            <div className="bg-light text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Devices</h6>
                <a href="/#">Show All</a>
              </div>
              <div className="table-responsive">
                <div className="row">
                  <div className="col-sm-12">
                    {
                      formattedSensorData.length === 0 ? null :
                        (
                          <CDBDataTable
                            striped
                            bordered
                            hover
                            entriesOptions={[5, 10, 15]}
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
                          />
                        )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recent Sales End */}
          <Footer />
        </div>
        {/* Content End */}
        {/* Back to Top */}
      </div>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </>
  );
}

export default Home;
