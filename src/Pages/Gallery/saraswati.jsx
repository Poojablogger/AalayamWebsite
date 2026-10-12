import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

import s1 from "../../assets/images/saraswati/saraswati1.jpg";
import s2 from "../../assets/images/saraswati/saraswati2.jpg";
import s3 from "../../assets/images/saraswati/saraswati3.jpg";
import s4 from "../../assets/images/saraswati/saraswati4.jpg";
import s5 from "../../assets/images/saraswati/saraswati5.jpg";
import s6 from "../../assets/images/saraswati/saraswati6.jpg";
import s7 from "../../assets/images/saraswati/saraswati7.jpg";
import s8 from "../../assets/images/saraswati/saraswati8.jpg";
import s9 from "../../assets/images/saraswati/saraswati9.jpg";
import s10 from "../../assets/images/saraswati/saraswati10.jpg";
import s11 from "../../assets/images/saraswati/saraswati11.jpg";
import s12 from "../../assets/images/saraswati/saraswati12.jpg";

import "./saraswati.css";

export default function Saraswati() {

  const wallpapers = [
    s1,
    s2,
    s3,
    s4,
    s5,
    s6,
    s7,
    s8,
    s9,
    s10,
    s11,
    s12
  ];

  return (

    <section className="saraswati-page py-5">

      <div className="container">

        {/* Back Button */}

        <Link
          to="/gallery"
          className="saraswati-back-btn text-decoration-none"
        >
          <ArrowLeft size={20} />
          <span className="ms-2">Back to Gallery</span>
        </Link>

        {/* Heading */}

        <div className="text-center mb-5">

          <h1 className="saraswati-title">
            Saraswati Wallpapers
          </h1>

          <p className="saraswati-subtitle">
            Download beautiful HD Saraswati wallpapers for free.
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

                <div className="card saraswati-card border-0">

                  <img
                    src={img}
                    alt={`Saraswati ${index + 1}`}
                    className="card-img-top"
                  />

                  <div className="saraswati-overlay">

                    
                    

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