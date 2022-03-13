import { WalletI } from "../interfaces/wallet.interface";
import { walletModel } from "../models/wallet";

async function get(userId: string) {
    console.log(userId)
    return await walletModel.findOne({userId})
}

async function add (userId: string) {
    const newWallet = new walletModel({
        userId,
        expenses: []
    })
    await newWallet.save();
    return newWallet;
}

async function update(id: string, data: WalletI) {
    return await walletModel.findOneAndUpdate({id, data})
}

async function remove(id: string) {
    await walletModel.findByIdAndDelete(id);
}

export default {
    add,
    get,
    update,
    remove
}
