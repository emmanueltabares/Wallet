import { Types } from "mongoose";

export interface WalletI {
    _id: string
    userId: Types.ObjectId;
    expenses: expenseI[];
    total: Number
}

export interface expenseI {
    _id: string,
    name: String,
    price: Number
}