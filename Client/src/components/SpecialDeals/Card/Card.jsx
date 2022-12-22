import React from "react";
import styles from "./card.module.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  // const imgUrl = props.imgUrl;
  // const heading = props.heading;
  // const para = props.para;
  // const btnContent = props.btnContent;

  return (
    <div className={`${styles["card-container"]}`}>
      <img
        src={require("../../../assets/deal1.jpg")}
        alt="Card"
        className={`${styles["card-background-img"]} ${styles["bluish"]}`}
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
  );
}
