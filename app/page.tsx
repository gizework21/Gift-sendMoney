import { SendMoneyClient } from "@/components/send-money/send-money-client";

const EXCHANGE_RATE = 165;
const GIFT_RATE = 50;
const MIN_USD_TRANSFER = 5;
const PRESET_AMOUNTS = [10, 25, 50, 100, 200, 500, 1000];

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#EDFFED] to-white text-[#0b0b0b]">
      <SendMoneyClient
        exchangeRate={EXCHANGE_RATE}
        giftRate={GIFT_RATE}
        minUsdTransfer={MIN_USD_TRANSFER}
        presetAmounts={PRESET_AMOUNTS}
      />
    </main>
  );
}
