import { Schema, model } from 'mongoose';
import { newUserI } from '../interfaces/user.interface';

const userSchema = new Schema<newUserI>({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, {
    versionKey: false,
    timestamps: true
})

export const userModel = model<newUserI>('users', userSchema);

