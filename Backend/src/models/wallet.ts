import { Schema, model } from 'mongoose';
import { WalletI } from '../interfaces/wallet.interface';

const walletSchema = new Schema<WalletI>({
    userId: { type: Schema.Types.ObjectId },
    title: { type: String, required: true, default: 'My Wallet'},
    expenses: [{
        _id: Schema.Types.ObjectId,
        name: String,
        price: Number
    }]
})

export const walletModel = model('wallet', walletSchema);