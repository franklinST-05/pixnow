declare namespace Express {
    export interface Request {
        auth_user: {
            id: string;
            email: string;
        }
    }
}