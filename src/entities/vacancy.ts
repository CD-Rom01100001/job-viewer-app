import { z } from 'zod';

export const Salary = z.object({
  from: z.number().nullable(),
  to: z.number().nullable(),
  currency: z.string().nullable(),
});

export const Vacancy = z.object({
  id: z.string(),
  name: z.string(),
  employer: z.object({ name: z.string().nullable() }).optional(),
  area: z.object({ name: z.string().nullable() }).optional(),
  salary: Salary.nullable().optional(),
  published_at: z.string().optional(),
});

export type Vacancy = z.infer<typeof Vacancy>;
