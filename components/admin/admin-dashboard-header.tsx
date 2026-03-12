import * as React from "react";

import { UserMenu } from "@/components/admin/user-menu";
import Image from "next/image";

export type AdminDashboardHeaderProps = {
  userName: string;
};

export function AdminDashboardHeader({ userName }: AdminDashboardHeaderProps) {
  return (
    <header className="rounded-[36px] bg-[linear-gradient(135deg,#1e3f64_0%,#1d7b7a_48%,#1a9b6a_100%)] px-8 pb-10 pt-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
      <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/20 pb-6">
        <div className="flex items-center gap-3">
          <Image src={"/logo2.svg"} width={75} height={75} alt="logo icon" />
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
