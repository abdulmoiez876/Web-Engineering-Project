import React from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png"

export default function Navbar() {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark shadow-5-strong ${styles.navbarposition} ${styles.navbarwidth}`}
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
              <a className="nav-link active text-light" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Discover
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Special Deals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Community
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light">About Us</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className={`form-control me-2 ${styles.input}`}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className={`btn btn-outline-light ${styles.searchbtn}`} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
