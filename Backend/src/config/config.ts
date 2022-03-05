import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGO_DB: process.env.MONGO_DB,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASS: process.env.MONGO_PASS,
    MONGO_CLUSTER: process.env.MONGO_CLUSTER,

    DEV_PORT: process.env.DEV_PORT
}