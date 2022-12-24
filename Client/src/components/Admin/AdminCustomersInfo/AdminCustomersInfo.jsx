import React from "react";
import styles from "./admincustomers.module.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function AdminCustomersInfo() {
  //Page dynamic data
  const numCustomers = 2000;

  //Table dynamic data
  const user = {
      name: 'Mohsin Sheikh',
      email: 'sheikhmohsin181@gmail.com',
      phone: '03115643979',
      verified: true,
      lastCheckOut: '10-02-2022',
      group: 'Diamond',
    };
    const users = [user, user, user, user, user];

  return (
    <div className={`${styles["customers-container"]}`}>
      <div className={`${styles["sidebar-container"]}`}>
        <AdminNavbar className={`${styles.nav}`} />
      </div>

      <div className={`${styles.customerHeading}`}>
        <h1>Customer's List</h1>
        <p>You have total {numCustomers} customers.</p>
      </div>
      <div className={`${styles.customersTableContainer}`}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User</th>
              <th scope="col">Phone</th>
              <th scope="col">Verified</th>
              <th scope="col">Last Checkout</th>
              <th scope="col">Group</th>
              <th scope="col">Delete</th>
              <th scope="edit">Edit</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user, index) => {
            return <tr>
              <th scope="row">{index+1}</th>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.verified === true ? '✅ Verified' : '❌ Not Verified'}</td>
              <td>{user.lastCheckOut}</td>
              <td>{user.group}</td>
              <td><button type="button" className={`${styles.btnDelete} btn btn-danger`}>Danger</button></td>
              <td><button type="button" className={`${styles.btnEdit} btn btn-primary`}>Edit</button></td>
            </tr>
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
