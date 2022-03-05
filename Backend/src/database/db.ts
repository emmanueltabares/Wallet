import mongoose from 'mongoose';
import config from '../config/config';

( async () => {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/wallet-database');
        console.log(`DB Connected to: ${db.connection.name}`);
    } catch (error) {
        console.log(config)
    }
    
})();