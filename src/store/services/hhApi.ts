import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { z } from 'zod'

const SalarySchema = z.object({
  from: z.number().nullable(),
  to: z.number().nullable(),
  currency: z.string().nullable(),
});

const VacancySchema = z.object({
  id: z.string(),
  name: z.string(),
  employer: z.object({ name: z.string().nullable() }).optional(),
  area: z.object({ name: z.string().nullable() }).optional(),
  salary: SalarySchema.nullable().optional(),
  published_at: z.string().optional(),
});

export type Vacancy = z.infer<typeof VacancySchema>;

interface SearchVacanciesResponse {
  items: Vacancy[];
  found: number;
  page: number;
  pages: number;
}

export const hhApi = createApi({
  reducerPath: 'hhApi',
  baseQuery: fetchBaseQuery({baseUrl: '/api/hh'}),
  endpoints: (build) => ({
    searchVacancies: build.query<SearchVacanciesResponse, Record<string, string | number>>({
      query: (params) => ({ url: 'vacancies', params }),
    }),
    getVacancyById: build.query<Vacancy, string>({
      query: (id) => `vacancies/${id}`,
    }),
  }),
})

export const { useSearchVacanciesQuery, useGetVacancyByIdQuery } = hhApi