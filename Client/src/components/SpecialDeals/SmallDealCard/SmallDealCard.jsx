import React from 'react';
import styles from './smallcard.module.css';

export default function SmallDealCard() {
    return <>
    <div className={`${styles["card-container"]}`}>
    <img
      src={require("../../../assets/deal1.jpg")}
      alt="Card"
      className={`${styles["card-background-img"]}`}
    /> {/* Insert Dynamic Image */}

    <div className={`${styles["bg-image-overlay"]}`}></div>

    <div className={`${styles["card-content-container"]}`}>
      <h1 className={`${styles["card-heading"]}`}>
        Save Instantly with Master Card
      </h1> {/* Insert Dynamic Heading */}
      
      <p className={`${styles["card-para"]}`}>
        You can enjoy access to perks like Member Prices, saving an average of
        15% on thousands of hotels. Terms may apply.
        {/* Insert Dynamic Para */}
      </p>
      <a href="#" className={`btn btn-primary ${styles["btn-font-weight"]}`}>
        See Member Prices
      </a>
      {/* Insert Dynamic Button Content */}
    </div>
  </div>
    <div>Hello</div>
  </>
}