import express from 'express';
import { httpAddNewHotel } from './hotels.controller.js';
import { upload } from '../../models/hotels/hotels.model.js';

const hotelsRouter = express.Router();

hotelsRouter.post('/addNewHotel', httpAddNewHotel);

export {
    hotelsRouter
}