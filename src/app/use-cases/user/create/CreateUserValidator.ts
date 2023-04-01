import { z } from "zod";

export const CreateUserValidator = z.object({
    firstName: z.string().trim().min(3),
    lastName: z.string().trim().min(3),
    email: z.string().email(),
    password: z.string().min(6),
});

export type CreateUserType = z.infer<typeof CreateUserValidator>