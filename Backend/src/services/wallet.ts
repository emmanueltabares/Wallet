import { WalletI } from '../interfaces/wallet.interface';
import walletRepositorie from '../repositories/wallet';
import authService from './auth';

async function get(userId: string) {

    try {
        const wallet = await walletRepositorie.get(userId);
        return wallet;
    } catch (error) {
        return error;
    }
}

async function create(id: string) {
    try {
        const user = await authService.getUser(id);
        if (!user)
        throw new Error('User does not exist. Error creating cart');

        const newWallet = await walletRepositorie.add(id)
        return newWallet;
    } catch (error) {
        return error;
    }
}

async function update(id: string, data: WalletI){
    try {
        const newWallet = await walletRepositorie.update(id, data);
        return newWallet;
    } catch (error) {
        return error;
    }
}

async function remove(id: string){
    try {
        await walletRepositorie.remove(id);
    } catch (error) {
        return error;
    }
}

export default {
    create,
    get,
    update,
    remove
}