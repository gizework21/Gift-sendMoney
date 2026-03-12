import { getExchangeRate } from "@/lib/exchange-rate";

export async function GET() {
  const data = await getExchangeRate();
  return Response.json({ ok: true, data });
}
