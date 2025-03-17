import { z } from "zod";
export const authSchema = z.object({
    email: z.string().min(2, {
      message: "email must be at least 2 characters.",
    }),
    password: z.string().min(6, {
      message: "password must be at least 6 characters.",
    }),
  })