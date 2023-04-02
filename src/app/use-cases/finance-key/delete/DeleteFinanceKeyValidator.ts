import { z } from "zod";

export const DeleteFinanceKeyValidator = z.object({
    id: z.string().uuid(),
});

export type DeleteFinanceKeyType = z.infer<typeof DeleteFinanceKeyValidator>