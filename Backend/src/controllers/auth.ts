import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import { generateJWT } from '../modules/jwt';
import authService from '../services/auth';

async function login(req: Request, res: Response) {
    
}

async function signUp(req: Request, res: Response){
    await authService.query(req.body.email);
    const newUser = await authService.addUser(req.body);

    res.json({ newUser});
}

export default {
    login,
    signUp
}