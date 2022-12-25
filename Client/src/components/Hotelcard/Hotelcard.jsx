import React from "react";
import styles from "./hotelcard.module.css";
import { Link } from "react-router-dom";

export default function Hotelcard() {
  const cardInfo = [
    {
      title: "Northern Pakistan1",
      btntext: "Explore",
      country: "Pakistan",
      location: "Sawat",
    },
    {
      title: "Northern Pakistan1",
      btntext: "Explore",
      country: "Pakistan",
      location: "Sawat",
    },
    {
      title: "Northern Pakistan1",
      btntext: "Explore",
      country: "Pakistan",
      location: "Sawat",
    },
    {
      title: "Northern Pakistan1",
      btntext: "Explore",
      country: "Pakistan",
      location: "Sawat",
    },
    {
      title: "Northern Pakistan1",
      btntext: "Explore",
      country: "Pakistan",
      location: "Sawat",
    },
    {
      title: "Northern Pakistan1",
      btntext: "Explore",
      country: "Pakistan",
      location: "Sawat",
    },
    {
      title: "Northern Pakistan1",
      btntext: "Explore",
      country: "Pakistan",
      location: "Sawat",
    },
    {
      title: "Northern Pakistan1",
      btntext: "Explore",
      country: "Pakistan",
      location: "Sawat",
    },
    {
      title: "Northern Pakistan1",
      btntext: "Explore",
      country: "Pakistan",
      location: "Sawat",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <div className={` card ${styles.hotelcard}`}>
        <img
          class="card-img-top"
          src={require("../../assets/landing.jpg")}
          alt="Card image cap"
        />
        <div class="card-body">
          <h4 class="card-title">Hotel Name</h4>
          <p class="card-text">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum.
          </p>
          <div class="d-flex">
            <p>
              <b>Country:</b>
            </p>
            &nbsp;<p>Pakistan</p>
          </div>
          <div class="d-flex">
            <p>
              <b>Location:</b>
            </p>
            &nbsp;<p>Sawat</p>
          </div>
          <Link to="/bookingform" class="btn btn-success">
            Explore
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={`${styles.cardsRow}`}>{cardInfo.map(renderCard)}</div>
    </>
  );
}
