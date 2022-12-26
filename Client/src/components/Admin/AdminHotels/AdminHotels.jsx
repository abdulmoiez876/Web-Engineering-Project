import React from 'react'
import styles from './adminhotel.module.css';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

export default function AdminHotels() {
    const numHotels = 2000;
    
  const hotel = {
    name: 'Kanloop Cottages',
    rooms: 20,
    availableRooms: 10,
    city: 'Shogran',
    country: 'Pakistan',
  };
  const hotels = [hotel, hotel, hotel, hotel, hotel];

  return (
    <div className={`${styles["hotels-container"]}`}>
      <div className={`${styles["sidebar-container"]}`}>
        <AdminNavbar className={`${styles.nav}`} />
      </div>

      <div className={`${styles.hotelHeading}`}>
        <h1>Hotels's List</h1>
        <p>You have total {numHotels} hotels.</p>
      </div>
      <div className={`${styles.hotelsTableContainer}`}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Rooms</th>
              <th scope="col">Available Rooms</th>
              <th scope="col">City</th>
              <th scope="col">Country</th>
              <th scope="col">Delete</th>
              <th scope="edit">Edit</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel, index) => {
              return <tr>
                <th scope="row">{index + 1}</th>
                <td>{hotel.name}</td>
                <td>{hotel.rooms}</td>
                <td>{hotel.availableRooms}</td>
                <td>{hotel.city}</td>
                <td>{hotel.country}</td>
                <td><button type="button" className={`${styles.btnDelete} btn btn-danger`}>Delete</button></td>
                <td><button type="button" className={`${styles.btnEdit} btn btn-primary`}>Edit</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
