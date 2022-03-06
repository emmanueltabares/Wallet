import { Request, Response } from 'express';
import walletService from '../services/wallet';

async function getWallet(req: Request, res: Response){
    const data = await walletService.get();
    res.json(data)
}

async function createWallet(req: Request, res: Response) {
    const data = req.body;
    const newWallet = await walletService.create(data)
    res.json(newWallet);
}

async function updateWallet(){}
async function removeWallet(){}

export default{
    createWallet,
    getWallet,
    updateWallet,
    removeWallet
}


