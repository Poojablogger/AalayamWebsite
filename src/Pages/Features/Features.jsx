import React from "react";
import "./Features.css";

import {
  FaImage,
  FaHeart,
  FaPen,
  FaDownload,
  FaShareAlt,
  FaBell,
} from "react-icons/fa";

import { FaGlobe } from "react-icons/fa6";
import { GiTempleGate } from "react-icons/gi";

import bg from "../../assets/images/bg.jpeg";

import Whychoose from "../../Pages/whychoose/whychoose";

import { useTranslation } from "react-i18next";

function Features() {
  const { t } = useTranslation();

  return (
    <>
      {/* ==========================================
          HERO SECTION
      ========================================== */}

      <section
        className="features-page-hero"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="features-overlay">

          <div className="features-center-content">

            {/* Small Label */}

            <div className="features-label">
              <span></span>
              {t("featurePage.tag")}
              <span></span>
            </div>


            {/* Main Heading */}

            <h1 className="features-title">
              {t("featurePage.title1")}
              <br />

              {t("featurePage.title2")}
              <br />

              <span>
                {t("featurePage.titleHighlight")}
              </span>
            </h1>


            {/* Decorative Divider */}

            <div className="feature-divider">
              <span></span>
              <i></i>
              <span></span>
            </div>


            {/* Description */}

            <p className="features-text">
              {t("featurePage.description")}
            </p>


            {/* Download Button */}

            <div className="features-buttons">

              <a
                href="https://play.google.com/store/apps/details?id=com.sparkpik"
                target="_blank"
                rel="noopener noreferrer"
                className="features-download-btn"
              >
                <FaDownload />

                <span>
                  {t("featurePage.download")}
                </span>

              </a>

            </div>

          </div>

        </div>
      </section>


      {/* ==========================================
          FEATURES SECTION
      ========================================== */}

      <section className="features-box-section">

        <div className="features-section-header">

          <p className="features-section-label">
            ALAYAM
          </p>

          <h2>
            Everything You Need
            <span> in One Place</span>
          </h2>

          <p className="features-section-description">
            Discover simple and meaningful tools designed to make
            your daily spiritual journey more connected.
          </p>

        </div>


        {/* Feature Cards */}

        <div className="features-box">


          {/* Daily New Posters */}

          <div className="features-item">

            <div className="features-icon features-gold">
              <FaImage />
            </div>

            <div className="features-content">

              <h3>
                {t("featurePage.items.daily.title")}
              </h3>

              <p>
                {t("featurePage.items.daily.desc")}
              </p>

            </div>

          </div>


          {/* Multi Language */}

          <div className="features-item">

            <div className="features-icon features-blue">
              <FaGlobe />
            </div>

            <div className="features-content">

              <h3>
                {t("featurePage.items.language.title")}
              </h3>

              <p>
                {t("featurePage.items.language.desc")}
              </p>

            </div>

          </div>


          {/* Save Favorites */}

          <div className="features-item">

            <div className="features-icon features-red">
              <FaHeart />
            </div>

            <div className="features-content">

              <h3>
                {t("featurePage.items.favorites.title")}
              </h3>

              <p>
                {t("featurePage.items.favorites.desc")}
              </p>

            </div>

          </div>


          {/* Create & Personalize */}

          <div className="features-item">

            <div className="features-icon features-orange">
              <FaPen />
            </div>

            <div className="features-content">

              <h3>
                {t("featurePage.items.create.title")}
              </h3>

              <p>
                {t("featurePage.items.create.desc")}
              </p>

            </div>

          </div>


          {/* Download Free */}

          <div className="features-item">

            <div className="features-icon features-green">
              <FaDownload />
            </div>

            <div className="features-content">

              <h3>
                {t("featurePage.items.download.title")}
              </h3>

              <p>
                {t("featurePage.items.download.desc")}
              </p>

            </div>

          </div>


          {/* Share Instantly */}

          <div className="features-item">

            <div className="features-icon features-purple">
              <FaShareAlt />
            </div>

            <div className="features-content">

              <h3>
                {t("featurePage.items.share.title")}
              </h3>

              <p>
                {t("featurePage.items.share.desc")}
              </p>

            </div>

          </div>


          {/* Temple Updates */}

          <div className="features-item">

            <div className="features-icon features-gold">
              <GiTempleGate />
            </div>

            <div className="features-content">

              <h3>
                {t("featurePage.items.temple.title")}
              </h3>

              <p>
                {t("featurePage.items.temple.desc")}
              </p>

            </div>

          </div>


          {/* Festival Wishes */}

          <div className="features-item">

            <div className="features-icon features-orange">
              <FaBell />
            </div>

            <div className="features-content">

              <h3>
                {t("featurePage.items.festival.title")}
              </h3>

              <p>
                {t("featurePage.items.festival.desc")}
              </p>

            </div>

          </div>


        </div>

      </section>


      {/* ==========================================
          WHY CHOOSE ALAYAM
      ========================================== */}

      <Whychoose />

    </>
  );
}

export default Features;