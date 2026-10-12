import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

import a1 from "../../assets/images/azhagar/azhagar1.jpg";
import a2 from "../../assets/images/azhagar/azhagar2.jpg";
import a3 from "../../assets/images/azhagar/azhagar3.jpg";
import a4 from "../../assets/images/azhagar/azhagar4.jpg";
import a5 from "../../assets/images/azhagar/azhagar5.jpg";
import a6 from "../../assets/images/azhagar/azhagar6.jpeg";
import a7 from "../../assets/images/azhagar/azhagar7.jpeg";
import a8 from "../../assets/images/azhagar/azhagar8.jpeg";
import a9 from "../../assets/images/azhagar/azhagar9.jpeg";
import a10 from "../../assets/images/azhagar/azhagar10.jpeg";
import a11 from "../../assets/images/azhagar/azhagar11.jpeg";
import a12 from "../../assets/images/azhagar/azhagar12.jpeg";
import "./azhagar.css";

export default function azhagar() {

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
    a12
    
  ];

  return (

    <section className="azhagar-page py-5">

      <div className="container">

        {/* Back Button */}

        <Link
          to="/gallery"
          className="azhagar-back-btn text-decoration-none"
        >
          <ArrowLeft size={20} />
          <span className="ms-2">Back to Gallery</span>
        </Link>

        {/* Heading */}

        <div className="text-center mb-5">

          <h1 className="azhagar-title">
            Azhagar Wallpapers
          </h1>

          <p className="azhagar-subtitle">
            Download beautiful HD azhagar wallpapers for free.
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

                <div className="card azhagar-card border-0">

                  <img
                    src={img}
                    alt={`azhagar ${index + 1}`}
                    className="card-img-top"
                  />

                  <div className="azhagar-overlay">

                   
                   
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