import { BANKS } from "@/features/send-money/send-money.constants";

export async function GET() {
  return Response.json({ ok: true, data: BANKS });
}
