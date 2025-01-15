import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import style from "./home.module.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className={style.home}>Home</h1>
      <Footer></Footer>
    </div>
  );
};
export default Home;
