import { FinanceKeyType } from "../../../repositories/_types";
import { IFinanceKeyRepository } from "../../../repositories/finance-key/IFinanceKeyRepository";
import { DeleteFinanceKeyType, DeleteFinanceKeyValidator } from "./DeleteFinanceKeyValidator";

class DeleteFinanceKeyService {
    private readonly repository;

    constructor(repository: IFinanceKeyRepository) {
        this.repository = repository;
    }

    async execute(financeKey: DeleteFinanceKeyType) {
        const validFinanceKey = DeleteFinanceKeyValidator.parse(financeKey);
        const deletedFinanceKey = await this.repository.deleteById(validFinanceKey.id);

        return {
            id: deletedFinanceKey.id,
            key: deletedFinanceKey.key,
            description: deletedFinanceKey.description,
        } as FinanceKeyType;
    }

    
}

export { DeleteFinanceKeyService };
