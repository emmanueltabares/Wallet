import config from "../config/config";
import { sign } from 'jsonwebtoken';
import Types from 'mongoose';

export const generateJWT = async (id: Types.ObjectId) => {
    return new Promise((resolve, reject) => {
        const payload = id.toString();

        sign(
            { id: payload },
            config.JWT_SECRET_KEY,
            { expiresIn: config.TOKEN_KEEP_ALIVE },
            (err, token) => {
                if(err) {
                    reject('Failed to generate token')
                } else {
                    resolve(token)
                }
            });
    });
};