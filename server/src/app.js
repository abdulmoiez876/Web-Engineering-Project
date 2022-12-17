import express from 'express';
import cors from 'cors';
import morgan from 'morgan'

const app = express();

app.use(cors({
    origin: 'http://localhost:3000' 
}));
app.use();
app.use(morgan('short'));

export {
    app
}