import { IFinanceKeyRepository } from "../../../repositories/finance-key/IFinanceKeyRepository";
import { FindAllFinanceKeyType, FindAllFinanceKeyValidator } from "./FindAllFinanceKeyValidator";

class FindAllFinanceKeyService {
    private readonly repository;

    constructor(repository: IFinanceKeyRepository) {
        this.repository = repository;
    }

    async execute(financeKey: FindAllFinanceKeyType) {
        const validFinanceKey = FindAllFinanceKeyValidator.parse(financeKey);
        const listFinanceKey = await this.repository.findByUser(validFinanceKey.userId);

        return listFinanceKey;
    }

    
}

export { FindAllFinanceKeyService };