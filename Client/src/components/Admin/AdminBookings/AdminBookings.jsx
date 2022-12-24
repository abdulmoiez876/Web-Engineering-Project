import React from "react";
import styles from "./admincustomers.module.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function AdminBookings() {
  //Page dynamic data
  const numBookings = 2000;

  //Table dynamic data
  const user = {
      name: 'Mohsin Sheikh',
      email: 'sheikhmohsin181@gmail.com',
      package: 'Continental',
      booking: 'active',
      roomtype: 'Single',
      arrive: '10-02-2020',
      payment: 'Paid',
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
              <th scope="col">Package</th>
              <th scope="col">Booking</th>
              <th scope="col">Room Type</th>
              <th scope="col">Arrive</th>
              <th scope="col">Payment</th>
              <th scope="edit">Edit</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user, index) => {
            return <tr>
              <th scope="row">{index+1}</th>
              <td>{user.name}</td>
              <td>{user.package}</td>
              <td>{user.booking}</td>
              <td>{user.roomtype}</td>
              <td>{user.arrive}</td>
              <td>{user.payments}</td>
              <td><button type="button" className={`${styles.btnEdit} btn btn-primary`}>Edit</button></td>
            </tr>
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
