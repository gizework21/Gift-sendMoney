import * as React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen" aria-label="(User) layout">
      {children}
    </section>
  );
}
