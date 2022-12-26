import React from 'react';
import styles from './addhotel.module.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminNavbar from '../../AdminNavbar/AdminNavbar';


export default function AddHotel() {
    const [name, setName] = useState('');
    const [rooms, setRooms] = useState('');
    const [availableRooms, setAvailableRooms] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
  
    const changeHandler = (event) => {
      if (event.target.name === 'name') {
        setName(event.target.value);
      }
      else if (event.target.name === 'rooms') {
        setRooms(event.target.value);
      }
      else if (event.target.name === 'availableRooms') {
        setAvailableRooms(event.target.value);
      }
      else if (event.target.name === 'city') {
        setCity(event.target.value);
      }
      else if (event.target.name === 'country') {
        setCountry(event.target.value);
      }
    }
  
    const submitHandler = async (event) => {
      event.preventDefault();
  
      axios.post("http://localhost:8000/addNewComplaint", {
        name,
        rooms,
        availableRooms,
        city,
        country
      }).then((response) => {
        alert(response.data.message);
      })
  
      setName('');
      setRooms('');
      setAvailableRooms('');
      setCity('');
      setCountry('');
    }
  
    return (
      <>
        <div className={`${styles["sidebar-container"]}`}>
            <AdminNavbar className={`${styles.nav}`} />
        </div>
        <h1 className='text-center pt-3 fs-1'>Add a New Hotel</h1>
        <div className={`${styles.container2} mt-5`}>
          <form className={`w-25 ${styles.form}`}>
            <div className={`${styles.namescontainer}`}>
              <div className={`form-group ${styles.namewidth}`}>
                <label for="name">Hotel Name</label>
                <input
                value={name}
                  onChange={changeHandler}
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="availableRoomsHelp"
                  placeholder="Enter hotel Name"
                />
              </div>
              <div className={`form-group ${styles.namewidth}`}>
                <label for="rooms">Rooms</label>
                <input
                value={rooms}
                  onChange={changeHandler}
                  name="rooms"
                  type="text"
                  className="form-control"
                  id="rooms"
                  aria-describedby="availableRoomsHelp"
                  placeholder="Enter Rooms"
                />
              </div>
            </div>
            <div className={`form-group mt-4 ${styles.availableRoomspasswidth}`}>
              <label for="availableRooms">Available Rooms</label>
              <input
              value={availableRooms}
                onChange={changeHandler}
                name="availableRooms"
                type="availableRooms"
                className="form-control"
                id="availableRooms"
                aria-describedby="availableRoomsHelp"
                placeholder="Enter Available Rooms"
              />
            </div>
            {/* <div className={`form-group mt-4 ${styles.availableRoomspasswidth}`}>
              <label for="password">Password</label>
              <input
                onChange={changeHandler}
                name="password"
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div> */}
            <div className={`form-group mt-4 ${styles.probdiscwidth}`}>
              <label for="city">City</label>
              <input
              value={city}
                onChange={changeHandler}
                name="city"
                type="text"
                className="form-control"
                id="city"
                placeholder="Enter Hotel City"
              />
            </div>
            <div className={`form-group mt-4 ${styles.probdiscwidth}`}>
              <label for="country">Country</label>
              <input
              value={country}
                onChange={changeHandler}
                name="country"
                type="text"
                className="form-control"
                id="country"
                placeholder="Enter Hotel Country"
              />
            </div>
            <button onClick={submitHandler} type="submit" className="btn btn-success mt-4">
              Submit
            </button>
          </form>
        </div>
      </>
    )
}
