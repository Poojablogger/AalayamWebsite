import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

import m1 from "../../assets/images/muruga/muruga1.webp";
import m2 from "../../assets/images/muruga/muruga2.jpg";
import m3 from "../../assets/images/muruga/muruga3.jpg";
import m4 from "../../assets/images/muruga/muruga4.jpg";
import m5 from "../../assets/images/muruga/muruga5.jpg";
import m6 from "../../assets/images/muruga/muruga6.webp";
import m7 from "../../assets/images/muruga/muruga7.jpg";
import m8 from "../../assets/images/muruga/muruga8.webp";
import m9 from "../../assets/images/muruga/muruga9.jpg";
import m10 from "../../assets/images/muruga/muruga10.jpg";
import m11 from "../../assets/images/muruga/muruga11.webp";
import m12 from "../../assets/images/muruga/muruga12.jpg";


import "./muruga.css";

export default function muruga() {

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
    m12
    
  ];

  return (

    <section className="muruga-page py-5">

      <div className="container">

        {/* Back Button */}

        <Link
          to="/gallery"
          className="muruga-back-btn text-decoration-none"
        >
          <ArrowLeft size={20} />
          <span className="ms-2">Back to Gallery</span>
        </Link>

        {/* Heading */}

        <div className="text-center mb-5">

          <h1 className="muruga-title">
            Muruga Wallpapers
          </h1>

          <p className="muruga-subtitle">
            Download beautiful HD Muruga wallpapers for free.
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

                <div className="card muruga-card border-0">

                  <img
                    src={img}
                    alt={`muruga ${index + 1}`}
                    className="card-img-top"
                  />

                  <div className="muruga-overlay">

                    
                    

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