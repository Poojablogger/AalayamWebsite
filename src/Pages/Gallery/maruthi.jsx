import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

import m1 from "../../assets/images/maruthi/maruthi1.jpg";
import m2 from "../../assets/images/maruthi/maruthi2.jpg";
import m3 from "../../assets/images/maruthi/maruthi3.jpg";
import m4 from "../../assets/images/maruthi/maruthi4.jpg";
import m5 from "../../assets/images/maruthi/maruthi5.jpg";
import m6 from "../../assets/images/maruthi/maruthi6.jpg";
import m7 from "../../assets/images/maruthi/maruthi7.jpg";
import m8 from "../../assets/images/maruthi/maruthi8.jpg";
import m9 from "../../assets/images/maruthi/maruthi9.jpg";
import m10 from "../../assets/images/maruthi/maruthi10.jpg";
import m11 from "../../assets/images/maruthi/maruthi11.jpg";
import m12 from "../../assets/images/maruthi/maruthi12.jpg";
import m13 from "../../assets/images/maruthi/maruthi13.jpg";
import m14 from "../../assets/images/maruthi/maruthi14.jpg";
import m15 from "../../assets/images/maruthi/maruthi15.jpeg";
import m16 from "../../assets/images/maruthi/maruthi16.jpeg";

import "./maruthi.css";

export default function maruthi() {

  const wallpapers = [
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8,
    m9,
    m10,
    m11,
    m12,
    m13,
    m14,
    m15,
    m16
  ];

  return (

    <section className="maruthi-page py-5">

      <div className="container">

        {/* Back Button */}

        <Link
          to="/gallery"
          className="maruthi-back-btn text-decoration-none"
        >
          <ArrowLeft size={20} />
          <span className="ms-2">Back to Gallery</span>
        </Link>

        {/* Heading */}

        <div className="text-center mb-5">

          <h1 className="maruthi-title">
            Maruthi Wallpapers
          </h1>

          <p className="maruthi-subtitle">
            Download beautiful HD Maruthi wallpapers for free.
          </p>

        </div>

        {/* Wallpapers */}

        <div className="row g-4">

          {
            wallpapers.map((img, index) => (

              <div
                className="col-lg-3 col-md-4 col-sm-6"
                key={index}
              >

                <div className="card maruthi-card border-0">

                  <img
                    src={img}
                    alt={`maruthi ${index + 1}`}
                    className="card-img-top"
                  />

                  <div className="maruthi-overlay">

                   
                   
                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </section>

  );

}