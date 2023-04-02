import { z } from "zod";

export const UpdateFinanceKeyValidator = z.object({
    id: z.string().uuid(),
    description: z.string(),
    key: z.string(),
});

export type UpdateFinanceKeyType = z.infer<typeof UpdateFinanceKeyValidator>