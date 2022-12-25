import express from 'express';
import { httpAddNewBooking, httpGetAllBookings } from './bookings.controller.js';

const bookingsRouter = express.Router();

bookingsRouter.post('/addNewBooking', httpAddNewBooking);
bookingsRouter.get('/getAllBookings', httpGetAllBookings);

export {
    bookingsRouter
}