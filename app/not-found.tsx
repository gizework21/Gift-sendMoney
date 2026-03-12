import Link from "next/link";

export const componentType = "server";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f7f7] px-6 py-10 text-[#111]">
      <div className="w-full max-w-md rounded-3xl border border-[#e9e9e9] bg-white p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b9b9b]">
          404 Not Found
        </p>
        <h1 className="mt-3 text-2xl font-bold">Page not found</h1>
        <p className="mt-2 text-sm text-[#6d6d6d]">
          The page you are trying to reach doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-[color:var(--color-primary)] px-5 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Go to Home
          </Link>
          <Link
            href="/send-money"
            className="rounded-full border border-[#dfe7e2] px-5 py-2 text-sm font-semibold text-[#1c1c1c]"
          >
            Send Money
          </Link>
        </div>
      </div>
    </main>
  );
}
