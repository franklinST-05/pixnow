import { UserType } from "../../../repositories/_types";
import { IUserRepository } from "../../../repositories/user/IUserRepository";
import { CreateUserType, CreateUserValidator } from "./CreateUserValidator";

class CreateUserService {
    private readonly repository;

    constructor(repository: IUserRepository) {
        this.repository = repository;
    }

    async execute(user: CreateUserType) {
        const validUser = CreateUserValidator.parse(user);
        const data = await this.repository.create(validUser as UserType);

        return data;
    }

    
}

export { CreateUserService };