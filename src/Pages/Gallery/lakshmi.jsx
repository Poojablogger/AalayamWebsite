import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

import l1 from "../../assets/images/lakshmi/lakshmi1.jpg";
import l2 from "../../assets/images/lakshmi/lakshmi2.jpg";
import l3 from "../../assets/images/lakshmi/lakshmi3.jpg";
import l4 from "../../assets/images/lakshmi/lakshmi4.jpg";
import l5 from "../../assets/images/lakshmi/lakshmi5.jpg";
import l6 from "../../assets/images/lakshmi/lakshmi6.jpg";
import l7 from "../../assets/images/lakshmi/lakshmi7.jpg";
import l8 from "../../assets/images/lakshmi/lakshmi8.jpg";
import l9 from "../../assets/images/lakshmi/lakshmi9.jpg";
import l10 from "../../assets/images/lakshmi/lakshmi10.jpg";
import l11 from "../../assets/images/lakshmi/lakshmi11.jpg";
import l12 from "../../assets/images/lakshmi/lakshmi12.jpg";

import "./lakshmi.css";

export default function Lakshmi() {

  const wallpapers = [
    l1,
    l2,
    l3,
    l4,
    l5,
    l6,
    l7,
    l8,
    l9,
    l10,
    l11,
    l12
  ];

  return (

    <section className="lakshmi-page py-5">

      <div className="container">

        {/* Back Button */}

        <Link
          to="/gallery"
          className="lakshmi-back-btn text-decoration-none"
        >
          <ArrowLeft size={20} />
          <span className="ms-2">Back to Gallery</span>
        </Link>

        {/* Heading */}

        <div className="text-center mb-5">

          <h1 className="lakshmi-title">
            Lakshmi Wallpapers
          </h1>

          <p className="lakshmi-subtitle">
            Download beautiful HD Lakshmi wallpapers for free.
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

                <div className="card lakshmi-card border-0">

                  <img
                    src={img}
                    alt={`Lakshmi ${index + 1}`}
                    className="card-img-top"
                  />

                  <div className="lakshmi-overlay">

                   
                   
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