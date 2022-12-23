import contactUs from './contactUs.mongo.js';

const getLatestId = async () => {
    const latestId = await contactUs.findOne().sort('-id');

    if(!latestId) {
        return 1;
    }
    return latestId.id + 1;
}

const addNewComplaint = async (data) => {
    try {
        const id = await getLatestId();
        const res = await contactUs.updateOne({email: data.email, problem: data.problem}, {
            id,
            ...data
        }, {
            upsert: true
        })
        
        if(res.matchedCount >= 1) {
            return {
                status: false,
                message: "This response is already submitted!"
            }
        }
        else if(res.acknowledged) {
            return {
                status: true,
                message: "Response Submitted Successfully!"
            }
        }
        else {
            return {
                status: false,
                message: "Response could not be submitted, please try again!"
            }
        }
    }
    catch (err) {
        return {
            status: false,
            message: "Response could not be submitted, please try again!"
        }
    }
}

export {
    addNewComplaint
}