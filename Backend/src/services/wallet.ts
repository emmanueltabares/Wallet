import { WalletI } from '../interfaces/wallet.interface';
import walletRepositorie from '../repositories/wallet';

async function get() {
    return await walletRepositorie.get();
}

async function create(data: WalletI) {
    const newWallet = await walletRepositorie.add(data);
    return newWallet;
}

export default {
    create,
    get
}