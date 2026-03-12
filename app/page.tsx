import { SendMoneyClient } from "@/components/send-money/send-money-client";
import { BANKS } from "@/lib/constants";
import { getExchangeRate } from "@/lib/exchange-rate";

export default async function Home() {
  const exchangeRate = await getExchangeRate();

  return (
    <main className="min-h-screen bg-linear-to-b from-[#EDFFED] to-white text-[#0b0b0b]">
      <SendMoneyClient initialBanks={BANKS} initialExchangeRate={exchangeRate} />
    </main>
  );
}
