import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: 'smooth' });
  }, [])

  return (
    <>

      <div className="hero_area">
        <Header />
        {/* slider section */}
        <section className="slider_section ">
          <div className="slider_bg_box">
            <img src="images/slider-bg.jpg" alt='' />
          </div>
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-8 col-lg-7 mx-auto">
                      <div className="detail-box">
                        <h1>
                          Professional
                          <br />
                          Industrial Services
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Eum magnam, voluptates distinctio, officia
                          architecto tenetur debitis hic aspernatur libero commodi
                          atque fugit adipisci, blanditiis quidem dolorum odit
                          voluptas? Voluptate, eveniet?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-8 col-lg-7 mx-auto">
                      <div className="detail-box">
                        <h1>
                          Professional
                          <br />
                          Industrial Services
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Eum magnam, voluptates distinctio, officia
                          architecto tenetur debitis hic aspernatur libero commodi
                          atque fugit adipisci, blanditiis quidem dolorum odit
                          voluptas? Voluptate, eveniet?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-8 col-lg-7 mx-auto">
                      <div className="detail-box">
                        <h1>
                          Professional
                          <br />
                          Industrial Services
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Eum magnam, voluptates distinctio, officia
                          architecto tenetur debitis hic aspernatur libero commodi
                          atque fugit adipisci, blanditiis quidem dolorum odit
                          voluptas? Voluptate, eveniet?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to={0}
                className="active"
              >
                01
              </li>
              <li data-target="#customCarousel1" data-slide-to={1}>
                02
              </li>
              <li data-target="#customCarousel1" data-slide-to={2}>
                03
              </li>
            </ol>
          </div>
        </section>
      </div>

      <section className="why_us_section layout_padding">
        <div className="why_bg_box">
          <img src="images/why-bg.jpg" alt='' />
        </div>
        <div className="why_us_container">
          <div className="container">
            <div className="box_container">
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <div className="box">
                    <div className="num-box">
                      <span id="countDay" className="count">
                        3850
                      </span>
                    </div>
                    <h5>Hours Of Work</h5>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="box">
                    <div className="num-box">
                      <span id="countSec" className="count">
                        219
                      </span>
                    </div>
                    <h5>Projects Completed</h5>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="box">
                    <div className="num-box">
                      <span id="countMin" className="count">
                        16
                      </span>
                    </div>
                    <h5>Industries Served</h5>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="box">
                    <div className="num-box">
                      <span id="countHour" className="count">
                        198
                      </span>
                    </div>
                    <h5>Satisfied Clients</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alt=''eration
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/s1.png" alt='' />
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
                    <img src="images/s2.png" alt='' />
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
                    <img src="images/s3.png" alt='' />
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
                    <img src="images/s4.png" alt='' />
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
                    <img src="images/s5.png" alt='' />
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
                    <img src="images/s6.png" alt='' />
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
      </section> */}

      <section className="about_section layout_padding-bottom">
        <div className="container  ">
          <div className="row">
            <div className="col-md-5 ">
              <div className="img-box">
                <img src="images/about-img.jpg" alt='' />
              </div>
            </div>
            <div className="col-md-7">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    About <span>Us</span>
                  </h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alt=''eration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All
                </p>
                <a href>Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              What Says Our <span>Clients</span>
            </h2>
          </div>
          <div className="carousel-wrap ">
            <div className="owl-carousel client_owl-carousel">
              <div className="item">
                <div className="box">
                  <div className="client_id">
                    <div className="img-box">
                      <img src="images/c1.jpg" alt='' className="box-img" />
                    </div>
                    <h5>Mike Trope</h5>
                  </div>
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis
                    </p>
                    <h6 className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </h6>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="client_id">
                    <div className="img-box">
                      <img src="images/c2.jpg" alt='' className="box-img" />
                    </div>
                    <h5>Jonas Bell</h5>
                  </div>
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis
                    </p>
                    <h6 className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="contact_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="heading_container">
                <h2>
                  Contact <span>Us</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="form_container">
                <form action>
                  <div>
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Message"
                    />
                  </div>
                  <div className="btn_box">
                    <button>SEND</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 px-0">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* end contact section */}
      <Footer />
    </>
  );
}

export default Home;
