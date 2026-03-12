import * as React from "react";
import { Bell } from "lucide-react";

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
            <Bell className="h-5 w-5" aria-hidden="true" />
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
