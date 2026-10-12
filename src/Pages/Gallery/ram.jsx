import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

import r1 from "../../assets/images/ram/ram1.jpg";
import r2 from "../../assets/images/ram/ram2.jpg";
import r3 from "../../assets/images/ram/ram3.jpg";
import r4 from "../../assets/images/ram/ram4.jpg";
import r5 from "../../assets/images/ram/ram5.jpg";
import r6 from "../../assets/images/ram/ram6.jpg";
import r7 from "../../assets/images/ram/ram7.jpg";
import r8 from "../../assets/images/ram/ram8.jpg";
import r9 from "../../assets/images/ram/ram9.jpg";
import r10 from "../../assets/images/ram/ram10.jpg";
import r11 from "../../assets/images/ram/ram11.jpg";
import r12 from "../../assets/images/ram/ram12.jpg";
import r13 from "../../assets/images/ram/ram12.jpg";
import r14 from "../../assets/images/ram/ram12.jpg";
import r15 from "../../assets/images/ram/ram12.jpg";
import r16 from "../../assets/images/ram/ram12.jpg";
import "./ram.css";

export default function Ram() {

  const wallpapers = [
    r1,
    r2,
    r3,
    r4,
    r5,
    r6,
    r7,
    r8,
    r9,
    r10,
    r11,
    r12,
    r13,
    r14,
    r15,
    r16
  ];

  return (

    <section className="ram-page py-5">

      <div className="container">

        {/* Back Button */}

        <Link
          to="/gallery"
          className="ram-back-btn text-decoration-none"
        >
          <ArrowLeft size={20} />
          <span className="ms-2">Back to Gallery</span>
        </Link>

        {/* Heading */}

        <div className="text-center mb-5">

          <h1 className="ram-title">
            Ram Wallpapers
          </h1>

          <p className="ram-subtitle">
            Download beautiful HD ram wallpapers for free.
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

                <div className="card ram-card border-0">

                  <img
                    src={img}
                    alt={`ram ${index + 1}`}
                    className="card-img-top"
                  />

                  <div className="ram-overlay">

                    
                    

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