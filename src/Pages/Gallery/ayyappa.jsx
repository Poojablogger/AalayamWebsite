import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

import a1 from "../../assets/images/ayyappa/ayyappa1.jpg";
import a2 from "../../assets/images/ayyappa/ayyappa2.jpg";
import a3 from "../../assets/images/ayyappa/ayyappa3.jpg";
import a4 from "../../assets/images/ayyappa/ayyappa4.jpg";
import a5 from "../../assets/images/ayyappa/ayyappa5.jpg";
import a6 from "../../assets/images/ayyappa/ayyappa6.jpg";
import a7 from "../../assets/images/ayyappa/ayyappa7.jpg";
import a8 from "../../assets/images/ayyappa/ayyappa8.jpg";
import a9 from "../../assets/images/ayyappa/ayyappa9.jpg";
import a10 from "../../assets/images/ayyappa/ayyappa10.jpg";
import a11 from "../../assets/images/ayyappa/ayyappa11.jpg";
import a12 from "../../assets/images/ayyappa/ayyappa12.jpg";
import a13 from "../../assets/images/ayyappa/ayyappa13.jpg";
import a14 from "../../assets/images/ayyappa/ayyappa14.jpg";
import a15 from "../../assets/images/ayyappa/ayyappa15.jpg";
import a16 from "../../assets/images/ayyappa/ayyappa16.jpg";


import "./ayyappa.css";

export default function Ayyappa() {

  const wallpapers = [
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9,
    a10,
    a11,
    a12,
    a13,
    a14,
    a15,
    a16
  ];

  return (

    <section className="ayyappa-page py-5">

      <div className="container">

        {/* Back Button */}

        <Link
          to="/gallery"
          className="ayyappa-back-btn text-decoration-none"
        >
          <ArrowLeft size={20} />
          <span className="ms-2">Back to Gallery</span>
        </Link>

        {/* Heading */}

        <div className="text-center mb-5">

          <h1 className="ayyappa-title">
            Ayyappa Wallpapers
          </h1>

          <p className="ayyappa-subtitle">
            Download beautiful HD Ayyappa wallpapers for free.
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

                <div className="card ayyappa-card border-0">

                  <img
                    src={img}
                    alt={`Ayyappa ${index + 1}`}
                    className="card-img-top"
                  />

                  <div className="ayyappa-overlay">

                    
                    

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