import React from "react";
import landingPic from "../../assets/landing.jpg";
import styles from "./home.module.css";
import Searchbar from "./Searchbar/Searchbar";
import Navbar from "./../Navbar/Navbar";
import Card from "./Card/Card";
import Footer from "../Footer/Footer";
import TravelPackage from "./TravelPackage/TravelPackage";
import Newscard from "./Card/Newscard";
import Piccard from "./Card/Piccard";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={`${styles.main}`}>
        <Searchbar />
      </div>
      <div className={`p-5 ${styles.outter}`}>
        <div className={`row`}>
          <p className="mb-1">PLAN YOUR TRIP</p>
          <h2 className="col-md-6">Where to next?</h2>
          <div className={`col-md-6 ${styles.viewbtn}`}>
            <button
              className={`btn btn-outline-success rounded-5 ${styles.viewdest}`}
            >
              View All Destination
            </button>
          </div>
        </div>
        <div>
        <Card />
        </div>
      </div>
      
      <TravelPackage />
      <Newscard />
      <Piccard />
      <Footer />
    </>
  );
}
