import { Request, Response } from "express";
import { CreateFinanceKeyService } from "./create/CreateFinanceKeyService";
import { FinanceKeyPrismaRepository } from "../../repositories/finance-key/impls/FinanceKeyPrismaRepository";
import { DeleteFinanceKeyService } from "./delete/DeleteFinanceKeyService";

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

    async delete(req: Request, res:Response) {
        const deleteFinanceKey = new DeleteFinanceKeyService(repository);
        const data = await deleteFinanceKey.execute(req.body);

        return res.status(200).json(data);
    }
}

export { FinanceKeyController };