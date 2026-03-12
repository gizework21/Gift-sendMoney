import * as React from "react";

import { cn } from "@/lib/utils";
import { Select } from "@/components/ui/select";
import type { MonthSelectProps, YearSelectProps } from "@/types/ui";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function MonthSelect({
  className,
  startAt = 1,
  ...props
}: MonthSelectProps) {
  return (
    <Select
      className={cn(
        "h-11 rounded-2xl border-[#eef1f0] bg-white/90 text-sm",
        className,
      )}
      {...props}
    >
      <option value="">Month</option>
      {MONTHS.map((label, index) => (
        <option key={label} value={index + startAt}>
          {label}
        </option>
      ))}
    </Select>
  );
}

export function YearSelect({
  className,
  startYear = new Date().getFullYear(),
  endYear = new Date().getFullYear() + 10,
  ...props
}: YearSelectProps) {
  const years = [] as number[];
  for (let year = startYear; year <= endYear; year += 1) {
    years.push(year);
  }

  return (
    <Select
      className={cn(
        "h-11 rounded-2xl border-[#eef1f0] bg-white/90 text-sm",
        className,
      )}
      {...props}
    >
      <option value="">Year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </Select>
  );
}
