import React from "react";
import styles from "./card.module.css";
import cardPic from "../../../assets/login.jpg";

export default function Cards() {
  const cardInfo = [
    {
      title: "Northern Pakistan1",
      btntext: "Explore",
    },
    {
      title: "Northern Pakistan2",
      btntext: "Explore",
    },
    {
      title: "Northern Pakistan3",
      btntext: "Explore",
    },
    {
      title: "Northern Pakistan4",
      btntext: "Explore",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <div className={`${styles.parent} p-0`}>
        <div className={`col-md-4 card ${styles.piccard}`} key={index}></div>
        <h2 className={`card-title m-4 text-light ${styles.cardtitle}`}>
          {card.title}
        </h2>
        <button
          className={`btn btn-outline-light m-4 text-center ${styles.cardbtn}`}
        >
          {card.btntext}
        </button>
      </div>
    );
  };

  return (
    <>
      <a className={`row mt-5 ${styles.cardsrow}`} href="#">
        {cardInfo.map(renderCard)}
      </a>
    </>
  );
}
