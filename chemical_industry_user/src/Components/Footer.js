import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>
                  About Us
                </h4>
                <p>
                  Consectetur nobis minima harum beatae repudiandae ad adipisci recusandae unde, quaerat, voluptatibus voluptatum aut eveniet est assumenda iusto quos. Nam soluta, error illum
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>
                  Links
                </h4>
                <div className="info_links">
                  <Link className="active" to="/">
                    Home
                  </Link>
                  <Link className="active" to="/service">
                    Services
                  </Link>
                  <Link className="active" to="/about">
                    About
                  </Link>
                  <Link className="active" to="/contact">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact ">
                <h4>
                  Get In Touch
                </h4>
                <div className="contact_link_box info_links">
                  <Link >
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>
                      Location
                    </span>
                  </Link>
                  <Link to='tel:+01 1234567890'>
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span>
                      Call +01 1234567890
                    </span>
                  </Link>
                  <Link to="mailto:demo@gmail">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <span>
                      demo@gmail.com
                    </span>
                  </Link>
                </div>
              </div>
              {/* <div className="info_social">
                <Link to>
                  <i className="fa fa-facebook" aria-hidden="true" />
                </Link>
                <Link to>
                  <i className="fa fa-twitter" aria-hidden="true" />
                </Link>
                <Link to>
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </Link>
                <Link to>
                  <i className="fa fa-instagram" aria-hidden="true" />
                </Link>
              </div> */}
            </div>
            {/* <div className="col-md-6 col-lg-3 info_col ">
              <h4>
                Subscribe
              </h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </section>
      <section className="footer_section">
        <div className="container">
          <p>
            © <span id="displayYear" /> All Rights Reserved By
            <Link to="https://html.design/">Free Html Templates</Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;
