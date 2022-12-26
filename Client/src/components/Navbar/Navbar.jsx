import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

export default function Navbar() {
  const [showUserDetails, setShowUserDetails] = useState(false);
  // const [navbar, setNavbar] = useState(false);
  // const [navlinkcolor, setnavlinkcolor] = useState(false);

  // const changeBackground = () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY >= window.innerHeight-100) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };
  // const changeColor = () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY >= window.innerHeight-100) {
  //     setnavlinkcolor(true);
  //   } else {
  //     setnavlinkcolor(false);
  //   }
  // };
  // useEffect(() => {
  //   changeBackground();
  //   // adding the event when scroll change background
  //   window.addEventListener("scroll", changeBackground);
  // });
  // useEffect(() => {
  //   changeColor();
  //   // adding the event when scroll change background
  //   window.addEventListener("scroll", changeColor);
  // });
  return (
    <div className={`d-flex bg-light align-items-center`}>
      <nav className={`navbar navbar-expand-lg bg-light ${styles.navbar}`}>
        <div className="container-fluid">
          <a className={`navbar-brand ${styles.logodiv}`} href="#">
            <img className={styles.logowidth} src={logo} alt="Tripify Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link text-dark ${styles.navbartext} ${styles.active} mx-4`}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-dark ${styles.navbartext} mx-4`}
                  to="/discover"
                >
                  Discover
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-dark ${styles.navbartext} mx-4`}
                  to="/specialDeals"
                >
                  Special Deals
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-dark ${styles.navbartext} mx-4`}
                  to="/booking"
                >
                  Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className={`nav-link text-dark ${styles.navbartext} mx-4`}>
                  About Us
                </Link>
              </li>
            </ul>
            <div className={`${styles.profile}`}>
              <Link className="btn btn-success me-2" to="/login">
                Login
              </Link>
              <a
                type="button"
                onClick={() => {
                  setShowUserDetails(!showUserDetails);
                }}
              >
                <BsFillPersonFill className="display-6" />
              </a>
            </div>
          </div>
        </div>
        {showUserDetails && (
          <div className={`${styles.userDetails}`}>
            <div className={`${styles.flex}`}>
              <h6>Name: </h6>
              <h6>Abdul Moiez</h6>
            </div>
            <div className={`${styles.flex}`}>
              <h6>Email: </h6>
              <h6>abdul.moiez@gmail.com</h6>
            </div>
            <div className={`${styles.flex}`}>
              <h6>Contact: </h6>
              <h6>03430810984</h6>
            </div>
            <button className="btn btn-danger">Logout</button>
          </div>
        )}
      </nav>
    </div>
  );
}
