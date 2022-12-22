import React from "react";
import styles from "./aboutus.module.css";
import logo from "../../assets/logo.png";
import Footer from "../Footer/Footer";

export default function Aboutus() {
  const cardInfo = [
    {
      title:
        "We pursue a vision of the world in which all are welcome. We believe travel can help foster the connection and understanding that makes meaningful moments possible.",
    },
    {
      title:
        "We think everyone deserves to experience the joy of travel. Whatever your background or needs and no matter where you want to go: we are here to empower your journey.",
    },
    {
      title:
        "We know travel has a social, economic and environmental consequences. We must equip travelers with the knowledge to make informed choices about their impact, and inspire them to travel with generosity.",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <div className={`mx-4 p-4 w-50 text-light rounded-5 text-center ${styles.c4card}`} key={index}>
        <p className={`p-0`}>{card.title}</p>
      </div>
    );
  };
  return (
    <>
      {" "}
      <div className={`${styles.container1}`}>
        <div className={`row ${styles.upperrow}`}>
          <div className={`col-md-6 pt-4 px-5 ${styles.logo}`}>
            <a href="#">
              <img src={logo} className={styles.logowidth} alt="" />
            </a>
          </div>
          <div className={`col-md-6 px-5 m-0 w-25 ${styles.goback}`}>
            <a
              href="#"
              className={`btn btn-outline-light px-4 rounded-5 ${styles.gobacklink}`}
            >
              <i
                className={`fas fa-external-link-alt ${styles.gobackicon}`}
              ></i>
              <p className={`p-0 m-0 ${styles.gobacktext}`}>
                Return to Tripify.com
              </p>
            </a>
          </div>
        </div>
        <div className={`row ${styles.abouttext}`}>
          <h1 className={`text-center text-light ${styles.heading}`}>
            About Us
          </h1>
          <p className={`text-center mb-0 text-light ${styles.subheading}`}>
            For explorers everywhere.
          </p>
        </div>
      </div>
      <div className={`my-5 ${styles.container2}`}>
        <p className={`text-center ${styles.aboutdetail}`}>
          We believe that travel is for everyone. It helps us learn about
          ourselves and the world around us. <br />
          <br />
          Our goal is to help more people from more backgrounds experience the
          joy of exploration. Because we believe this builds a kinder, more
          inclusive, more open-minded world.
          <br />
          <br />
          Like you, travel is in our DNA. At Lonely Planet, we believe travel
          opens the door to the greatest, most unforgettable experiences life
          can offer. And we have learned that the best travel is about putting
          yourself out there, about leaving behind the everyday, about immersing
          yourself, rather than just seeing the sights. <br />
          <br />
          As travelers, you're on a journey, and at Lonely Planet, we're on one,
          too. Over the last two years, travel has transformed. We're thinking
          deeply not just about how we travel but why we travel and how to best
          serve travelers on their journey – and we approach our 50th year with
          a passion and commitment to helping others do it, too.
        </p>
      </div>
      <div className={`bg-success p-5 ${styles.container3}`}>
        <div
          className={`mx-5 p-5 row card rounded-5 bg-light ${styles.c3card}`}
        >
          <div className="col-md-5 mx-0">
            <h2>Subscribe & Get 20% off</h2>
            <p>
              Join our newsletter and discover new destinations to inspire the
              traveler within. Plus, get 20% off at our online shop. Every week
              you'll receive expert advice, tips, exclusive offers, and much
              more.
            </p>
          </div>
          <div className={`col-md-4`}>
            <div className={`row`}>
              <div className={`col-md-5 ${styles.subscribe}`}>
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  className="form-control"
                />
              </div>
              <div className="col-md-1">
                <button className="btn btn-success">Subscribe</button>
              </div>
            </div>
            <div className={`row mt-4 p-0`}>
              <p className={`text-dark`}>
                Subscribe to Tripify newsletters and promotions. <br /> Read our{" "}
                <a href="#"> Privacy Policy.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.container4}`}>
        <h1 className={`mx-4 ${styles.c4heading}`}>
          At Tripify, our core values guide our evolution:
        </h1>
        <div className="mt-4 d-flex justify-content-space-between">{cardInfo.map(renderCard)}</div>
      </div>
      <Footer />
    </>
  );
}