import { z } from "zod";


export const SignupValidation = z.object({
    name: z.string().min(2, {message:"Doit contenir 2 caractères minimum"}),
    username: z.string().min(2, {message:"Doit contenir entre 2 et 25 caractères"}).max(25),
    email: z.string().email({message:"Email non valide"}),
    password: z.string().min(8, {message:"Le mot de passe doit contenir minimum 8 caractères"})
  });