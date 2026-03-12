import { NextResponse } from "next/server";

const transactions = Array.from({ length: 10 }).map((_, index) => {
  const id = `TX-${String(10420 + index).padStart(5, "0")}`;
  return {
    id,
    senderName: "Solomon Kebede",
    senderPhone: "+25190000000" + index,
    recipientName: "Samson Ketema",
    recipientPhone: "+25191100000" + index,
    amountUsd: 300,
    exchangeRate: 165,
    amountEtb: 49500,
    pickupBranch: "Addis Ababa",
    transactionStatus: "Completed",
    pickupStatus: "Delivered",
    transactionDateTime: "May 12, 2024 10:30 AM",
    details: "View",
  };
});

export async function GET() {
  return NextResponse.json({ data: transactions });
}
