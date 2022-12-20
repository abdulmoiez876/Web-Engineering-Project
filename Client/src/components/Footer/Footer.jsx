import React from "react";
import styles from "./footer.module.css";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <div className="fluid px-5 bg-dark">
      <footer className="pt-5 text-light">
        <div className="row">
          <div className="col-2">
            <h5 className="text-success">TOP DESTINATIONS</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Feary Meadows
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Azad Jamu & Kashmir
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Naran Kaghan
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Swat Valley
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Hunza Valley
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Chitral Valley
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Gilgit Baltistan
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Skardu
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5 className="text-success">TRAVEL INTERESTS</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Adventure Travel
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Travel on Budget
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Honeymoon
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Holidays
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Festivals
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5 className="text-success">SHOP</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Destination Guides
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Tripify Shop
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  English Guides
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Urdu Guides
                </a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h5 className="text-success">ABOUT US</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  About Tripify
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Terms and Conditions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Suggestions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Work with Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-success" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-between pt-4 mt-4 border-top">
          <p className="text-muted">
            © 2021 Company, Inc. All rights reserved.
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-success" href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-success" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-success" href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}