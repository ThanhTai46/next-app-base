import { hash, compare } from "bcryptjs";

export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function verifyPassword(lPassword: string, password: string): Promise<boolean> {
  return await compare(lPassword, password);
}
