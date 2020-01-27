import { NextFunction, Request, Response } from 'express';
import { UserService } from './../services/user.service';
// Ce middleware traduit remplace valeur de JSON du JWT par le getById du user en base de données
// Cette étape permet en particulier de récupérer le rôle actualisé du User
// Le résultat du JWT récupère simplement le payload à savoir : id, usernamen email
export const attachUser = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const userService = new UserService();
        const user = (req as any).user;
        (req as any).user = await userService.getById(user.id);
        if (!(req as any).user) {
            return res.status(401).end('User not found');
        } else {
            return next();
        }
    };
};
