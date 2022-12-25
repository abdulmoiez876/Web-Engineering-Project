import React from "react";
import styles from "./booking.module.css";
import Footer from "../../Footer/Footer";
import NavBar from "../../Navbar/Navbar";
import { FaFilter } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import Hotelcard from "../../Hotelcard/Hotelcard";

export default function Booking() {
  return (
    <>
      <div className={`${styles.maincontainer}`}>
        <NavBar />
        <div className={styles.mainoption}>
          <h1 className={styles.pagetitle}>Book Hotel</h1>
          <input
            type="text"
            className="form-control rounded-5"
            placeholder="Search Hotel"
          />
        </div>
      </div>
      <div className={`my-5 row mx-4 ${styles.lowercontainer}`}>
        <div className={`col-3 ${styles.left}`}>
          <div className="d-flex align-items-center">
            <FaFilter className="display-6 text-success" />
            <h2 className="ms-4 text-success">Filter</h2>
          </div>
          <div className={`${styles.categorydiv} mt-5`}>
            <h3 className="text-success">Category</h3>
            <select
              className="form-select mt-3 w-75"
              aria-label="Default select"
            >
              <option selected>Select Category</option>
              <option value="Executive">Executive</option>
              <option value="Luxury">Luxury</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Standard">Standard</option>
            </select>
          </div>
          <div className={`${styles.countrydiv} mt-5`}>
            <h3 className="text-success">Country</h3>
            <select
              className="form-select mt-3 w-75"
              aria-label="Default select"
            >
              <option selected>Select Category</option>
              <option value="Executive">Executive</option>
              <option value="Luxury">Luxury</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Standard">Standard</option>
            </select>
          </div>
          <div className={`${styles.ratingdiv} mt-5`}>
            <h3 className="text-success">Rating</h3>
            <div className="d-flex my-2">
              <BsStar className="me-2" />
              <BsStar className="me-2" />
              <BsStar className="me-2" />
              <BsStar className="me-2" />
              <BsFillStarFill className="me-2" />
            </div>
            <div className="d-flex my-2">
              <BsStar className="me-2" />
              <BsStar className="me-2" />
              <BsStar className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
            </div>
            <div className="d-flex my-2">
              <BsStar className="me-2" />
              <BsStar className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
            </div>
            <div className="d-flex my-2">
              <BsStar className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
            </div>
            <div className="d-flex my-2">
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
            </div>
          </div>
        </div>
        <div className={`col-9 ${styles.right}`}>
          <Hotelcard />
        </div>
      </div>
      <Footer />
    </>
  );
}
