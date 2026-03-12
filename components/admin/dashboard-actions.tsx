"use client";

import { useState } from "react";
import Link from "next/link";

import { ActionTile } from "@/components/admin/dashboard-actions-components";
import {
  ComingSoonModal,
  type PendingAction,
} from "@/components/admin/modals/coming-soon-modal";
import { adminActions } from "@/data/admin-actions";

export const componentType = "client";

export function DashboardActions() {
  const [pendingAction, setPendingAction] = useState<PendingAction | null>(
    null,
  );

  return (
    <>
      <div className="mt-6 grid gap-6 lg:grid-cols-4">
        {adminActions.slice(0, 4).map((action) =>
          action.href === "/transactions" ? (
            <Link key={action.title} href={action.href}>
              <ActionTile
                title={action.title}
                description={action.description}
                accent={action.accent}
                background={action.background}
                icon={action.icon}
              />
            </Link>
          ) : (
            <button
              key={action.title}
              type="button"
              onClick={() =>
                setPendingAction({
                  title: action.title,
                  description:
                    "This feature is not available yet. We're working hard to bring it to you soon - stay tuned for updates!",
                })
              }
              className="text-left"
            >
              <ActionTile
                title={action.title}
                description={action.description}
                accent={action.accent}
                background={action.background}
                icon={action.icon}
              />
            </button>
          ),
        )}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {adminActions.slice(4).map((action) => (
          <button
            key={action.title}
            type="button"
            onClick={() =>
              setPendingAction({
                title: action.title,
                description:
                  "This feature is not available yet. We're working hard to bring it to you soon - stay tuned for updates!",
              })
            }
            className="text-left"
          >
            <ActionTile
              title={action.title}
              description={action.description}
              accent={action.accent}
              background={action.background}
              icon={action.icon}
            />
          </button>
        ))}
      </div>

      <ComingSoonModal
        action={pendingAction}
        open={pendingAction !== null}
        onClose={() => setPendingAction(null)}
      />
    </>
  );
}
