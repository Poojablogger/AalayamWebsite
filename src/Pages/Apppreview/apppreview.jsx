import React from "react";
import "./AppPreview.css";

import { useTranslation } from "react-i18next";

import mandala from "../../assets/images/mandala.png";

import home from "../../assets/images/home.jpeg";
import categories from "../../assets/images/categories.jpeg";
import create from "../../assets/images/create.jpeg";
import share from "../../assets/images/share.jpeg";

function AppPreview() {
  const { t } = useTranslation();

  return (
    <>
      <section className="app-preview-section">

        <div className="app-preview-heading">

          <div className="app-preview-line"></div>

          <h2 className="app-preview-title">
            🪔 {t("appPreview.title")} 🪔
          </h2>

          <div className="app-preview-line"></div>

        </div>


        <div className="app-preview-grid">

          {/* Daily Posters */}
          <div className="app-preview-card">

            <div className="app-preview-mobile-frame">

              <div className="app-preview-mobile-screen">
                <img
                  src={home}
                  alt={t("appPreview.items.daily")}
                  className="app-preview-phone-image"
                />
              </div>

            </div>

            <h4>
              {t("appPreview.items.daily")}
            </h4>

          </div>


          {/* Explore Categories */}
          <div className="app-preview-card">

            <div className="app-preview-mobile-frame">

              <img
                src={categories}
                alt={t("appPreview.items.categories")}
                className="app-preview-phone-image"
              />

            </div>

            <h4>
              {t("appPreview.items.categories")}
            </h4>

          </div>


          {/* Create Posters */}
          <div className="app-preview-card">

            <div className="app-preview-mobile-frame">

              <img
                src={create}
                alt={t("appPreview.items.create")}
                className="app-preview-phone-image"
              />

            </div>

            <h4>
              {t("appPreview.items.create")}
            </h4>

          </div>


          {/* Share with Friends */}
          <div className="app-preview-card">

            <div className="app-preview-mobile-frame">

              <img
                src={share}
                alt={t("appPreview.items.share")}
                className="app-preview-phone-image"
              />

            </div>

            <h4>
              {t("appPreview.items.share")}
            </h4>

          </div>

        </div>

      </section>
    </>
  );
}

export default AppPreview;