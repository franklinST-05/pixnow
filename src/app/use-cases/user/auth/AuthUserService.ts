import { IUserRepository } from "../../../repositories/user/IUserRepository";
import { AuthUserType, AuthUserValidator } from "./AuthUserValidator";
import jwt from "jsonwebtoken";

class AuthUserService {
    private readonly repository;

    constructor(repository: IUserRepository) {
        this.repository = repository;
    }

    async execute(user: AuthUserType) {
        const validUser = AuthUserValidator.parse(user);
        
        const existsUser = await this.repository.findByEmail(validUser.email);
        if(!existsUser) throw new Error("User not found");

        if(validUser.password!== existsUser.password) throw new Error("Invalid password");

        const token = jwt.sign({
            email: existsUser.email,
            id: existsUser.id,
        }, process.env.JWT_SECRET!, {
            algorithm: "HS256",
            subject: existsUser.id,
            expiresIn: "30d",
        });

        return {
            token: token,
            firsName: existsUser.firstName,
            lastName: existsUser.lastName,
            email: existsUser.email,
        };
    }

    
}

export { AuthUserService };