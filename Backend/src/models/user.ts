import { Schema, model } from 'mongoose';
import { newUserI } from '../interfaces/user.interface';
import bcryptjs from 'bcryptjs';

const userSchema = new Schema<newUserI>({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

userSchema.pre('save', async function (next) {
    const user = this;
    const hash = await bcryptjs.hash(user.password, 10);
  
    this.password = hash;
    next();
  });

export const userModel = model<newUserI>('users', userSchema);

