import React from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./bookingform.module.css";

export default function Bookingform() {
  return (
    <>
      <NavBar />
      <div className={`${styles.maincontainer}`}>
        <h1 className={`${styles.heading}`}>Hotel Booking</h1>
      </div>
      <div className={styles.hr}>
        <hr className="w-50 mt-5" />
      </div>
      <div className={`row ${styles.lowercontainer}`}>
        <div className={`col-7 mt-5 ${styles.hoteldetail}`}>
          <h1>Hotel Details</h1>
          <div className="d-flex mt-4 align-items-center text-secondary">
            <p className="p-0 m-0">
              <b>Name:</b>
            </p>
            <p className="p-0 ms-2 my-0">Razi Hostel</p>
          </div>
          <div className="d-flex align-items-center text-secondary">
            <p className="p-0 m-0">
              <b>Location:</b>
            </p>
            <p className="p-0 ms-2 my-0">Bolan Road</p>
          </div>
          <h2 className="mt-2 text-success">Images</h2>
          <div className="row rounded-4">
            <img
              src={require("../../assets/chitral1.jpg")}
              alt=""
              className="rounded-4 p-1"
            />
          </div>

          <div className={`row d-flex ${styles.imgrow}`}>
            <img
              src={require("../../assets/chitral1.jpg")}
              alt=""
              className="col-5 rounded-4 p-1"
            />
            <img
              src={require("../../assets/chitral1.jpg")}
              alt=""
              className="col-7 rounded-4 p-1"
            />
          </div>
          <div className={`row d-flex ${styles.imgrow}`}>
            <img
              src={require("../../assets/chitral1.jpg")}
              alt=""
              className="col-7 rounded-4 p-1"
            />
            <img
              src={require("../../assets/chitral1.jpg")}
              alt=""
              className="col-5 rounded-4 p-1"
            />
          </div>
        </div>
        <div className={`col-5 mt-5 p-4 ${styles.bookform}`}>
          <h1 className="text-center my-5 pt-5">Booking Details</h1>
          <form>
            <div className="row px-4">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  name="customerName"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  name="customerEmail"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div className="row mt-4 px-4">
              <div className="col">
                <input
                  type="text"
                  name="customerContactNumber"
                  className="form-control"
                  placeholder="Enter Your Contact"
                />
              </div>
              <div className="col">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Category</option>
                  <option name="room category" value="Single Room">
                    Double Room
                  </option>
                  <option name="room category" value="Double Room">
                    Double Room
                  </option>
                </select>
              </div>
            </div>
            <div className="row mt-4 px-4">
              <div className="col">
                <label htmlFor="arrivalDate" className="text-dark">
                  <b>Arrival Date</b>{" "}
                </label>
                <input
                  type="date"
                  id="arrivalDate"
                  name="arrivalDate"
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor="leavingDate" className="text-dark">
                  <b>Leaving Date</b>
                </label>
                <input
                  type="date"
                  id="leavingDate"
                  name="leavingDate"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mt-4 px-4">
              <div className="col">
                <label htmlFor="paymentMethod" className="text-dark">
                  <b>Payment Method</b>
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="paymentMethod"
                >
                  <option name="payment method"  value="CashOnDelivery" selected>Cash on Delivery</option>
                  <option  name="payment method" value="online">Online</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="onlineMethods" className="text-dark">
                  <b>Select Method</b>
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="onlineMethods"
                >
                  <option name="payment method"  value="HBL" selected>HBL Bank</option>
                  <option  name="payment method" value="JazzCash">JazzCash</option>
                  <option  name="payment method" value="EasyPaisa">EasyPaisa</option>
                </select>
              </div>
            </div>
          </form>
          <div className={`mt-3 mx-4 d-flex `}>
            <p className={`text-success`}><b>Charges: </b></p> <p>&nbsp;Rs. 500</p>
          </div>
          <div className={`align-items-center justify-content-center d-flex ${styles.submitButton}`}>
            <button className="btn btn-success w-50">Book Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
