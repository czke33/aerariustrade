import style from "./navbar.module.css";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../images/logominta1.jpg";

const Navbar = () => {
  return (
    <Router>
      <div className={style.navbarcontainer}>
        <div className={style.header}>
          <div className={style.logo}>
            <img className={style.logopic} src={logo} alt="logo" />
          </div>
          <div className={style.linkcontainer} id="links-container">
            <ul className={style.links}>
              <li>
                <Link to="./Pages/Home/Home.jsx">Home</Link>
              </li>
              <li>
                <Link to="./Pages/About/About.jsx">About</Link>
              </li>
              <li>
                <Link to="./Pages/Portfolio/Portfolio.jsx">Portfolio</Link>
              </li>
              <li>
                <Link to="./Pages/Services/Services.jsx">Services</Link>
              </li>
              <li>
                <Link to="./Pages/Contact/Contact.jsx">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default Navbar;
