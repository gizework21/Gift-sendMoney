import * as React from "react";

import { UserMenu } from "@/components/admin/user-menu";

export type AdminDashboardHeaderProps = {
  userName: string;
};

export function AdminDashboardHeader({ userName }: AdminDashboardHeaderProps) {
  return (
    <header className="rounded-[36px] bg-[linear-gradient(135deg,#1e3f64_0%,#1d7b7a_48%,#1a9b6a_100%)] px-8 pb-10 pt-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
      <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/20 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
            <svg viewBox="0 0 64 64" aria-hidden="true" className="h-7 w-7">
              <path
                d="M32 9c10.8 6.7 18.5 16.2 23 28.6-8.3 5.6-16.4 8.4-24.3 8.4-7.8 0-15.8-2.8-24-8.3C13.2 25.5 20.9 15.8 32 9Z"
                fill="#ffffff"
              />
              <path
                d="M32 15.5c-2.6 2.9-4.2 6.7-4.7 11.4l4.7 6.1 4.9-6.2c-.5-4.5-2.2-8.2-4.9-11.3Z"
                fill="#1a9b6a"
              />
            </svg>
          </div>
          <p className="max-w-xl text-sm font-semibold leading-relaxed text-white/90">
            Gift Ethiopia Helps You Easily Showcase, Manage, And Sell Your
            Products While Offering Seamless And Secure Payment Options For Your
            Customers.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M12 3a5 5 0 0 1 5 5v2.5c0 .9.3 1.7.9 2.4l1.1 1.3V16H5v-1.8l1.1-1.3c.6-.7.9-1.5.9-2.4V8a5 5 0 0 1 5-5Zm0 18a2.5 2.5 0 0 0 2.4-2H9.6A2.5 2.5 0 0 0 12 21Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <UserMenu
            name={userName}
            subtitle="Gift Ethiopias Admin"
            theme="dark"
          />
        </div>
      </div>

      <div className="pt-6">
        <h1 className="text-xl font-bold">
          👋 Welcome to Gift Ethiopia Admin Portal
        </h1>
        <p className="mt-2 text-sm text-white/80">
          Streamline your event management, track performance, and keep
          everything running smoothly.
        </p>
      </div>
    </header>
  );
}
