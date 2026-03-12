import { NextResponse } from "next/server";

import { TRANSACTIONS } from "@/lib/transactions";

export async function GET() {
  return NextResponse.json({ data: TRANSACTIONS });
}
