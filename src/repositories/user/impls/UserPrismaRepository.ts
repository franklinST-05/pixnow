import { prismaClient } from "../../../settings/prisma/client";
import { UserType } from "../../_types";
import { IUserRepository } from "../IUserRepository";

class UserPrismaRepository implements IUserRepository {

    async create(user: UserType): Promise<UserType> {
        return await prismaClient.user.create({
            data: user,
        });
    }
    
    async findByEmail(email: string): Promise<UserType | null> {
        return await prismaClient.user.findUnique({
            where: { email }
        });
    }

}

export { UserPrismaRepository };