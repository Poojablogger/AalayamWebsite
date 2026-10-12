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

import "./Gallery.css";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Gallery() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const images = [
    {
      id: 1,
      key: "ganesha",
      image: ganesha,
      path: "/gallery/ganesha",
    },
    {
      id: 2,
      key: "shiva",
      image: shiva,
      path: "/gallery/shiva",
    },
    {
      id: 3,
      key: "saibaba",
      image: saibaba,
      path: "/gallery/saibaba",
    },
    {
      id: 4,
      key: "durga",
      image: durga,
      path: "/gallery/durga",
    },
    {
      id: 5,
      key: "karupu",
      image: karupu,
      path: "/gallery/karupu",
    },
    {
      id: 6,
      key: "ram",
      image: ram,
      path: "/gallery/ram",
    },
    {
      id: 7,
      key: "ayyappa",
      image: ayyappa,
      path: "/gallery/ayyappa",
    },
    {
      id: 8,
      key: "maruthi",
      image: maruthi,
      path: "/gallery/maruthi",
    },
    {
      id: 9,
      key: "saraswati",
      image: saraswati,
      path: "/gallery/saraswati",
    },
    {
      id: 10,
      key: "lakshmi",
      image: lakshmi,
      path: "/gallery/lakshmi",
    },
    {
      id: 11,
      key: "muruga",
      image: muruga,
      path: "/gallery/muruga",
    },
    {
      id: 12,
      key: "azhagar",
      image: azhagar,
      path: "/gallery/azhagar",
    },
  ];

  return (
    <section className="gallery-page">

      {/* ================= Hero Banner ================= */}

      <section className="gallery-banner">

        <div className="gallery-banner-overlay"></div>

        <div className="container">

          <div className="gallery-banner-content">

            <div className="gallery-banner-divider">
              <span></span>
              <i className="bi bi-flower1"></i>
              <span></span>
            </div>

            <h1 className="gallery-banner-title">
              {t("galleryPage.heroTitle")}
            </h1>

            <p className="gallery-banner-description">
              {t("galleryPage.heroDescription")}
            </p>

            <button
              className="btn gallery-banner-button"
              onClick={() =>
                document
                  .querySelector(".gallery-heading-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("galleryPage.exploreCollection")}

              <i className="bi bi-arrow-right ms-2"></i>
            </button>

          </div>

        </div>

      </section>


      {/* ================= Heading ================= */}

      <section className="gallery-heading-section">

        <div className="container text-center">

          <div className="gallery-small-divider">
            <i className="bi bi-flower1"></i>
          </div>

          <h2 className="gallery-heading-title">
            {t("galleryPage.title")}
          </h2>

          <p className="gallery-heading-text">
            {t("galleryPage.description")}
          </p>

        </div>

      </section>


      {/* ================= Cards ================= */}

      <section className="pb-5">

        <div className="container">

          <div className="row g-4">

            {images.map((item) => (

              <div
                className="col-lg-4 col-md-6"
                key={item.id}
                data-aos="zoom-in"
                data-aos-duration="800"
              >

                <div
                  className="card gallery-card border-0"
                  onClick={() => navigate(item.path)}
                >

                  <img
                    src={item.image}
                    alt={t(`galleryPage.items.${item.key}`)}
                    className="card-img-top"
                  />

                  <div className="card-img-overlay-bottom">

                    <h4>
                      {t(`galleryPage.items.${item.key}`)}
                    </h4>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </section>
  );
}