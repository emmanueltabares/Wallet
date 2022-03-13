import { Request, Response } from 'express';
import walletService from '../services/wallet';

async function getWallet(req: Request, res: Response){
    if(req.user) {
        try {
            const userId = req.user?._id as any;
            const wallet = await walletService.get(userId);
            res.json(wallet)
        } catch (error) {
            res.json(error)
        } 
    } 
}

async function updateWallet(req: Request, res: Response){
    const { id } = req.params;
    const data = req.body;
    const newWallet = await walletService.update(id, data)
    res.json(newWallet);
}
async function removeWallet(req: Request, res: Response){
    const { id } = req.params;
    try {
        await walletService.remove(id);
        res.json({ msg: "La billetera se eliminó correctamente"})
    } catch (error) {
        return error;
    }
}

export default{
    getWallet,
    updateWallet,
    removeWallet
}


