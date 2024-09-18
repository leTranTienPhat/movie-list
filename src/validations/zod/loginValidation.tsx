"use client";

import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1).max(50),
  password: z.string().min(8).max(50),
});

type ILoginSchema = z.infer<typeof loginSchema>;

export { loginSchema, type ILoginSchema };
