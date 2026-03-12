import * as React from "react";

export const componentType = "server";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen" aria-label="(Auth) layout">
      {children}
    </section>
  );
}
