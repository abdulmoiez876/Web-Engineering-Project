import express from 'express';

import {
    httpAddNewUser,
    httpAuthenticateUser,
    httpGetAllUsers
} from './users.controller.js';

const usersRouter = express.Router();

usersRouter.post('/addUser', httpAddNewUser);
usersRouter.post('/authenticateUser', httpAuthenticateUser);
usersRouter.get('/getAllUsers', httpGetAllUsers);

export {
    usersRouter
}