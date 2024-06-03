import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: 'smooth' });
  }, [])

  return (
    <>
      <Header />
      <section className="about_section layout_padding">
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
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                  in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                  are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                  the middle of text. All
                </p>
                <a href>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}
      {/* info section */}

      <Footer />

    </>
  )
}

export default About