import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import { CDBDataTable } from "cdbreact";

function Users() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/getUsers")
      .then((response) => response.json())
      .then((data) => setDatas(data));
  }, []);

  var formattedUserData = [];
  if (datas.length === 0) {
  } else {
    formattedUserData = datas.data?.map((sensor) => ({
      "User ID": sensor._id,
      "User Name": sensor.username,
      Email: sensor.email,
    }));
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
                <h6 className="mb-0">Users Data</h6>
              </div>
              <div className="table-responsive">
                <div className="row">
                  <div className="col-sm-12">
                    {
                      formattedUserData.length === 0 ? null : (
                        <CDBDataTable
                          striped
                          bordered
                          hover
                          entriesOptions={[5, 20, 25]}
                          entries={5}
                          pagesAmount={4}
                          data={{
                            columns: Object.keys(
                              formattedUserData[0] || {}
                            ).map((key) => ({
                              label: key,
                              field: key,
                            })),
                            rows: formattedUserData,
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

export default Users;
