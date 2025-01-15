import style from "./navbar.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img src="https://www.freepnglogos.com/" alt="logo" />
      </div>
      <ul className={style.list}>
        <li>
          <Link to="./Pages/Home/Home.jsx">Home</Link>
        </li>
        <li>
          <Link to="./">About</Link>
        </li>
        <li>
          <Link to="./">Portfolio</Link>
        </li>
        <li>
          <Link to="./">Services</Link>
        </li>
        <li>
          <Link to="./">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
