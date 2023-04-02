import { Request, Response } from "express";
import { CreateFinanceKeyService } from "./create/CreateFinanceKeyService";
import { FinanceKeyPrismaRepository } from "../../repositories/finance-key/impls/FinanceKeyPrismaRepository";

const repository  = new FinanceKeyPrismaRepository();

class FinanceKeyController {
    
    async create(req: Request, res: Response) {
        const createFinanceKey = new CreateFinanceKeyService(repository);
        const data = await createFinanceKey.execute({
            key: req.body.key,
            description: req.body.description,
            userId: req.body.userId,
        });

        return res.status(201).json(data);
    }
}

export { FinanceKeyController };