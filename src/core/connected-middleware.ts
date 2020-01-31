import jwt = require('express-jwt');

export const connected = () => {
    const secret = process.env.WILD_JWT_SECRET;
    if (!secret) {
        throw new Error('Secret is not defined');
    }
    // Accroche du middleware avec secret
    return jwt({ secret });
};
