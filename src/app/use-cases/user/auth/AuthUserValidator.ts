import { z } from "zod";

export const AuthUserValidator = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export type AuthUserType = z.infer<typeof AuthUserValidator>