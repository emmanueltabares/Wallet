import { Types } from 'mongoose';

export interface newUserI {
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

export interface UserI {
    _id: Types.ObjectId,
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

export interface UserQuery {
    username?: string;
    email?: string;
}

export interface User {
    _id?: Types.ObjectId;
}