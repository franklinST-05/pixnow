import { UserType } from "../_types";

interface IUserRepository {

    create(user: UserType): Promise<UserType>
    findByEmail(email: UserType["email"]): Promise<UserType | null>

}

export { IUserRepository };
