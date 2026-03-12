import {
  Boxes,
  ClipboardList,
  Gift,
  HandCoins,
  LayoutGrid,
  Package,
} from "lucide-react";

import type { ActionCardData } from "@/features/admin/admin.types";

const iconClassName = "h-5 w-5";

export const ADMIN_ACTIONS: ActionCardData[] = [
  {
    title: "Transactions",
    description:
      "View a complete list of all transfer transactions from senders to recipients.",
    accent: "#0c6f19",
    background: "#e2f1f6",
    href: "/transactions",
    icon: <ClipboardList className={iconClassName} aria-hidden="true" />,
  },
  {
    title: "Products",
    description:
      "Create and manage product packages to be listed and displayed for customers.",
    accent: "#73b34c",
    background: "#d9f1c8",
    href: "#",
    icon: <LayoutGrid className={iconClassName} aria-hidden="true" />,
  },
  {
    title: "Orders",
    description:
      "View, and manage customer orders, including details and status updates.",
    accent: "#e79c4b",
    background: "#fdebd8",
    href: "#",
    icon: <Package className={iconClassName} aria-hidden="true" />,
  },
  {
    title: "Donations",
    description:
      "Add and manage all donation lists, and view contributions in one place.",
    accent: "#e27171",
    background: "#fde0df",
    href: "#",
    icon: <HandCoins className={iconClassName} aria-hidden="true" />,
  },
  {
    title: "Bundles",
    description:
      "Manage and oversee customer orders for Bundles, including their details and status updates.",
    accent: "#b9c23a",
    background: "#f4f7d6",
    href: "#",
    icon: <Boxes className={iconClassName} aria-hidden="true" />,
  },
  {
    title: "Gift Profiles",
    description:
      "View the list of created gift profiles and their customers to receive gifts.",
    accent: "#35a6a4",
    background: "#d7f5f4",
    href: "#",
    icon: <Gift className={iconClassName} aria-hidden="true" />,
  },
];
