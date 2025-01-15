import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footercontainer}>
        <div className={style.footerleft}>
          <div className={style.footerlinks}>
            <div className={style.footerlinkwrapper}>
              <div className={style.footerlinkitems}>
                <h2>About Us</h2>
                <a href="/">How it works</a>
                <a href="/">Testimonials</a>
              </div>
              <div className={style.footerlinkitems}>
                <h2>Contact Us</h2>
                <a href="/">Contact</a>
                <a href="/">Support</a>{" "}
              </div>
            </div>
            <div className={style.footerlinkwrapper}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
