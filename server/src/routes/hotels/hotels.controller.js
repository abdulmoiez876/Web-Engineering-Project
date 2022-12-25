import {
    addNewHotel,
    getAllHotels,
    getHotelById
} from "../../models/hotels/hotels.model.js";

const httpAddNewHotel = async (req, res) => {
    try {
        // const response = await addNewHotel(req.body, req.file);
        const response = await addNewHotel(req.body);

        if (response.status) {
            return res.status(201).send(response);
        } else {
            return res.status(200).send(response);
        }
    } catch (err) {
        return res.status(406).send(err);
    }
}

const httpGetAllHotels = async (req, res) => {
    try {
        const response = await getAllHotels();
        res.status(200).send(response);
    }
    catch(err) {
        res.status(404).send(err);
    }
}

const httpGetHotelById = async (req, res) => {
    try {
        const response = await getHotelById(req.params.id);
        res.status(200).send(response);
    }
    catch(err) {
        res.status(404).send(err);
    }
}

export {
    httpAddNewHotel,
    httpGetAllHotels,
    httpGetHotelById
}