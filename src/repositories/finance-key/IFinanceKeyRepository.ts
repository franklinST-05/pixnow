import { FinanceKeyType, UserType } from "../_types";

interface IFinanceKeyRepository {

    create(financeKey: FinanceKeyType): Promise<FinanceKeyType>
    update(financeKey: FinanceKeyType): Promise<FinanceKeyType>
    deleteById(id: FinanceKeyType["id"]): Promise<FinanceKeyType>
    findByUser(userId: UserType["id"]): Promise<FinanceKeyType[]>
    findById(id: FinanceKeyType["id"]): Promise<FinanceKeyType | null>
}

export { IFinanceKeyRepository };