import { Request, Response } from 'express';
import { generateJWT } from '../modules/jwt';
import bcryptjs from 'bcryptjs';
import authService from '../services/auth';

async function login(req: Request, res: Response) {
    try {
        const user = await authService.query(req.body.email);
        bcryptjs.compareSync(req.body.password, user.password);
        const id: any = user._id
        const token = await generateJWT(id);
        res.json({ msg: 'Bienvenido!', token: token})
    } catch (error) {
        res.json({ msg: 'Unauthorized', error})
    }
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