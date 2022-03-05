import express from 'express';
import apiRouter from './routes/index';
import './database/db';
import config from './config/config';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const PORT = config.DEV_PORT || 8080;

app.listen(PORT, () => {
    console.log(`server up in port ${PORT}`)
})

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRouter);