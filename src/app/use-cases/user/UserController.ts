import { Request, Response } from "express";
import { UserPrismaRepository } from "../../repositories/user/impls/UserPrismaRepository";
import { CreateUserService } from "./create/CreateUserService";

const repository = new UserPrismaRepository();

class UserController {
    async create(req: Request, res: Response) {
        const createUser = new CreateUserService(repository);
        const createdUser = await createUser.execute(req.body);

        return res.json(createdUser);
    }
}

export { UserController };