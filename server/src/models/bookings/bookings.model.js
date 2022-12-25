import bookings from './bookings.mongo.js';

const getLatestId = async () => {
    const latestBooking = await bookings.findOne().sort('-id');
    if (!latestBooking) {
        return 1;
    }
    return latestBooking.id + 1;
}

const addNewBooking = async (bookingData) => {
    try {
        const id = await getLatestId();

        if ((await bookings.find({
                customerEmail: bookingData.customerEmail,
                country: bookingData.country,
                city: bookingData.city,
                hotelName: bookingData.hotelName,
                roomNumber: bookingData.roomNumber
            })).length > 0) {
            return {
                status: false,
                message: "This room is already booked by you!"
            }
        }
        else if ((await bookings.find({
                hotelName: bookingData.hotelName,
                country: bookingData.country,
                city: bookingData.city,
                roomNumber: bookingData.roomNumber
            })).length > 0) {
            return {
                status: false,
                message: "This hotel room is already in use by someone else!"
            }
        } 
        else {
            try {
                await bookings.create({
                    id,
                    ...bookingData
                })

                return {
                    status: true,
                    message: "Room has been booked successfully!"
                }
            }
            catch(err) {
                return {
                    status: false,
                    message: "Could not add booking, Please try again!"
                }
            }
        }
    } catch (err) {
        return {
            status: false,
            message: "Could not add booking, Please try again!"
        }
    }
}

const getAllBookings = async () => {
    try {
        const result = await bookings.find();

        return {
            result,
            status: true
        }
    }
    catch(err) {
        return {
            status: false
        }
    }
}

export {
    addNewBooking,
    getAllBookings
}