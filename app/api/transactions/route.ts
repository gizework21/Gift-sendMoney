import { NextResponse } from "next/server";

import { TRANSACTIONS } from "@/features/transactions/transactions.constants";

export async function GET() {
  return NextResponse.json({ data: TRANSACTIONS });
}
