import React from "react";
import styles from "./searchbar.module.css";

export default function Searchbar() {
  return (
    <section
      class={`search-banner text-white py-3 ${styles.searchform}`}
      id="search-banner"
    >
      <div class="container py-5 my-5">
        <div class="row text-center pb-4">
          <div class="col-md-12">
            <h2 class={`text-white ${styles.searchbarheading}`}>
              Explore The World With a Smile
            </h2>
          </div>
          <div class="col-md-12">
            <h2 class={`text-white ${styles.searchbartext}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum eius molestias doloribus asperiores unde minus necessitatibus! Pariatur dolore eius nemo exercitationem fugiat in placeat doloremque repellat. Nihil amet excepturi a, quas assumenda, expedita quam fuga temporibus sequi natus consectetur, vitae aliquam ex quos optio cupiditate. Voluptatum ratione enim ea. Enim fugit incidunt quis qui neque aspernatur repellat aliquid accusantium consequatur, nesciunt cumque, velit sit soluta provident optio excepturi beatae expedita, voluptate id tenetur labore. Quam accusantium impedit et quod veniam, consequuntur alias laboriosam cupiditate tenetur iste suscipit nihil delectus eligendi iure odit dicta autem hic aliquam! Veritatis, harum possimus.
            </h2>
          </div>
        </div>
        <div class={`row`}>
          <div class="col-md-12">
            <div class={`card ${styles.searchcard}`}>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group ">
                      <label htmlFor="country" className={styles.label}>Country:</label>
                      <select id="country" class="form-control">
                        <option selected>Pakistan</option>
                        <option>America</option>
                        <option>London</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group ">
                    <label htmlFor="city" className={styles.label}>City:</label>
                      <select id="city" class="form-control">
                        <option selected>Lahore</option>
                        <option>Karachi</option>
                        <option>Islamabad</option>
                        <option>Rawalpindi</option>
                        <option>Gujranwala</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group ">
                    <label htmlFor="hotelstandard" className={styles.label}>Hotel:</label>
                      <select id="hotelstandard" class="form-control">
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
                <div class="row mt-4">
                <div class="col-md-4">
                    <div class="form-group ">
                    <label htmlFor="checkIn" className={styles.label}>Check In:</label>
                      <input class="col-md-12 form-control mb-4" id="checkIn" type="date" />
                    </div>
                  </div>
                <div class="col-md-4">
                    <div class="form-group ">
                    <label htmlFor="checkOut" className={styles.label}>Check Out:</label>
                      <input class="col-md-12 form-control mb-4" id="checkOut" type="date" />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <button type="button" class="btn btn-success mt-4 pl-5 pr-5">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
