import type { ReactNode } from "react";

export type ActionCardData = {
  title: string;
  description: string;
  accent: string;
  background: string;
  href: string;
  icon: ReactNode;
};

export const adminActions: ActionCardData[] = [
  {
    title: "Transactions",
    description:
      "View a complete list of all transfer transactions from senders to recipients.",
    accent: "#0c6f19",
    background: "#e2f1f6",
    href: "/transactions",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm2 4h8v2H8V8Zm0 4h8v2H8v-2Zm0 4h5v2H8v-2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Products",
    description:
      "Create and manage product packages to be listed and displayed for customers.",
    accent: "#73b34c",
    background: "#d9f1c8",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M5 4h5a2 2 0 0 1 2 2v5H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 10h5v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm9-8h5a2 2 0 0 1 2 2v5h-5a2 2 0 0 1-2-2V6Zm0 8h5v5a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Orders",
    description:
      "View, and manage customer orders, including details and status updates.",
    accent: "#e79c4b",
    background: "#fdebd8",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M7 7h10l-1 11H8L7 7Zm2-3h6l1 3H8l1-3Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Donations",
    description:
      "Add and manage all donation lists, and view contributions in one place.",
    accent: "#e27171",
    background: "#fde0df",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 5a4 4 0 0 1 4 4v4H8V9a4 4 0 0 1 4-4Zm0 10c3.3 0 6 1.3 6 3v1H6v-1c0-1.7 2.7-3 6-3Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Bundles",
    description:
      "Manage and oversee customer orders for Bundles, including their details and status updates.",
    accent: "#b9c23a",
    background: "#f4f7d6",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M4 7 12 3l8 4-8 4-8-4Zm0 4 8 4 8-4v6l-8 4-8-4v-6Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Gift Profiles",
    description:
      "View the list of created gift profiles and their customers to receive gifts.",
    accent: "#35a6a4",
    background: "#d7f5f4",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 5a4 4 0 0 1 4 4v1H8V9a4 4 0 0 1 4-4Zm0 8c3 0 6 1.4 6 3.2V19H6v-2.8c0-1.8 3-3.2 6-3.2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];
