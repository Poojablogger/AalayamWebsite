import React from "react";
import "./Stats.css";
import AppPreview from "../../Pages/apppreview/apppreview";

import {
  FaUsers,
  FaDownload,
  FaStar,
} from "react-icons/fa";

import { GiLotus } from "react-icons/gi";

import { useTranslation } from "react-i18next";

function Stats() {
  const { t } = useTranslation();

  return (
    <>
      <section className="stats-page-section">

        <div className="stats-page-container">

          {/* Happy Users */}
          <div className="stats-page-item">

            <div className="stats-page-icon">
              <FaUsers />
            </div>

            <div>
              <h2>1L+</h2>
              <p>{t("stats.happyUsers")}</p>
            </div>

          </div>


          {/* Downloads */}
          <div className="stats-page-item">

            <div className="stats-page-icon">
              <FaDownload />
            </div>

            <div>
              <h2>1L+</h2>
              <p>{t("stats.downloads")}</p>
            </div>

          </div>


          {/* Posters */}
          <div className="stats-page-item">

            <div className="stats-page-icon">
              <GiLotus />
            </div>

            <div>
              <h2>50,000+</h2>
              <p>{t("stats.divinePosters")}</p>
            </div>

          </div>


          {/* Rating */}
          <div className="stats-page-item">

            <div className="stats-page-icon">
              <FaStar />
            </div>

            <div>
              <h2>4.8</h2>
              <p>{t("stats.userRating")}</p>
            </div>

          </div>

        </div>

      </section>

      <AppPreview />
    </>
  );
}

export default Stats;