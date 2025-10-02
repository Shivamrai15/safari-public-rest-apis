import * as z from 'zod';

export const AIShuffleSchema = z.object({
    not: z.array(z.string()),
    limit: z.number(),
    recommendationId: z.string(),
});