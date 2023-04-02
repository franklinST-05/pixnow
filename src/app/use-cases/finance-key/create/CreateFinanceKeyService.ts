import { FinanceKeyType } from "../../../repositories/_types";
import { IFinanceKeyRepository } from "../../../repositories/finance-key/IFinanceKeyRepository";
import { CreateFinanceKeyType, CreateFinanceKeyValidator } from "./CreateFinanceKeyValidator";

class CreateFinanceKeyService {
    private readonly repository;

    constructor(repository: IFinanceKeyRepository) {
        this.repository = repository;
    }

    async execute(financeKey: CreateFinanceKeyType) {
        const validFinanceKey = CreateFinanceKeyValidator.parse(financeKey);
        const createdFinanceKey = await this.repository.create(validFinanceKey as FinanceKeyType);

        return {
            id: createdFinanceKey.id,
            key: createdFinanceKey.key,
            description: createdFinanceKey.description,
        } as FinanceKeyType;
    }

    
}

export { CreateFinanceKeyService };