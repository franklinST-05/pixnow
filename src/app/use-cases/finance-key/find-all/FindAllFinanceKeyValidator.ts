import { z } from "zod";

export const FindAllFinanceKeyValidator = z.object({
    userId: z.string().uuid(),
});

export type FindAllFinanceKeyType = z.infer<typeof FindAllFinanceKeyValidator>