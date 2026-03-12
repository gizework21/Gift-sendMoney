import type { DefaultSession, DefaultUser } from "next-auth";
import type { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      phone?: string;
      role?: "user" | "admin";
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id?: string;
    phone?: string;
    role?: "user" | "admin";
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id?: string;
    phone?: string;
    role?: "user" | "admin";
  }
}
