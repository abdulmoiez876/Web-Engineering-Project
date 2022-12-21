import React from "react";
import styles from "./piccard.module.css";
import cardImg from "../../../assets/loginpage.jpg";

export default function Piccard() {
  const cardInfo = [
    {
      title: "Northern Pakistan1",
      detail:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      date: "Last updated 3 mins ago",
    },
    {
      title: "Northern Pakistan2",
      detail:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      date: "Last updated 3 mins ago",
    },
    {
      title: "Northern Pakistan3",
      detail:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      date: "Last updated 3 mins ago",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <div
        className={`card bg-light text-white ${styles.innerdiv}`}
        key={index}
      >
        <img src={cardImg} className={`card-img ${styles.img}`} alt="cardimg" />
        <div className={`card-img-overlay ${styles.imgText}`}>
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.detail}</p>
          <p className="card-text">{card.date}</p>
        </div>
      </div>
    );
  };
  const cardInfo2 = [
    {
      title: "Northern Pakistan4",
      detail:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      date: "Last updated 3 mins ago",
    },
    {
      title: "Northern Pakistan5",
      detail:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      date: "Last updated 3 mins ago",
    },
  ];
  const renderCard2 = (card, index) => {
    return (
      <div
        className={`card bg-light text-white ${styles.innerdiv2}`}
        key={index}
      >
        <img
          src={cardImg}
          className={`card-img ${styles.img2}`}
          alt="cardimg"
        />
        <div className={`card-img-overlay ${styles.imgText2}`}>
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.detail}</p>
          <p className="card-text">{card.date}</p>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.parent}>
      <h2 className={`pt-2 ${styles.section}`}>Get inspiration for your next trip</h2>
      <div className={`${styles.container}`}>{cardInfo.map(renderCard)}</div>
      <div className={styles.container2}>{cardInfo2.map(renderCard2)}</div>
    </div>
  );
}
