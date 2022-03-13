import { Schema, model } from 'mongoose';
import { WalletI } from '../interfaces/wallet.interface';

const walletSchema = new Schema<WalletI>({
    userId: { 
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    expenses: [{
        _id: Schema.Types.ObjectId,
        name: String,
        price: Number,
    }],
    total: {
        type: Number   
    }
})

export const walletModel = model('wallet', walletSchema);