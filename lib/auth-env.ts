const DEV_FALLBACK_SECRET = "dev-secret";

export const authSecret =
  process.env.AUTH_SECRET ??
  process.env.NEXTAUTH_SECRET ??
  (process.env.NODE_ENV === "development" ? DEV_FALLBACK_SECRET : undefined);

