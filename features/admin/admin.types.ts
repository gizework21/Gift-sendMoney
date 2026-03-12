import type { ReactNode } from "react";

export type ActionCardData = {
  title: string;
  description: string;
  accent: string;
  background: string;
  href: string;
  icon: ReactNode;
};

export type ActionCardProps = ActionCardData;

export type AdminDashboardHeaderProps = {
  userName: string;
};

export type UserMenuProps = {
  name: string;
  subtitle: string;
  theme?: "light" | "dark";
};

export type PendingAction = {
  title: string;
  description: string;
};
