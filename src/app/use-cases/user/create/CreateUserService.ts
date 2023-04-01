/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { UserType } from "../../../repositories/_types";
import { IUserRepository } from "../../../repositories/user/IUserRepository";
import { CreateUserType, CreateUserValidator } from "./CreateUserValidator";
import bcrypt from "bcryptjs";

class CreateUserService {
    private readonly repository;

    constructor(repository: IUserRepository) {
        this.repository = repository;
    }

    async execute(user: CreateUserType) {
        const validUser = CreateUserValidator.parse(user);
        const data = await this.repository.create({
            firstName: validUser.firstName,
            lastName: validUser.lastName,
            email: validUser.email,
            password: await bcrypt.hash(validUser.password, 8),
        } as UserType);

        return data;
    }

    
}

export { CreateUserService };