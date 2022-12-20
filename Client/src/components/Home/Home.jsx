import React from "react";
import landingPic from "../../assets/landing.jpg";
import styles from "./home.module.css";
import Searchbar from "./Searchbar/Searchbar";
import Navbar from "./../Navbar/Navbar";
import Card from "./Card/Card";
import Footer from "../Footer/Footer";
import TravelPackage from "./TravelPackage/TravelPackage";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className={`${styles.main}`}>
        <Searchbar />
      </div>
      <div class="row"></div>
      <Card />
      <TravelPackage />
      <Footer />
    </>
  );
}
