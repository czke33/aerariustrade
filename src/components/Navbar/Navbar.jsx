import style from "./navbar.module.css";
import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import logo from "../../images/logominta1.jpg";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Navbar = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: "( max-width: 768 px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  //*Navlinks
  const renderNavLinks = () => {
    if (isMobile) {
      return (
        <div className={style.burgerMenu}>
          <BurgerMenu />
        </div>
      );
    } else if (isTablet) {
      return (
        <div className={style.tabletNav}>
          <Link to="./Pages/Home/Home.jsx">{t("home")}</Link>
          <Link to="./Pages/About/About.jsx">{t("about")}</Link>
          <Link to="./Pages/Portfolio/Portfolio.jsx">{t("portfolio")}</Link>
          <Link to="./Pages/Contact/Contact.jsx">{t("contact")}</Link>
        </div>
      );
    } else if (isDesktop) {
      return (
        <>
          <div className={style.navbarcontainer}>
            <div className={style.header}>
              <div className={style.logo}>
                <img className={style.logopic} src={logo} alt="logo" />
              </div>
              <div className={style.linkcontainer} id="links-container">
                <ul className={style.links}>
                  <li>
                    <Link to="./Pages/Home/Home.jsx">{t("Home")}</Link>
                  </li>
                  <li>
                    <Link to="./Pages/About/About.jsx">{t("About")}</Link>
                  </li>
                  <li>
                    <Link to="./Pages/Portfolio/Portfolio.jsx">
                      {t("Portfolio")}
                    </Link>
                  </li>
                  <li>
                    <Link to="./Pages/Contact/Contact.jsx">{t("Contact")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <header>
        <div>{renderNavLinks()}</div>
      </header>
    </>
  );
};

export default Navbar;
