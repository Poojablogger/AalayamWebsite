import React, { useState, useEffect } from "react";
import "./Header.css";

import logo from "../../assets/images/logo.jpeg";

import { Download, LogIn, Globe, ChevronDown } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

function Header() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguageOpen(false);
  };
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">

      <nav className="navbar navbar-expand-xl">

        <div className="container">

          {/* =========================
              Logo
          ========================= */}

          <NavLink
            to="/"
            className="navbar-brand d-flex align-items-center"
          >
            <img
              src={logo}
              alt="Aalayam Logo"
              className="header-logo"
            />

            <div className="ms-3">
              <h2 className="logo-title">
                Aalayamapp
              </h2>

              <p className="logo-subtitle">
                Free Posters
              </p>
            </div>
          </NavLink>


          {/* =========================
              Mobile Toggle
          ========================= */}

          <button
            className={menuOpen ? "navbar-toggler" : "navbar-toggler collapsed"}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-controls="navbarMenu"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          {/* =========================
              Navigation
          ========================= */}

          <div
              className={
              menuOpen
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarMenu"
          >
            

            <ul className="navbar-nav mx-auto">

              {/* Home */}
              <li className="nav-item">

                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {t("nav.home")}
                </NavLink>

              </li>


              {/* About */}
              <li className="nav-item">

                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {t("nav.about")}
                </NavLink>

              </li>


              {/* Features */}
              <li className="nav-item">

                <NavLink
                  to="/features"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {t("nav.features")}
                </NavLink>

              </li>


              {/* Gallery */}
              <li className="nav-item">

                <NavLink
                  to="/gallery"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {t("nav.gallery")}
                </NavLink>

              </li>


              {/* Testimonials */}
              <li className="nav-item">

                <NavLink
                  to="/testimonials"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {t("nav.testimonials")}
                </NavLink>

              </li>


              {/* Contact Us */}
              <li className="nav-item">

                <NavLink
                  to="/contactus"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {t("nav.contact")}
                </NavLink>

              </li>

            </ul>


            {/* =========================
                Right Side
            ========================= */}

            <div className="d-flex align-items-center header-right-actions">


              {/* Download Button */}

              <a
                href="https://play.google.com/store/apps/details?id=com.sparkpik"
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
              >

                <Download size={16} />

                Download App

              </a>


              {/* =========================
                  Language
              ========================= */}

              <div className="language-wrapper">

                <button
                  className="language-btn"
                  type="button"
                  aria-label="Change language"
                  onClick={() =>
                    setLanguageOpen(!languageOpen)
                  }
                >
                  <Globe size={18} />
                  <ChevronDown size={14} className="language-btn-chevron" />
                </button>


                {/* Language Dropdown */}

                {languageOpen && (

                  <div className="language-menu">

                    <button
                      type="button"
                      onClick={() =>
                        changeLanguage("en")
                      }
                    >
                      English
                    </button>


                    <button
                      type="button"
                      onClick={() =>
                        changeLanguage("hi")
                      }
                    >
                      Hindi
                    </button>


                    <button
                      type="button"
                      onClick={() =>
                        changeLanguage("ml")
                      }
                    >
                      Malayalam
                    </button>


                    <button
                      type="button"
                      onClick={() =>
                        changeLanguage("kn")
                      }
                    >
                      Kannada
                    </button>


                    <button
                      type="button"
                      onClick={() =>
                        changeLanguage("ta")
                      }
                    >
                      Tamil
                    </button>


                    <button
                      type="button"
                      onClick={() =>
                        changeLanguage("te")
                      }
                    >
                      Telugu
                    </button>

                  </div>

                )}

              </div>


              {/* =========================
                  Login (Admin Panel)
                  NOTE: this points to "/panel/admin" on the SAME domain
                  this website is deployed on. If your admin panel is
                  hosted on a different domain/subdomain, replace this
                  with the full URL, e.g.
                  href="https://admin.aalayamapp.com"
              ========================= */}

              <button
                type="button"
                className="login-btn"
              >

                <LogIn size={16} />

                Login

              </button>

            </div>

          </div>

        </div>

      </nav>

    </header>
  );
}

export default Header;
