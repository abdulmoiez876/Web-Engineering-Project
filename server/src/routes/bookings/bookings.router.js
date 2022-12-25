import express from 'express';
import { httpAddNewBooking } from './bookings.controller.js';

const bookingsRouter = express.Router();

bookingsRouter.post('/addNewBooking', httpAddNewBooking);

export {
    bookingsRouter
}