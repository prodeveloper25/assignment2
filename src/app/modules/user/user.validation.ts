import { z } from 'zod';

const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const fullNameSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const userValidationSchema = z.object({
  id: z.string(),
  userId: z.number(),
  username: z.string(),
  fullName: fullNameSchema,
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.tuple([z.string(), z.string()]),
  address: addressSchema,
});

export default userValidationSchema;
