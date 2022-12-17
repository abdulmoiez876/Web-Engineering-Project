import React from "react";
import landingPic from "../../assets/landing.jpg";
import styles from "./home.module.css";
import Searchbar from "./Searchbar/Searchbar";

export default function Home() {
  return (
    <>
      <Searchbar />
      <div>
        <img className={styles.img} src={landingPic} alt="mountains" />
      </div>
    </>
  );
}
