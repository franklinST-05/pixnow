import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface PayloadJwt {
    id: string;
    email: string;
    sub: string;
    iat: number;
    exp: number;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "You must be logged in to access this resource" });
    }
    
    const [prefix, token] = authorization.split(" ");
    
    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET!) as PayloadJwt;
    if(!jwtPayload) {
        return res.status(401).json({ error: "You must be logged in to access this resource" });
    }

    req.auth_user = {
        id: jwtPayload.id,
        email: jwtPayload.email,
    };

    return next();
}