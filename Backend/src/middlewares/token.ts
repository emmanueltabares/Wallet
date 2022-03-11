import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";
import { UserI } from "../interfaces/user.interface";
import authService from '../services/auth';

declare global {
    namespace Express {
      interface Request {
        user?: UserI;
      }
    }
}

export const isValidToken = async (req: Request,res: Response, next: NextFunction) => {
  
    const token = req.headers.authorization?.split(" ")[1]; //Bearer Token
    if (!token) {
        return res.status(400).json({
        msg: "Token invalid or inexists",
        });
    }
    
    try {
        const payload: any = jwt.verify(token, config.JWT_SECRET_KEY);
        if (!payload) {
            res.status(400).json({
            msg: "Invalid token",
        });
        }
        const usuario = await authService.getUser(payload.id as string);
        if (!usuario) {
            return res.status(401).json({
            msg: "Unathorized.",
        });
        }
        req.user = usuario;
        next();
    } catch (error) {
        res.json(error);
        next(error);
    }
};
