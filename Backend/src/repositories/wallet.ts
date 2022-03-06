import { WalletI } from "../interfaces/wallet.interface";
import { walletModel } from "../models/wallet";

async function get() {
    return await walletModel.find()
}

async function add (data: WalletI) {
    
}

async function update() {

}

async function remove() {

}

export default {
    add,
    get,
    update,
    remove
}
