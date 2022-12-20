import React from "react";
import styles from "./searchbar.module.css";

export default function Searchbar() {
  return (
    <section
      className={`search-banner text-white py-3 ${styles.searchform}`}
      id="search-banner"
    >
      <div className="container py-5 my-5">
        <div className={styles.child}>
          <div className="row">
          <h2 className={`text-white text-center mb-5 ${styles.searchbarheading}`}>
            Explore The World With a Smile
          </h2>
          </div>
          <form className={`card row ${styles.searchcard}`}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group ">
                    <label htmlFor="country" classNameName={styles.label}>
                      Country:
                    </label>
                    <select id="country" className="form-control">
                      <option selected>Pakistan</option>
                      <option>America</option>
                      <option>London</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group ">
                    <label htmlFor="city" classNameName={styles.label}>
                      City:
                    </label>
                    <select id="city" className="form-control">
                      <option selected>Lahore</option>
                      <option>Karachi</option>
                      <option>Islamabad</option>
                      <option>Rawalpindi</option>
                      <option>Gujranwala</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group ">
                    <label htmlFor="hotelstandard" classNameName={styles.label}>
                      Hotel:
                    </label>
                    <select id="hotelstandard" className="form-control">
                      <option selected>5 Star</option>
                      <option>4 Star</option>
                      <option>3 Star</option>
                      <option>Executive</option>
                      <option>Luxurious</option>
                      <option>Standard</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-4">
                  <div className="form-group ">
                    <label htmlFor="checkIn" classNameName={styles.label}>
                      Check In:
                    </label>
                    <input
                      className="col-md-12 form-control mb-4"
                      id="checkIn"
                      type="date"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group ">
                    <label htmlFor="checkOut" classNameName={styles.label}>
                      Check Out:
                    </label>
                    <input
                      className="col-md-12 form-control mb-4"
                      id="checkOut"
                      type="date"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <button
                    type="button"
                    className="btn btn-success mt-4 pl-5 pr-5"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
