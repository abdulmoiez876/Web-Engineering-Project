import { addNewHotel } from "../../models/hotels/hotels.model.js";

const httpAddNewHotel = async (req, res) => {
    try {
        const response = await addNewHotel(req.body, req.file);

        if(response.status) {
            return res.status(201).send(response);
        }
        else {
            return res.status(200).send(response);
        }
    }
    catch (err) {
        return res.status(406).send(err);
    }
}

export {
    httpAddNewHotel
}