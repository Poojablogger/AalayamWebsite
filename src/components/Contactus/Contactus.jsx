import React from "react";
import "./Contactus.css";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contactus() {
  return (
    <section className="contact-page">

      {/* Decorative Background */}
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="container">

        {/* HEADER */}
        <div className="contact-heading text-center">

          <span className="contact-badge">
            ✦ CONNECT WITH US ✦
          </span>

          <h1>
            Get in <span>Touch</span>
          </h1>

          <div className="contact-gold-line"></div>

          <p>
            Have a question, feedback, or simply want to connect with us?
            <br />
            We'd love to hear from you.
          </p>

        </div>


        {/* CONTACT CONTENT */}
        <div className="row justify-content-center g-5 contact-content">

          {/* LEFT SIDE */}
          <div className="col-lg-4">

            <div className="contact-info">

              <h2>
                Let's Connect
              </h2>

              <p>
                Your thoughts and feedback help us make Alayam
                better for everyone. Reach out to us anytime.
              </p>


              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <span>Email</span>
                  <strong>aalayamposter@gmail.com</strong>
                </div>

              </div>


              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <FaPhone />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>+91 97888 50889</strong>
                </div>

              </div>


              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <span>Location</span>
                  <strong>Tamil Nadu, India</strong>
                </div>

              </div>


              <div className="contact-blessing">
                🪔
                <p>
                  "May every connection bring
                  positivity and blessings."
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE FORM */}
          <div className="col-lg-7">

            <div className="contact-form-card">

              <div className="form-title">
                <h2>
                  Send Us a Message
                </h2>

                <p>
                  We'd be happy to hear from you.
                </p>
              </div>


              <form>

                <div className="row g-4">

                  {/* NAME */}
                  <div className="col-md-6">

                    <label>
                      Your Name <span>*</span>
                    </label>

                    <div className="contact-input">

                      <FaUser />

                      <input
                        type="text"
                        placeholder="Enter your name"
                      />

                    </div>

                  </div>


                  {/* EMAIL */}
                  <div className="col-md-6">

                    <label>
                      Your Email <span>*</span>
                    </label>

                    <div className="contact-input">

                      <FaEnvelope />

                      <input
                        type="email"
                        placeholder="Enter your email"
                      />

                    </div>

                  </div>


                  {/* PHONE */}
                  <div className="col-md-6">

                    <label>
                      Phone Number
                    </label>

                    <div className="contact-input">

                      <FaPhone />

                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                      />

                    </div>

                  </div>


                  {/* SUBJECT */}
                  <div className="col-md-6">

                    <label>
                      Subject
                    </label>

                    <div className="contact-input">

                      <input
                        type="text"
                        placeholder="How can we help?"
                      />

                    </div>

                  </div>


                  {/* MESSAGE */}
                  <div className="col-12">

                    <label>
                      Your Message <span>*</span>
                    </label>

                    <textarea
                      rows="6"
                      placeholder="Write your message here..."
                    ></textarea>

                  </div>


                  {/* BUTTON */}
                  <div className="col-12">

                    <button
                      type="submit"
                      className="contact-submit-btn"
                    >

                      <FaPaperPlane />

                      Send Message

                    </button>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contactus;