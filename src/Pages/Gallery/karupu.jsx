import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

import k1 from "../../assets/images/karupu/karupu1.jpg";
import k2 from "../../assets/images/karupu/karupu2.jpg";
import k3 from "../../assets/images/karupu/karupu3.webp";
import k4 from "../../assets/images/karupu/karupu4.jpg";
import k5 from "../../assets/images/karupu/karupu5.jpg";
import k6 from "../../assets/images/karupu/karupu6.jpg";
import k7 from "../../assets/images/karupu/karupu7.jpg";
import k8 from "../../assets/images/karupu/karupu8.jpg";
import k9 from "../../assets/images/karupu/karupu9.jpg";
import k10 from "../../assets/images/karupu/karupu10.webp";
import k11 from "../../assets/images/karupu/karupu11.jpg";
import k12 from "../../assets/images/karupu/karupu12.webp";

import "./karupu.css";

export default function karupu() {

  const wallpapers = [
    k1,
    k2,
    k3,
    k4,
    k5,
    k6,
    k7,
    k8,
    k9,
    k10,
    k11,
    k12
    
  ];

  return (

    <section className="karupu-page py-5">

      <div className="container">

        {/* Back Button */}

        <Link
          to="/gallery"
          className="karupu-back-btn text-decoration-none"
        >
          <ArrowLeft size={20} />
          <span className="ms-2">Back to Gallery</span>
        </Link>

        {/* Heading */}

        <div className="text-center mb-5">

          <h1 className="karupu-title">
            karupu Wallpapers
          </h1>

          <p className="karupu-subtitle">
            Download beautiful HD Karupu wallpapers for free.
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

                <div className="card karupu-card border-0">

                  <img
                    src={img}
                    alt={`karupu ${index + 1}`}
                    className="card-img-top"
                  />

                  <div className="karupu-overlay">

                    
                    
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