import { addNewBooking } from "../../models/bookings/bookings.model.js";

const httpAddNewBooking = async (req, res) => {
    try {
        const response = await addNewBooking(req.body);
        if(response.status) {
            res.status(201).send(response);
        }
        else {
            res.status(200).send(response);
        }
    }
    catch(err) {
        res.status(406).send(err);
    }
}

export {
    httpAddNewBooking
}