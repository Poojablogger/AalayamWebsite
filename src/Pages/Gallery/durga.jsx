import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

import d1 from "../../assets/images/durga/durga1.jpg";
import d2 from "../../assets/images/durga/durga2.jpg";
import d3 from "../../assets/images/durga/durga3.jpg";
import d4 from "../../assets/images/durga/durga4.jpg";
import d5 from "../../assets/images/durga/durga5.jpg";
import d6 from "../../assets/images/durga/durga6.jpg";
import d7 from "../../assets/images/durga/durga7.jpg";
import d8 from "../../assets/images/durga/durga8.jpg";
import d9 from "../../assets/images/durga/durga9.jpg";
import d10 from "../../assets/images/durga/durga10.jpg";
import d11 from "../../assets/images/durga/durga11.jpg";
import d12 from "../../assets/images/durga/durga12.jpg";

import "./durga.css";

export default function durga() {

  const wallpapers = [
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
    d7,
    d8,
    d9,
    d10,
    d11,
    d12
  ];

  return (

    <section className="durga-page py-5">

      <div className="container">

        {/* Back Button */}

        <Link
          to="/gallery"
          className="durga-back-btn text-decoration-none"
        >
          <ArrowLeft size={20} />
          <span className="ms-2">Back to Gallery</span>
        </Link>

        {/* Heading */}

        <div className="text-center mb-5">

          <h1 className="durga-title">
            Durga Wallpapers
          </h1>

          <p className="durga-subtitle">
            Download beautiful HD Durga wallpapers for free.
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

                <div className="card shiva-card border-0">

                  <img
                    src={img}
                    alt={`durga ${index + 1}`}
                    className="card-img-top"
                  />

                  <div className="durga-overlay">

                    
                    

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