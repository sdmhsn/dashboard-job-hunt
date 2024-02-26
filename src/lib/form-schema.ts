'use client';

import { JOBTYPES } from '@/constants';
import { z } from 'zod';

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: 'Job Title is required' })
    .min(3, { message: 'Job Title must be at least 3 characters' }),
  jobType: z.enum(JOBTYPES, {
    required_error: 'You need to select a job type',
  }),
  salaryFrom: z.string({ required_error: 'Salary Form is required' }),
  salaryTo: z.string({ required_error: 'Salary To is required' }),
  categoryId: z.string({ required_error: 'You need to select a category' }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: 'Required Skill must be at least 1 skill' }),
  jobDescription: z
    .string({ required_error: 'Job Description is required' })
    .min(10, { message: 'Job Description must be at least 10 characters' }),
  responsibility: z
    .string({ required_error: 'Responsibility is required' })
    .min(10, { message: 'Responsibility must be at least 10 characters' }),
  whoYouAre: z
    .string({ required_error: 'Who you are is required' })
    .min(10, { message: 'Who you are must be at least 10 characters' }),
  niceToHave: z
    .string({ required_error: 'Nice to have is required' })
    .min(10, { message: 'Nice to have must be at least 10 characters' }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: 'Benefits must be at least 1 benefit' }),
});

export const overViewFormSchema = z.object({
  image: z
    .any()
    .refine((item: any) => item?.name, { message: 'Image is required' }),
  name: z.string({ required_error: 'Name is required' }),
  website: z.string({ required_error: 'Website is required' }),
  location: z.string({ required_error: 'Location is required' }),
  employee: z.string({ required_error: 'Employee is required' }),
  industry: z.string({ required_error: 'Industry is required' }),
  dateFounded: z.string({ required_error: 'Date founded is required' }),
  techStack: z
    .string()
    .array()
    .nonempty({ message: 'Tech stack must be at least 1 data' }),
  description: z.string({ required_error: 'Description is required' }),
});
