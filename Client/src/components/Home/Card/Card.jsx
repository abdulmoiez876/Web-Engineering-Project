import React from "react";
import styles from "./card.module.css";

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
      <div
        className={`col-md-4 card p-4 shadow rounded-4 ${styles.piccard}`}
        key={index}
      >
        <h2 className={`card-title text-light ${styles.cardtitle}`}>
          {card.title}
        </h2>
        <button
          className={`btn btn-outline-light text-center ${styles.cardbtn}`}
        >
          {card.btntext}
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="row m-5">
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
      <div className={`row mx-5 ${styles.cardsrow}`}>
        {cardInfo.map(renderCard)}
      </div>
    </>
  );
}
