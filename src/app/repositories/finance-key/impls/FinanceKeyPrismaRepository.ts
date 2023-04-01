import { prismaClient } from "../../../../settings/prisma/client";
import { FinanceKeyType } from "../../_types";
import { IFinanceKeyRepository } from "../IFinanceKeyRepository";

class FinanceKeyPrismaRepository implements IFinanceKeyRepository {

    async create(financeKey: FinanceKeyType): Promise<FinanceKeyType> {
        return await prismaClient.financeKey.create({
            data: financeKey,
        });
    }
    
    async update(financeKey: FinanceKeyType): Promise<FinanceKeyType> {
        return await prismaClient.financeKey.update({
            where:{ id: financeKey.id },
            data: {
                key: financeKey.key,
                description: financeKey.description,
            }
        });
    }
    
    async deleteById(id: string): Promise<FinanceKeyType> {
        return await prismaClient.financeKey. delete({
            where: { id }
        });
    }

    async findByUser(userId: string): Promise<FinanceKeyType[]> {
        return await prismaClient.financeKey.findMany({
            where: { userId },
        });
    }
    
    async findById(id: string): Promise<FinanceKeyType | null> {
        return await prismaClient.financeKey.findUnique({
            where: { id }
        });
    }

}

export { FinanceKeyPrismaRepository };