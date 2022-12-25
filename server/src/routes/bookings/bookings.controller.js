import { addNewBooking } from "../../models/bookings/bookings.model.js";

const httpAddNewBooking = async (req, res) => {
    await addNewBooking(req.body);
}

export {
    httpAddNewBooking
}