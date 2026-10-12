import { useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Categories.css";

import mandala from "../../assets/images/mandala.png";

import ganesha from "../../assets/images/ganesha/ganesha.jpg";
import saibaba from "../../assets/images/saibaba/saibaba.jpg";
import durga from "../../assets/images/durga/durga.jpg";
import karupu from "../../assets/images/karupu/karupu.jpg";
import shiva from "../../assets/images/shiva/shiva.jpg";
import ram from "../../assets/images/ram/ram.jpg";
import ayyappa from "../../assets/images/ayyappa/ayyappa.jpg";
import lakshmi from "../../assets/images/lakshmi/lakshmi.jpg";
import maruthi from "../../assets/images/maruthi/maruthi.jpg";
import saraswati from "../../assets/images/saraswati/saraswati.jpg";
import muruga from "../../assets/images/muruga/muruga.webp";
import azhagar from "../../assets/images/azhagar/azhagar.webp";

const categories = [
  {
    key: "ganesha",
    image: ganesha,
  },
  {
    key: "devi",
    image: saibaba,
  },
  {
    key: "durga",
    image: durga,
  },
  {
    key: "karupu",
    image: karupu,
  },
  {
    key: "shiva",
    image: shiva,
  },
  {
    key: "ram",
    image: ram,
  },
  {
    key: "ayyappa",
    image: ayyappa,
  },
  {
    key: "lakshmi",
    image: lakshmi,
  },
  {
    key: "maruthi",
    image: maruthi,
  },
  {
    key: "saraswati",
    image: saraswati,
  },
  {
    key: "muruga",
    image: muruga,
  },
  {
    key: "azhagar",
    image: azhagar,
  },
];

function Categories() {
  const navigate = useNavigate();

  const slider = useRef(null);
  const sectionRef = useRef(null);

  const { t } = useTranslation();

  /* =========================
     Slide Left
  ========================= */

  const slideLeft = () => {
    if (slider.current) {
      slider.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  /* =========================
     Slide Right
  ========================= */

  const slideRight = () => {
    if (slider.current) {
      slider.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  /* =========================
     Scroll Animation
  ========================= */

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards =
      sectionRef.current.querySelectorAll(
        ".category-card, .more-card"
      );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index =
              entry.target.dataset.index || 0;

            const delay = index * 90;

            setTimeout(() => {
              entry.target.classList.add("in-view");
            }, delay);

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cards.forEach((card) =>
      observer.observe(card)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');

        /* =========================
           CATEGORIES SECTION
        ========================= */

        .categories-section {
          position: relative;
          background: #fff8ef;
          padding: 80px 0 90px;
          overflow: hidden;
        }


        /* =========================
           KOLAM STRIP
        ========================= */

        .kolam-strip {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;

          background-image:
            radial-gradient(
              #c58a09 1px,
              transparent 1px
            );

          background-size: 26px 26px;

          opacity: 0.35;
          pointer-events: none;
        }


        /* =========================
           HEADING
        ========================= */

        .categories-badge {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 8px;
        }

        .category-small-title {
          font-family: "Poppins", sans-serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 4px;
          color: #c58a09;
          text-transform: uppercase;
        }

        .category-title {
          font-family: "Cormorant Garamond", serif;
          font-weight: 700;
          font-size: 48px;
          color: #4a1d1d;
          margin-bottom: 10px;
        }

        .category-text {
          font-family: "Poppins", sans-serif;
          font-weight: 400;
          font-size: 17px;
          color: #6b7280;
        }


        /* =========================
           MANDALA
        ========================= */

        .categories-mandala {
          width: 55px;
          height: 55px;
          object-fit: contain;
          margin: 8px auto 10px;
          display: block;
        }


        /* =========================
           SLIDER WRAPPER
        ========================= */

        .category-wrapper {
          position: relative;
        }

        .category-slider {
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 12px 6px 20px;
          width: 100%;
        }

        .category-slider::-webkit-scrollbar {
          display: none;
        }

        .category-slider {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }


        /* =========================
           CATEGORY CARDS
        ========================= */

        .category-card {
          position: relative;

          width: 230px;
          height: 320px;

          border-radius: 22px;
          overflow: hidden;

          cursor: pointer;

          box-shadow:
            0 18px 40px -16px
            rgba(74, 29, 29, 0.35);

          opacity: 0;

          transform:
            translateY(40px)
            scale(0.96);

          transition:
            opacity 0.7s ease,
            transform 0.7s ease,
            box-shadow 0.4s ease;
        }

        .category-card.in-view {
          opacity: 1;

          transform:
            translateY(0)
            scale(1);
        }

        .category-card:hover {
          transform:
            translateY(-8px)
            scale(1.02);

          box-shadow:
            0 24px 50px -14px
            rgba(74, 29, 29, 0.45);
        }

        .category-card img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          transition:
            transform 0.6s ease;
        }

        .category-card:hover img {
          transform: scale(1.08);
        }


        /* =========================
           CARD OVERLAY
        ========================= */

        .category-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(20, 8, 6, 0.9) 0%,
              rgba(20, 8, 6, 0.25) 45%,
              rgba(20, 8, 6, 0) 70%
            );
        }

        .category-content {
          position: absolute;

          bottom: 0;
          left: 0;
          right: 0;

          padding: 18px;
        }

        .category-content h4 {
          font-family: "Poppins", sans-serif;

          font-weight: 700;
          font-size: 17px;

          color: #fff;

          line-height: 1.3;

          max-width: 150px;

          margin: 0;
        }


        /* =========================
           CARD ARROW
        ========================= */

        .category-arrow {
          flex-shrink: 0;

          width: 32px;
          height: 32px;

          border-radius: 50%;

          background:
            rgba(255, 255, 255, 0.18);

          backdrop-filter: blur(2px);

          color: #fff;

          font-size: 13px;

          display: flex;
          align-items: center;
          justify-content: center;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }

        .category-card:hover .category-arrow {
          background: #c58a09;

          color: #2b1200;

          transform:
            translateX(2px);
        }


        /* =========================
           MORE CARD
        ========================= */

        .more-card {
          position: relative;

          width: 230px;
          height: 320px;

          flex-shrink: 0;

          border-radius: 22px;

          overflow: hidden;

          cursor: pointer;

          background:
            linear-gradient(
              145deg,
              #4a1d1d,
              #7b321f 55%,
              #c58a09
            );

          box-shadow:
            0 18px 40px -16px
            rgba(74, 29, 29, 0.35);

          display: flex;
          align-items: center;
          justify-content: center;

          opacity: 0;

          transform:
            translateY(40px)
            scale(0.96);

          transition:
            opacity 0.7s ease,
            transform 0.7s ease,
            box-shadow 0.4s ease;
        }

        .more-card.in-view {
          opacity: 1;

          transform:
            translateY(0)
            scale(1);
        }

        .more-card::before {
          content: "";

          position: absolute;

          width: 180px;
          height: 180px;

          border-radius: 50%;

          border:
            1px solid
            rgba(255, 255, 255, 0.22);

          top: -45px;
          right: -45px;
        }

        .more-card::after {
          content: "";

          position: absolute;

          width: 140px;
          height: 140px;

          border-radius: 50%;

          border:
            1px solid
            rgba(255, 255, 255, 0.18);

          bottom: -35px;
          left: -35px;
        }

        .more-card:hover {
          transform:
            translateY(-8px)
            scale(1.02);

          box-shadow:
            0 24px 50px -14px
            rgba(74, 29, 29, 0.5);
        }

        .more-card-content {
          position: relative;

          z-index: 2;

          text-align: center;

          color: #fff;

          padding: 20px;
        }

        .more-card-content h3 {
          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 34px;

          font-weight: 700;

          margin-bottom: 8px;
        }

        .more-card-content p {
          font-family:
            "Poppins",
            sans-serif;

          font-size: 14px;

          line-height: 1.6;

          color:
            rgba(255, 255, 255, 0.85);

          margin-bottom: 20px;
        }

        .more-card-button {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          padding: 10px 18px;

          border-radius: 30px;

          background: #fff;

          color: #4a1d1d;

          font-family:
            "Poppins",
            sans-serif;

          font-size: 13px;

          font-weight: 600;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }

        .more-card:hover
        .more-card-button {
          background: #fff2d2;

          color: #8b5e00;

          transform:
            translateX(3px);
        }


        /* =========================
           SLIDER BUTTONS
        ========================= */

        .slider-btn {
          position: absolute;

          top: 50%;

          transform:
            translateY(-50%);

          width: 46px;
          height: 46px;

          border-radius: 50%;

          border: none;

          background: #ffffff;

          color: #4a1d1d;

          font-size: 14px;

          box-shadow:
            0 10px 26px -8px
            rgba(74, 29, 29, 0.4);

          z-index: 5;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.2s ease;
        }

        .slider-btn:hover {
          background: #c58a09;

          color: #fff;

          transform:
            translateY(-50%)
            scale(1.06);
        }

        .left-btn {
          left: -23px;
        }

        .right-btn {
          right: -23px;
        }


        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 767px) {

          .categories-section {
            padding:
              70px 0 60px;
          }

          .category-title {
            font-size: 34px;
          }

          .category-text {
            font-size: 15px;
          }

          .category-card,
          .more-card {
            width: 190px;
            height: 270px;
          }

          .more-card-content h3 {
            font-size: 28px;
          }

          .more-card-content p {
            font-size: 12px;
          }

          .categories-mandala {
            width: 45px;
            height: 45px;
          }
        }

      `}</style>


      {/* =========================
          KOLAM
      ========================= */}

      <div className="kolam-strip"></div>


      <section
        className="categories-section"
        ref={sectionRef}
      >

        <div className="container">


          {/* =========================
              HEADING
          ========================= */}

          <div className="text-center mb-5">

            <div className="categories-badge">

              <span className="category-small-title">
                {t("categories.explore")}
              </span>

            </div>


            {/* =========================
                MANDALA
            ========================= */}

            <img
              src={mandala}
              alt="Decorative Mandala"
              className="categories-mandala"
            />


            <h2 className="category-title">

              {t("categories.title")}

            </h2>


            <p className="category-text">

              {t("categories.description")}

            </p>

          </div>


          {/* =========================
              SLIDER
          ========================= */}

          <div className="category-wrapper d-flex align-items-center position-relative">


            {/* LEFT BUTTON */}

            <button
              type="button"
              className="
                slider-btn
                left-btn
                d-none
                d-md-flex
                align-items-center
                justify-content-center
              "
              onClick={slideLeft}
              aria-label="Previous categories"
            >

              <FaArrowLeft />

            </button>


            {/* CARDS */}

            <div
              className="
                category-slider
                d-flex
                flex-nowrap
                gap-3
                gap-md-4
              "
              ref={slider}
            >

              {categories.map(
                (item, index) => (

                  <div
                    className="
                      category-card
                      flex-shrink-0
                    "
                    key={item.key}
                    data-index={index}
                  >

                    <img
                      src={item.image}
                      alt={t(
                        `categories.items.${item.key}`
                      )}
                    />


                    <div className="category-overlay">

                      <div
                        className="
                          category-content
                          d-flex
                          justify-content-between
                          align-items-end
                        "
                      >

                        <h4>
                          {t(
                            `categories.items.${item.key}`
                          )}
                        </h4>


                        <span className="category-arrow">

                          <FaArrowRight />

                        </span>

                      </div>

                    </div>

                  </div>

                )
              )}


              {/* =========================
                  MORE CARD
              ========================= */}

              <div
                className="more-card"
                data-index={categories.length}
                onClick={() =>
                  navigate("/gallery")
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {

                  if (
                    e.key === "Enter" ||
                    e.key === " "
                  ) {
                    navigate("/gallery");
                  }

                }}
              >

                <div className="more-card-content">

                  <h3>
                    {t("categories.more")}
                  </h3>

                  <p>
                    {t("categories.moreDescription")}
                  </p>

                  <span className="more-card-button">

                    {t("categories.exploreGallery")}

                    <FaArrowRight />

                  </span>

                </div>

              </div>

            </div>


            {/* RIGHT BUTTON */}

            <button
              type="button"
              className="
                slider-btn
                right-btn
                d-none
                d-md-flex
                align-items-center
                justify-content-center
              "
              onClick={slideRight}
              aria-label="Next categories"
            >

              <FaArrowRight />

            </button>

          </div>

        </div>

      </section>

    </>
  );
}

export default Categories;