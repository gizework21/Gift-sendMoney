import { getServerSession } from "next-auth";

import { AdminDashboardHeader } from "@/components/admin/admin-dashboard-header";
import { DashboardActions } from "@/components/admin/dashboard-actions";
import { AppFooter } from "@/components/ui/app-footer";
import { authOptions } from "@/lib/auth";

export const componentType = "server";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const displayName = session?.user?.name ?? session?.user?.phone ?? "User";

  return (
    <main className="min-h-screen bg-[#f3f3f3]">
      <div className="w-full px-6 py-6">
        <AdminDashboardHeader userName={displayName} />

        <section className="px-8 py-10">
          <div>
            <h2 className="text-lg font-bold text-[#1c1c1c]">Action Menus</h2>
            <p className="mt-1 text-sm text-[#9b9b9b]">
              Choose from the listed menus and take action according to your
              preference.
            </p>
          </div>

          <DashboardActions />
        </section>

        <AppFooter className="pb-6 text-center text-xs text-[#b0b0b0]" />
      </div>
    </main>
  );
}
