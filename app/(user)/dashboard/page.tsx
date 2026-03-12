import { getServerSession } from "next-auth";

import { ActionCard } from "@/components/admin/action-card";
import { AdminDashboardHeader } from "@/components/admin/admin-dashboard-header";
import { AppFooter } from "@/components/ui/app-footer";
import { adminActions } from "@/data/admin-actions";
import { authOptions } from "@/lib/auth";

export const componentType = "server";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const displayName = session?.user?.name ?? "Solomon Kebede";

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

          <div className="mt-6 grid gap-6 lg:grid-cols-4">
            {adminActions.slice(0, 4).map((card) => (
              <ActionCard
                key={card.title}
                title={card.title}
                description={card.description}
                accent={card.accent}
                background={card.background}
                href={card.href}
                icon={card.icon}
              />
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {adminActions.slice(4).map((card) => (
              <ActionCard
                key={card.title}
                title={card.title}
                description={card.description}
                accent={card.accent}
                background={card.background}
                href={card.href}
                icon={card.icon}
              />
            ))}
          </div>
        </section>

        <AppFooter className="pb-6 text-center text-xs text-[#b0b0b0]" />
      </div>
    </main>
  );
}
