import { Request, Response, NextFunction } from 'express';

export const vidangeurMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if ((req as any).user.function === 'vidangeur') {
    next();
    } else {
        res.sendStatus(401).send('Unauthorized');
}
};
