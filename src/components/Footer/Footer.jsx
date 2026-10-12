import React, { useEffect } from "react";


import "./Footer.css";

import { useTranslation } from "react-i18next";

import logo from "../../assets/images/logo.jpeg";
import playstore from "../../assets/images/playstore.png";
import appstore from "../../assets/images/appstore.png";
import lamp from "../../assets/images/lamp.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";

function Footer() {
  const { t } = useTranslation();

  useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://app.synoria.ai/widget.js";
      script.async = true;
  
      script.onload = () => {
        if (window.CloneIT) {
          window.CloneIT.init({
            agentId: "b51db77e-9ee9-4015-aa23-99b2adef44f7",
          });
        }
      };
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-left">

          <img
            src={logo}
            alt="Logo"
            className="logo"
          />

          <h2>Aalayamapp</h2>

          <p>
            {t("footer.description")}
          </p>

          <div className="download-section">

            <img
              src={playstore}
              alt="Google Play"
              className="store-btn"
            />

            <img
              src={appstore}
              alt="App Store"
              className="store-btn"
            />

          </div>

        </div>


        {/* Center */}
        <div className="footer-center">

          <h3>
            {t("footer.quickLinks")}
          </h3>

          <ul>
            <li>{t("nav.home")}</li>
            <li>{t("nav.features")}</li>
            <li>{t("nav.gallery")}</li>
            <li>{t("nav.about")}</li>
            <li>{t("nav.contact")}</li>
          </ul>

        </div>


        {/* Right */}
        <div className="footer-right">

          <img
            src={lamp}
            alt="Lamp"
            className="lamp"
          />

          <h3>
            {t("footer.contact")}
          </h3>

          <p>📧 Info@aalayamapp.in</p>

          <p>📍 Coimbatore, Tamil Nadu</p>


          <div className="social-icons">

            <a
              href="https://www.facebook.com/profile.php?id=61591701550974"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
              />
            </a>


            <a
              href="https://www.instagram.com/aalayamapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="Instagram"
              />
            </a>


            <a
              href="https://youtube.com/@aalayamapp?si=7B0Snar5Ad7t2FoV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={youtube}
                alt="YouTube"
              />
            </a>

          </div>

        </div>

      </div>


      <hr />


      <p className="copyright">
        {t("footer.copyright")}
      </p>

    </footer>
  );
}

export default Footer;