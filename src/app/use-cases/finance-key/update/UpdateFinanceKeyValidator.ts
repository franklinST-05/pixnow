import { z } from "zod";

export const UpdateFinanceKeyValidator = z.object({
    id: z.string().uuid(),
    description: z.string().optional(),
    key: z.string().optional(),
});

export type UpdateFinanceKeyType = z.infer<typeof UpdateFinanceKeyValidator>