import "./Hero.css";

import temple2 from "../../assets/images/temple.jpeg";
import playstore from "../../assets/images/playstore.png";
import appstore from "../../assets/images/appstore.png";
import { FaDownload, FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Hero() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6">

            <span className="hero-badge">
              {t("hero.badge")}
            </span>

            <h1 className="hero-title">
              {t("hero.title1")}
              <br />
              {t("hero.title2")}{" "}
              <span>{t("hero.titleHighlight")}</span>
            </h1>

            <div className="hero-divider"></div>

            <p className="hero-text">
              {t("hero.description")}
            </p>

            <div className="hero-buttons">

              

              <button
                className="watch-btn"
                
              >
                <FaPlayCircle className="me-2" />
                {t("hero.watch")}
              </button>

            </div>

            <div className="store-buttons">

              <img
                src={playstore}
                alt="Google Play"
              />

              <img
                src={appstore}
                alt="App Store"
              />

            </div>

          </div>

          {/* Right Content */}
          <div className="col-lg-6">

            <div className="hero-image-wrapper">

              <img
                src={temple2}
                alt="Temple"
                className="temple-img"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;