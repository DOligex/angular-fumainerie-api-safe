import { NextFunction, Request, Response } from 'express';
import { UserFunction } from './user-function.enum';

export const checkFunction = (role: UserFunction) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRole = (req as any).user.function;
        if (role === userRole) {
            next();
        } else {
            res.sendStatus(401);
        }
    };
};
