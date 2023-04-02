import { FinanceKeyType } from "../../../repositories/_types";
import { IFinanceKeyRepository } from "../../../repositories/finance-key/IFinanceKeyRepository";
import { UpdateFinanceKeyType, UpdateFinanceKeyValidator } from "./UpdateFinanceKeyValidator";

class UpdateFinanceKeyService {
    private readonly repository;

    constructor(repository: IFinanceKeyRepository) {
        this.repository = repository;
    }

    async execute(financeKey: UpdateFinanceKeyType) {
        const validFinanceKey = UpdateFinanceKeyValidator.parse(financeKey);
        const updatedFinanceKey = await this.repository.update(validFinanceKey as FinanceKeyType);

        return {
            id: updatedFinanceKey.id,
            key: updatedFinanceKey.key,
            description: updatedFinanceKey.description,
        } as FinanceKeyType;
    }

    
}

export { UpdateFinanceKeyService };