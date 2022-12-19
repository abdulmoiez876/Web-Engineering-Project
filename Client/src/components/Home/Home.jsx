import React from "react";
import landingPic from "../../assets/landing.jpg";
import styles from "./home.module.css";
import Searchbar from "./Searchbar/Searchbar";
import Navbar from './../Navbar/Navbar';
import Card from "./Card/Card"
import Footer from "../Footer/Footer"

export default function Home() {
  return (
    <>
      < Navbar />
      <Searchbar />
      <div>
        <img className={styles.img} src={landingPic} alt="mountains" />
      </div>
      <div class="row">
        
      </div>
      <Card/>
      <Footer/>
    </>
  );
}
