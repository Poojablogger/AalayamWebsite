import React from "react";
import "./About.css";
import mobileImg from "../../assets/images/hero-phone3.png";

import { FaBullseye, FaImages } from "react-icons/fa";
import { MdTranslate, MdAutoAwesome } from "react-icons/md";
import { GiPrayerBeads, GiTempleGate } from "react-icons/gi";

import { useTranslation } from "react-i18next";
function About() {
   const { t } = useTranslation();
  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero-section">

        <div className="container about-hero-content">

          <div className="about-hero-left">

            

            <h1 className="about-hero-title">
                 {t("about.heroTitle")}
            </h1>

            <div className="about-gold-line"></div>

            <p className="about-hero-text">
              {t("about.heroText")}
            </p>


            <div className="about-hero-buttons">

              <button className="about-btn-gold">
                 {t("about.happyUsers")}
              </button>

              
            </div>


          </div>

        </div>

      </section>



      {/* ABOUT SECTION */}

      <section className="about-main-section">

        <div className="container">


    <div className="row justify-content-center about-top">


           <div className="col-lg-10 text-center">


              <h2 className="about-section-title">
                 {t("about.journeyTitle")}
              </h2>


              <div className="about-section-line"></div>


              <p className="about-section-text">

                 {t("about.journeyText")}

              </p>


            </div>


<div className="col-lg-10 text-center mt-4">


              <div className="about-stats-wrapper">


                <div className="about-stat-box">

                  <h2>
                    1L+
                  </h2>

                  <p>
                     {t("about.happyUsersLabel")}
                  </p>

                  <div className="about-stars">
                    ★★★★★
                  </div>

                </div>



                <div className="about-divider"></div>



                <div className="about-stat-box">

                  <h2>
                    4.5+
                  </h2>

                  <p>
                     {t("about.ratings")}
                  </p>

                  <div className="about-stars">
                    ★★★★★
                  </div>

                </div>


              </div>


            </div>


          </div>





          {/* CARDS */}

          <div className="row g-4 mt-4">


            <div className="col-lg-4">

              <div className="about-card">

                <div className="about-icon-circle">
                    <FaBullseye />
                </div>


                <h3>
                   {t("about.missionTitle")}
                </h3>


                <p>
                   {t("about.missionText")}
                </p>


                


              </div>

            </div>




            <div className="col-lg-4">

              <div className="about-card">


                <div className="about-icon-circle">
                   <GiPrayerBeads />
                </div>


                <h3>
                    {t("about.offerTitle")}
                </h3>


                <p>
                   {t("about.offerTitle")}
                </p>


                


              </div>

            </div>





            <div className="col-lg-4">

              <div className="about-card">


                <div className="about-icon-circle">
                    <GiTempleGate />
                </div>


                <h3>
                   {t("about.storyTitle")}
                </h3>


                <p>
                   {t("about.storyText")}
                </p>


                


              </div>

            </div>


          </div>


        </div>

      </section>






      {/* MOBILE APP SECTION */}


      <section className="about-mobile-section">


        <div className="container">


          <div className="row align-items-center">


            <div className="col-lg-5 text-center">


              <img
                src={mobileImg}
                alt="Alayam App"
                className="about-mobile-img"
              />


            </div>




            <div className="col-lg-7">


             <Feature
  icon={<FaImages />}
  title={t("about.dailyPosters")}
  text={t("about.dailyPostersText")}
/>

<Feature
  icon={<MdTranslate />}
  title={t("about.multiLanguage")}
  text={t("about.multiLanguageText")}
/>

<Feature
  icon={<MdAutoAwesome />}
  title={t("about.createCard")}
  text={t("about.createCardText")}
/>




            </div>


          </div>


        </div>


      </section>


    </>
  );
}



function Feature({icon,title,text}){

  return(

    <div className="about-feature-item">

      <div className="about-feature-icon">
        {icon}
      </div>


      <div className="about-feature-content">

        <h3>
          {title}
        </h3>


        <p>
          {text}
        </p>


      </div>


    </div>

  );

}



export default About;