import type { AuthUser } from "@/features/auth/auth.types";

export const MOCK_USERS: Array<AuthUser & { password: string }> = [
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
