import React from "react";
import landingPic from "../../assets/landing.jpg";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div>
      <img className={styles.imgwidth} src={landingPic} alt="mountains" />
    </div>
  );
}
