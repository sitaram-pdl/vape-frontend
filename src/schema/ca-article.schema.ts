import { z } from 'zod';

export const CAArticleSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  middleName: z.string().optional(),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().email('Invalid email address'),
  permanentAddress: z.string().min(1, 'Permanent Address is required'),
  currentAddress: z.string().optional(),
  dateOfBirth: z.string().min(1, 'Date of Birth is required'),
  gender: z.string().min(1, 'Gender is required'),
  nationality: z.string().min(1, 'Nationality is required'),
  phone: z.string().regex(/^\d{10}$/, {
    message: 'Invalid phone number. It must be exactly 10 digits.',
  }),
  language: z.array(z.string()).optional(),
  academic_qualification: z.object({
    slc_see: z.object({
      affiliation: z.string().min(1, 'Affiliation is required'),
      passed_year: z.string().min(1, 'Passed year is required'),
      percentage: z
        .string()
        .min(1, 'Percentage is required')
        .regex(/^\d+(\.\d{1,2})?$/, 'Invalid percentage format')
        .refine((val) => parseFloat(val) <= 100, 'Percentage cannot exceed 100')
        .transform((val) => parseFloat(val)),
    }),
    plus_two: z.object({
      affiliation: z.string().min(1, 'Affiliation is required'),
      passed_year: z.string().min(1, 'Passed year is required'),
      percentage: z
        .string()
        .min(1, 'Percentage is required')
        .regex(/^\d+(\.\d{1,2})?$/, 'Invalid percentage format')
        .refine((val) => parseFloat(val) <= 100, 'Percentage cannot exceed 100')
        .transform((val) => parseFloat(val)),
    }),
    bachelor: z
      .object({
        affiliation: z.string().optional(),
        passed_year: z.string().optional(),
        percentage: z
          .string()
          .optional()
          .refine(
            (val) => !val || /^\d+(\.\d{1,2})?$/.test(val),
            'Invalid percentage format',
          )
          .refine(
            (val) => !val || parseFloat(val) <= 100,
            'Percentage cannot exceed 100',
          ),
      })
      .optional(),
    masters: z.object({
      affiliation: z.string().optional(),
      passed_year: z.string().optional(),
      percentage: z.string().optional(),
    }),
  }),
  resume: z
    .any()
    .refine(
      (file) => file && file.type === 'application/pdf' && file.size > 0,
      {
        message: 'Resume must be a PDF file and cannot be empty',
      },
    ),
  professional_qualification: z.object({
    cap_one: z.object({
      passed_year: z.string().min(1, 'Passed year is required'),
      percentage: z
        .string()
        .min(1, 'Percentage is required')
        .regex(/^\d+(\.\d{1,2})?$/, 'Invalid percentage format')
        .refine((val) => parseFloat(val) <= 100, 'Percentage cannot exceed 100')
        .transform((val) => parseFloat(val)),
      attempt: z
        .string()
        .min(1, 'Minimum attempt should be 1')
        .transform((val) => parseInt(val, 10))
        .refine(
          (val) => !isNaN(val) && val > 0,
          'Attempt must be a positive number',
        )
        .refine((val) => val <= 100, 'Attempt cannot exceed 100'),
    }),
    cap_two: z.object({
      passed_year: z.string().min(1, 'Passed year is required'),
      percentage: z
        .string()
        .min(1, 'Percentage is required')
        .regex(/^\d+(\.\d{1,2})?$/, 'Invalid percentage format')
        .refine((val) => parseFloat(val) <= 100, 'Percentage cannot exceed 100')
        .transform((val) => parseFloat(val)),
      attempt: z
        .string()
        .min(1, 'Minimum attempt should be 1')
        .transform((val) => parseInt(val, 10))
        .refine(
          (val) => !isNaN(val) && val > 0,
          'Attempt must be a positive number',
        )
        .refine((val) => val <= 100, 'Attempt cannot exceed 100'),
    }),
  }),
});
