import express from 'express';
import {
    httpAddNewHotel,
    httpGetAllHotels,
    httpGetHotelById,
    httpDeleteHotelById
} from './hotels.controller.js';
import {
    upload
} from '../../models/hotels/hotels.model.js';

const hotelsRouter = express.Router();

hotelsRouter.post('/addNewHotel', upload.single('image'), httpAddNewHotel);
hotelsRouter.get('/getAllHotels', httpGetAllHotels);
hotelsRouter.get('/getHotelById/:id', httpGetHotelById);
hotelsRouter.get('/deleteHotelById/:id', httpDeleteHotelById);

export {
    hotelsRouter
}