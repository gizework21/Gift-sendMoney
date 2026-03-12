import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

    const isAuthRoute = pathname.startsWith("/login");
    const isApiAuthRoute = pathname.startsWith("/api/auth");
    const isStaticAsset =
      pathname.startsWith("/_next") || pathname === "/favicon.ico";
    const isSendMoneyRoute = pathname.startsWith("/send-money");
    const isDashboardRoute = pathname.startsWith("/dashboard");
    const isAdminRoute = pathname.startsWith("/admin");
    const isTransactionsRoute = pathname.startsWith("/transactions");

    if (isStaticAsset || isApiAuthRoute) {
      return NextResponse.next();
    }

    if (!token && (isDashboardRoute || isAdminRoute || isTransactionsRoute)) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (token && isAuthRoute) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true,
    },
  }
);

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
