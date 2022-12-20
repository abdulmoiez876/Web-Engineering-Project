import users from './users.mongo.js';

const getLatestUserId = async () => {
    const latestId = await users.findOne().sort('-id');
    if(!latestId) {
        return 1;
    }
    return latestId.id + 1;
}

const addNewUser = async (userData) => {
    try {
        const newUserId = await getLatestUserId();

        const res = await users.updateOne({email: userData.email}, {
            id: newUserId,
            email: userData.email,
            password: userData.password,
            firstName: userData.firstName,
            lastName: userData.lastName
        }, {
            upsert: true
        });

        if(res.matchedCount >= 1) {
            return {
                status: false,
                message: "User already exists!"
            }
        }
        else if(res.acknowledged) {
            return {
                status: true,
                message: "User created successfully!"    
            }
        }
        else {
            return {
                status: false,
                message: "User could not be created!" 
            }
        }
    }
    catch(err) {
        return {
            status: false,
            message: "User could not be created!" 
        }
    }
}

const authenticateUser = async (userData) => {
    try {
        if(await users.findOne({email: userData.email})) {
            if(await users.findOne({email: userData.email, password: userData.password})) {
                return {
                    status: true,
                    message: "User verified successfully!"
                }
            }
            else {
                return {
                    status: false,
                    message: "Incorrect Password!"
                }
            }
        }
        else {
            return {
                status: false,
                message: "User not found!"
            }
        }
        
    }
    catch (err) {
        return {
            status: false,
            message: "Please try again!"
        }
    }
}

export {
    addNewUser,
    authenticateUser
}

