export type UserType = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export type FinanceKeyType = {
    id: string;
    key: string;
    description: string;
    userId: string;
}