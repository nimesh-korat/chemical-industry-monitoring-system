import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Service() {
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: 'smooth' });
  }, [])

  return (
    <>
      <Header />
      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/s1.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Oil &amp; Gas Production</h5>
                    <p>
                      fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of
                      using
                    </p>
                    <a href>
                      Read More
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/s2.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Mechanical Engineering</h5>
                    <p>
                      fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of
                      using
                    </p>
                    <a href>
                      Read More
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/s3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Chemical Research</h5>
                    <p>
                      fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of
                      using
                    </p>
                    <a href>
                      Read More
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/s4.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Power &amp; Energy</h5>
                    <p>
                      fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of
                      using
                    </p>
                    <a href>
                      Read More
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/s5.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Civil Engineering</h5>
                    <p>
                      fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of
                      using
                    </p>
                    <a href>
                      Read More
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/s6.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Metal Industry</h5>
                    <p>
                      fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of
                      using
                    </p>
                    <a href>
                      Read More
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Service;
