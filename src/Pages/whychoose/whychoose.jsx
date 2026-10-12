import React from "react";
import "./Whychoose.css";
import Stats from "../../Pages/Stats/Stats";

import { ShieldCheck, Zap, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

function Whychoose() {
  const { t } = useTranslation();

  return (
    <>
      <section className="whychoose-section">

        <div className="container">

          {/* Heading */}
          <div className="whychoose-heading">
            <p className="whychoose-subtitle">
              {t("whychoose.subtitle")}
            </p>

            <h2 className="whychoose-title">
              {t("whychoose.title")}
            </h2>

            <p className="whychoose-description">
              {t("whychoose.description")}
            </p>
          </div>


          {/* Cards */}
          <div className="whychoose-cards">

            {/* Card 1 */}
            <div className="whychoose-card">

              <div className="whychoose-icon">
                <ShieldCheck size={42} color="#3B82F6" />
              </div>

              <div className="whychoose-content">

                <h3>
                  {t("whychoose.cards.trusted.title")}
                </h3>

                <p>
                  {t("whychoose.cards.trusted.description")}
                </p>

              </div>

            </div>


            {/* Card 2 */}
            <div className="whychoose-card">

              <div className="whychoose-icon">
                <Zap size={42} color="#F59E0B" />
              </div>

              <div className="whychoose-content">

                <h3>
                  {t("whychoose.cards.fast.title")}
                </h3>

                <p>
                  {t("whychoose.cards.fast.description")}
                </p>

              </div>

            </div>


            {/* Card 3 */}
            <div className="whychoose-card">

              <div className="whychoose-icon">
                <Star size={42} color="#EAB308" />
              </div>

              <div className="whychoose-content">

                <h3>
                  {t("whychoose.cards.beautiful.title")}
                </h3>

                <p>
                  {t("whychoose.cards.beautiful.description")}
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Stats />
    </>
  );
}

export default Whychoose;