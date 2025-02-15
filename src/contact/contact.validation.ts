import { ZodType, z } from "zod";

export class ContactValidation {
    static readonly CREATE: ZodType = z.object({
        first_name: z.string().min(1).max(100),
        last_name: z.string().max(100).optional(),
        email: z.string().max(100).email().optional(),
        phone: z.string().max(20).optional(),
    })

    static readonly UPDATE: ZodType = z.object({
        id: z.number().positive(),
        first_name: z.string().min(1).max(100),
        last_name: z.string().max(100).optional(),
        email: z.string().max(100).email().optional(),
        phone: z.string().max(20).optional(),
    })

    static readonly SEARCH: ZodType = z.object({
        name: z.string().max(100).optional(),
        email: z.string().max(100).optional(),
        phone: z.string().max(20).optional(),
        page: z.number().positive().optional().default(1),
        size: z.number().positive().optional().default(10),
    })
} 