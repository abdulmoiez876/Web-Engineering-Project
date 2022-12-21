import express from 'express';
import { httpAddNewComplaint } from './contactUs.controller.js';

const contactUsRouter = express.Router();

contactUsRouter.post('/addNewComplaint', httpAddNewComplaint);

export {
    contactUsRouter
}