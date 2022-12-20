import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [navlinkcolor, setnavlinkcolor] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= window.innerHeight) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const changeColor = () => {
    console.log(window.scrollY);
    if (window.scrollY >= window.innerHeight) {
      setnavlinkcolor(true);
    } else {
      setnavlinkcolor(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  useEffect(() => {
    changeColor();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeColor);
  });
  return (
    <nav
      className={`navbar navbar-expand-lg ${styles.navbarposition}  ${
        navbar ? "bg-light" : ""
      }`}
    >
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
              <a
                className={`nav-link text-light ${
                  navlinkcolor ? "text-dark" : ""
                } ${styles.navbartext} ${styles.active} mx-4`}
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-light ${
                  navlinkcolor ? "text-dark" : ""
                } ${styles.navbartext} mx-4`}
                href="#"
              >
                Discover
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-light ${
                  navlinkcolor ? "text-dark" : ""
                } ${styles.navbartext} mx-4`}
                href="#"
              >
                Special Deals
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-light ${
                  navlinkcolor ? "text-dark" : ""
                } ${styles.navbartext} mx-4`}
                href="#"
              >
                Community
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-light ${
                  navlinkcolor ? "text-dark" : ""
                } ${styles.navbartext} mx-4`}
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
