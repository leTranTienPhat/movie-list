"use client";

import { z } from "zod";

const signUpSchema = z.object({
  email: z.string().min(1).max(50),
  password: z.string().min(8).max(50),
});

type ISignUpSchema = z.infer<typeof signUpSchema>;

export { signUpSchema, type ISignUpSchema };
