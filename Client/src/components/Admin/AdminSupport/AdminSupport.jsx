import React from "react";
import styles from "./adminsupport.module.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Message from "./Message/Message";

export default function AdminSupport() {
  const users = [{
    name: "Mohsin Sheikh",
    initials: "MS",
    email: "sheikhmohsin181@gmail.com",
    subject: "Error while booking a hotel",
    message: `I don\'t know what is happenning... I am
            trying very very hard to book a hotel at your 
            website but it is sending me an error that 'Cannot
            book hotel at this time! Contact Admin'. Can you please
            resolve this error`,
  },
  {
    name: "Mohsin Sheikh",
    initials: "MS",
    email: "sheikhmohsin181@gmail.com",
    subject: "Error while booking a hotel",
    message: `I don\'t know what is happenning... I am
            trying very very hard to book a hotel at your 
            website but it is sending me an error that 'Cannot
            book hotel at this time! Contact Admin'. Can you please
            resolve this error`,
  },
  {
    name: "Mohsin Sheikh",
    initials: "MS",
    email: "sheikhmohsin181@gmail.com",
    subject: "Error while booking a hotel",
    message: `I don\'t know what is happenning... I am
            trying very very hard to book a hotel at your 
            website but it is sending me an error that 'Cannot
            book hotel at this time! Contact Admin'. Can you please
            resolve this error`,
  },];
  return (
    <div className={`${styles["support-container"]}`}>
      <div className={`${styles["sidebar-container"]}`}>
        <AdminNavbar className={`${styles.nav}`} />
      </div>

      <div className={`${styles.customerHeading}`}>
        <h1>Customer's Support</h1>
      </div>
      <div className={`${styles.customersTableContainer}`}>
        <table className="table table-striped">
          <thead>
            <tr className="">
              <th scope="col">#</th>
              <th scope="col">User</th>
              <th scope="col">Subject</th>
              <th scope="col">Message</th>
              <th scope="col">Solved</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.subject}</td>
                  <td>{user.message}</td>
                  <td>
                    <button
                      type="button"
                      className={`${styles.btnDelete} btn btn-success`}
                    >
                      Resolved
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${styles.btnDelete} btn btn-danger`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
