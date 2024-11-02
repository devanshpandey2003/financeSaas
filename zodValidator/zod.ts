import { z } from "zod"

export const accountSchema = z.object({
    id: z.string(),
    name:z.string()
});

export type AccountInput = z.infer<typeof accountSchema>