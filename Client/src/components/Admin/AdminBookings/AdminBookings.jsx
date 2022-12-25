import React from "react";
import styles from "./adminbookings.module.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function AdminBookings() {
  //Page dynamic data
  const numBookings = 2000;

  //Table dynamic data
  const user = {
      name: 'Mohsin Sheikh',
      email: 'sheikhmohsin181@gmail.com',
      hotel: 'Continental',
      booking: 'active',
      roomtype: 'Single',
      roomNo: '001',
      arrive: '10-02-2020',
      payment: 'Paid',
      country: 'Pakistan',
      city: 'Islamabad',
    };
    const users = [user, user, user, user, user];

  return (
    <div className={`${styles["customers-container"]}`}>
      <div className={`${styles["sidebar-container"]}`}>
        <AdminNavbar className={`${styles.nav}`} />
      </div>

      <div className={`${styles.customerHeading}`}>
        <h1>Booking's List</h1>
        <p>You have total {numBookings} customers.</p>
      </div>
      <div className={`${styles.customersTableContainer}`}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User</th>
              <th scope="col">Hotel</th>
              <th scope="col">Booking</th>
              <th scope="col">Room Type</th>
              <th scope="col">Room No</th>
              <th scope="col">Arrival Date</th>
              <th scope="col">Payment</th>
              <th scope="col">Country</th>
              <th scope="col">City</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user, index) => {
            return <tr>
              <th scope="row">{index+1}</th>
              <td>{user.name}</td>
              <td>{user.hotel}</td>
              <td>{user.booking}</td>
              <td>{user.roomtype}</td>
              <td>{user.roomNo}</td>
              <td>{user.arrive}</td>
              <td>{user.payment}</td>
              <td>{user.country}</td>
              <td>{user.city}</td>
              <td><button type="button" className={`${styles.btnEdit} btn btn-primary`}>Edit</button></td>
            </tr>
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
