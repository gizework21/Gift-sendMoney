import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export type AuthUser = {
  id: string;
  name?: string;
  phone?: string;
  email?: string;
  role?: "user" | "admin";
};

const MOCK_USERS: Array<AuthUser & { password: string }> = [
  {
    id: "user_1",
    name: "Admin User",
    email: "demo@gift.et",
    phone: "0929272814",
    role: "admin",
    password: "12345678",
  },
  {
    id: "admin_1",
    name: "Admin User",
    email: "admin@gift.et",
    phone: "+251900000002",
    role: "admin",
    password: "admin123",
  },
];

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Phone", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const phone = credentials?.phone?.trim() ?? "";
        const password = credentials?.password ?? "";

        const user = MOCK_USERS.find(
          (item) =>
            item.phone?.replace(/\s+/g, "") === phone.replace(/\s+/g, "") &&
            item.password === password,
        );

        if (!user) return null;

        const { password: _password, ...safeUser } = user;
        return safeUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const authUser = user as AuthUser;
        token.id = authUser.id;
        token.name = authUser.name ?? token.name;
        token.email = authUser.email ?? token.email;
        token.phone = authUser.phone;
        token.role = authUser.role ?? "user";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string | undefined;
        session.user.name = token.name ?? session.user.name;
        session.user.email = token.email ?? session.user.email;
        session.user.phone = token.phone as string | undefined;
        session.user.role = (token.role as AuthUser["role"]) ?? "user";
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET ?? "dev-secret",
};

export function isAuthenticated(user: AuthUser | null) {
  return Boolean(user?.id);
}
