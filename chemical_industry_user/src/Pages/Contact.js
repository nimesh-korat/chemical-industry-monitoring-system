import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [complaintData, setComplaintData] = useState({
    userName: "",
    compDetails: ""
  })

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: 'smooth' });
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setComplaintData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:8000/addComplaints", complaintData);
      if (response.data.success) {
        alert(response.data.message);
        navigate("/");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  return (
    <>
      <Header />
      {/* contact section */}
      <section className="contact_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="heading_container">
                <h2>
                  Add <span>Complaint</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="form_container">
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="userName"
                      onChange={handleChange}
                      value={complaintData.userName}
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="compDetails"
                      className="message-box"
                      onChange={handleChange}
                      value={complaintData.compDetails}
                      placeholder="Message"
                      required
                    />
                  </div>
                  <div className="btn_box">
                    <button type="submit">SEND</button>
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
      </section>
      <Footer />
    </>
  );
}

export default Contact;
