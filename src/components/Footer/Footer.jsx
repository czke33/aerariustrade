import React from "react";
import style from "./footer.module.css";
import logo from "../../images/logominta1.jpg";

import telephone from "../../images/icons/icons.svg#icon-mobile";
import officelogo from "../../images/icons/icons.svg#icon-address";

const Footer = () => {
  return (
    <>
      <div className={style.footercontainer}>
        <div className={style.footersection}>
          <img className={style.footerlogo} src={logo} alt="logo" />

          <div className={style.telephone}>
            <img
              className={style.socialicon}
              src={telephone}
              alt="mobilelogo"
            ></img>
            <div className={style.telclassfooter}>+40 755 947 229</div>
          </div>

          <div className={style.addressfooter}>
            <div
              className={style.socialicon}
              src={officelogo}
              alt="officelogo"
            ></div>
            <ul>
              <li>Kereszturi szekhely cim</li>
              <li>Chirsturu Secuiesc</li>
              <li>Județul Harghita</li>
              <li> postai kod</li>
            </ul>
          </div>
        </div>

        <div className={style.lastrow}>
          <use xlinkHref="https://www.linkedin.com/in/zsuzsanna-molnar-aczel-977941292/">
            <p>
              © Molnár-Aczél Zsuzsánna (+40 774 956 546) All rights reserved.
            </p>
          </use>
        </div>
      </div>
    </>
  );
};
export default Footer;
