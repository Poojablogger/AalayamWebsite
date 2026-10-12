import {
  Image,
  Languages,
  PencilLine,
  Share2,
  Download,
  Heart
} from "lucide-react";

import { useTranslation } from "react-i18next";

const features = [
  {
    icon: <Image size={28} />,
    key: "daily"
  },
  {
    icon: <Languages size={28} />,
    key: "language"
  },
  {
    icon: <PencilLine size={28} />,
    key: "create"
  },
  {
    icon: <Share2 size={28} />,
    key: "share"
  },
  {
    icon: <Download size={28} />,
    key: "download"
  },
  {
    icon: <Heart size={28} />,
    key: "favorites"
  }
];

export default function Features() {

  const { t, i18n } = useTranslation();

  const isTamil = i18n.language === "ta";

  return (
    <section className="features-section">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;500&display=swap');

        .features-section {
          background: #FFFAF0;
          overflow: hidden;
          padding-top: 60px;
          padding-bottom: 80px;
        }

        .font-display {
          font-family: 'Cormorant Garamond', serif;
        }

        .font-body {
          font-family: 'Inter', sans-serif;
        }

        .kolam-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.35;
          background-image: radial-gradient(
            #C9A227 0.6px,
            transparent 0.6px
          );
          background-size: 22px 22px;
        }

        .feature-frame {
          position: relative;
          border-radius: 28px;
          padding: 56px 32px;
          background: linear-gradient(
            to bottom,
            #FFFDF8,
            #FFF6E4
          );
          border: 1px solid #E7CE8C;
          box-shadow:
            inset 0 0 0 1px rgba(212, 175, 55, 0.25),
            0 25px 60px -20px rgba(77, 29, 22, 0.18);
        }

        @media (min-width: 768px) {
          .feature-frame {
            padding: 56px 48px;
          }
        }

        .corner-flourish {
          position: absolute;
          width: 24px;
          height: 24px;
          border-color: #C9A227;
        }

        .corner-flourish.tl {
          top: 12px;
          left: 12px;
          border-top: 2px solid;
          border-left: 2px solid;
          border-top-left-radius: 8px;
        }

        .corner-flourish.tr {
          top: 12px;
          right: 12px;
          border-top: 2px solid;
          border-right: 2px solid;
          border-top-right-radius: 8px;
        }

        .corner-flourish.bl {
          bottom: 12px;
          left: 12px;
          border-bottom: 2px solid;
          border-left: 2px solid;
          border-bottom-left-radius: 8px;
        }

        .corner-flourish.br {
          bottom: 12px;
          right: 12px;
          border-bottom: 2px solid;
          border-right: 2px solid;
          border-bottom-right-radius: 8px;
        }

        .eyebrow-text {
          font-size: 13px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #C9A227;
        }

        .feature-card {
          position: relative;
          text-align: center;
          padding: 0 12px;
          margin-bottom: 24px;
        }

        .gold-ring {
          position: relative;
          width: 80px;
          height: 80px;
          margin: 0 auto;
        }

        .gold-ring::before {
          content: "";
          position: absolute;
          inset: -6px;
          border-radius: 9999px;
          border: 1px solid #D4AF37;
          opacity: 0;
          transform: scale(0.85);
          transition:
            opacity 0.5s ease,
            transform 0.5s ease;
        }

        .feature-card:hover .gold-ring::before {
          opacity: 1;
          transform: scale(1);
        }

        .icon-badge {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            to bottom right,
            #FFF6DE,
            #F7E4A8
          );
          color: #8A5A00;
          box-shadow:
            inset 0 0 0 1px rgba(212, 175, 55, 0.6),
            0 6px 16px -6px rgba(138, 90, 0, 0.35);
          transition:
            transform 0.5s ease,
            box-shadow 0.5s ease;
        }

        .feature-card:hover .icon-badge {
          transform: translateY(-4px);
          box-shadow:
            0 0 0 1px #D4AF37,
            0 10px 30px -8px rgba(201, 162, 39, 0.55);
        }
            /* =========================
   Mobile Responsive
========================= */

@media (max-width: 767px) {

  .feature-frame {
    padding: 45px 18px;
    border-radius: 22px;
    width: 100%;
    box-sizing: border-box;
  }

  /* Main heading */
  .feature-frame h2 {
    font-size: 32px !important;
    line-height: 1.25;
    width: 100%;
    max-width: 100%;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  /* Small heading */
  .eyebrow-text {
    font-size: 11px;
    letter-spacing: 0.18em;
  }

  /* Feature cards */
  .feature-card {
    padding: 0 5px;
    margin-bottom: 35px;
    min-width: 0;
    overflow: hidden;
  }

  /* Icon */
  .gold-ring,
  .icon-badge {
    width: 76px;
    height: 76px;
  }

  /* Feature title */
  .feature-title {
    font-size: 19px !important;
    line-height: 1.3 !important;
    width: 100%;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  /* Description */
  .feature-desc {
    font-size: 13px !important;
    line-height: 1.5 !important;
    width: 100%;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

}


/* =========================
   Small Mobile
========================= */

@media (max-width: 480px) {

  .feature-frame {
    padding: 40px 12px;
  }

  .feature-frame h2 {
    font-size: 28px !important;
    line-height: 1.25;
  }

  .eyebrow-text {
    font-size: 10px;
  }

  .feature-card {
    padding: 0 3px;
  }

  .gold-ring,
  .icon-badge {
    width: 72px;
    height: 72px;
  }

  .feature-title {
    font-size: 18px !important;
  }

  .feature-desc {
    font-size: 12px !important;
  }

}
      `}</style>

      <div className="kolam-bg" />

      <div className="container position-relative">

        <div className="feature-frame">

          <span className="corner-flourish tl" />
          <span className="corner-flourish tr" />
          <span className="corner-flourish bl" />
          <span className="corner-flourish br" />

          {/* Heading */}

          <div className="text-center mb-5">

            <p className="font-body eyebrow-text mb-2">
              {t("features.eyebrow")}
            </p>

            <h2
              className="font-display fw-bold display-5"
              style={{
                color: "#4D1D16",

                /* Tamil only */
                fontSize: isTamil ? "42px" : undefined
              }}
            >
              {t("features.title")}
            </h2>

          </div>

          {/* Features */}

          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6">

            {features.map((feature, index) => (

              <div
                key={index}
                className="col feature-card"
              >

                <div className="gold-ring">

                  <div className="icon-badge">
                    {feature.icon}
                  </div>

                </div>

                <h3
                  className="font-display feature-title"
                  style={{
                    minHeight: "auto",
                    marginTop: "18px",
                    marginBottom: "8px",
                    lineHeight: "1.35",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",

                    /* Tamil only */
                    fontSize: isTamil ? "20px" : undefined
                  }}
                >
                  {t(`features.items.${feature.key}.title`)}
                </h3>

                <div
                  className="feature-divider"
                  style={{
                    margin: "4px auto 8px"
                  }}
                />

                <p
                  className="font-body feature-desc"
                  style={{
                    minHeight: "auto",
                    margin: "0",
                    lineHeight: "1.5",
                    textAlign: "center",

                    /* Tamil only */
                    fontSize: isTamil ? "14px" : undefined
                  }}
                >
                  {t(`features.items.${feature.key}.desc`)}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}