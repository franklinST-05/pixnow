import { z } from "zod";

export const CreateFinanceKeyValidator = z.object({
    key: z.string(),
    description: z.string(),
    userId: z.string().uuid(),
});

export type CreateFinanceKeyType = z.infer<typeof CreateFinanceKeyValidator>