import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

import s1 from "../../assets/images/saibaba/saibaba1.jpg";
import s2 from "../../assets/images/saibaba/saibaba2.jpg";
import s3 from "../../assets/images/saibaba/saibaba3.jpg";
import s4 from "../../assets/images/saibaba/saibaba4.jpg";
import s5 from "../../assets/images/saibaba/saibaba5.jpg";
import s6 from "../../assets/images/saibaba/saibaba6.jpg";
import s7 from "../../assets/images/saibaba/saibaba7.jpg";
import s8 from "../../assets/images/saibaba/saibaba8.jpg";
import s9 from "../../assets/images/saibaba/saibaba9.jpg";
import s10 from "../../assets/images/saibaba/saibaba10.jpg";
import s11 from "../../assets/images/saibaba/saibaba11.jpg";
import s12 from "../../assets/images/saibaba/saibaba12.jpg";
import "./saibaba.css";

export default function Saibaba() {

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
    s12,
  ];

  return (

    <section className="saibaba-page py-5">

      <div className="container">

        {/* Back Button */}

        <Link
          to="/gallery"
          className="saibaba-back-btn text-decoration-none"
        >
          <ArrowLeft size={20} />
          <span className="ms-2">Back to Gallery</span>
        </Link>

        {/* Heading */}

        <div className="text-center mb-5">

          <h1 className="saibaba-title">
            Saibaba Wallpapers
          </h1>

          <p className="saibaba-subtitle">
            Download beautiful HD Saibaba wallpapers for free.
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

                <div className="card saibaba-card border-0">

                  <img
                    src={img}
                    alt={`saibaba ${index + 1}`}
                    className="card-img-top"
                  />

                  <div className="saibaba-overlay">

                    
                    

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