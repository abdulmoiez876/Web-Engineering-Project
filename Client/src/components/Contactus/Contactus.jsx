import React from "react";
import styles from "./contactus.module.css";
import contactPic from "../../assets/contact.png";
import logo from "../../assets/logo.png";
import icon1 from "../../assets/shoporder.png";
import icon2 from "../../assets/business.png";
import icon3 from "../../assets/feedback.png";
import icon4 from "../../assets/partnership.png";
import icon5 from "../../assets/inquiry.png";

export default function Contactus() {
  const cardInfo = [
    {
      img: icon1,
      title: "Shop Order Help",
      detail:
        "Get help with online shop orders, ebooks, or ask a question about one of our books.",
    },
    {
      img: icon2,
      title: "Your Business",
      detail:
        "Do you have a business you'd like listed by Lonely Planet? Already listed but need to update your details?",
    },
    {
      img: icon3,
      title: "Feedback & Suggestions",
      detail: "We love feedback. Good or bad!",
    },
    {
      img: icon4,
      title: "Advertising & Partnerships",
      detail:
        "Elevate your business with Lonely Planet’s award-winning travel content.",
    },
    {
      img: icon5,
      title: "Other Inquiries",
      detail: "Got a different question? Here's where to find what you need.",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <div className={`m-0 ${styles.card}`} key={index}>
        <div className={`text-center ${styles.cardicon}`}>
          <img src={card.img} alt="icon" className="w-25" />
        </div>
        <div className={`mb-4 mt-2 text-center ${styles.cardtext}`}>
          <h4 className="mb-2">{card.title}</h4>
          <a href="#" className="text-decoration-none text-dark">
            {card.detail}
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={`${styles.maincontainer}`}>
        <div className={`row ${styles.upperrow}`}>
          <div className={`col-md-6 pt-4 px-5 ${styles.logo}`}>
            <a href="#">
              <img src={logo} className={styles.logowidth} alt="" />
            </a>
          </div>
          <div className={`col-md-6 px-5 m-0 w-25 ${styles.goback}`}>
            <a
              href="#"
              className={`btn btn-outline-success px-4 rounded-5 ${styles.gobacklink}`}
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
        <div className={`row px-5 mx-1`}>
          <hr className={styles.hr} />
        </div>
        <div className={`row ${styles.searchbar}`}>
          <p className={`text-center mb-0 text-light ${styles.searchtext}`}>
            DISCOVER THE ANSWERS YOU'RE LOOKING FOR
          </p>
          <h1 className={`text-center text-light ${styles.searchtext}`}>
            What can we help you with?
          </h1>
          <input
            type="text"
            name="searchhelp"
            className={` rounded-5 p-3 text-success ${styles.searchinput}`}
            placeholder="Search the Tripify Help Center"
          />
        </div>
      </div>
      <div className={`p-5 ${styles.lowercontainer}`}>
        <div className={`row`}>
          <div className="col-md-12">
            <b>Emails and privacy</b> <br /> You can unsubscribe from our emails
            by clicking the "unsubscribe" link at the bottom of each email. For
            anything else relating to Tripify's use of your personal
            information, please see our privacy policy at{" "}
            <a href="https://www.tripify.com" className="text-decoration-none">
              https://www.tripify.com/privacy-policy
            </a>
          </div>
        </div>
        <div className="row">
          <div className="text-center mt-5">
            <h2 className="text-success">Select an area to get help</h2>
          </div>
          <div className={`${styles.gethelphrdiv} mt-2`}></div>
        </div>
      </div>
      <div className={`${styles.cardrow} row my-2`}>
        {/* <div className={`m-0 ${styles.card}`}>
          <div className={`text-center ${styles.cardicon}`}>
            <img src={icon1} alt="icon" className="w-25" />
          </div>
          <div className={`mb-4 mt-2 text-center ${styles.cardtext}`}>
            <h4 className="mb-2">Shop Order Help</h4>
            <a href="#" className="text-decoration-none text-dark">
              Get help with online shop orders, ebooks, or ask a question about
              one of our books.
            </a>
          </div>
        </div> */}
        {cardInfo.map(renderCard)}
      </div>
    </>
  );
}
