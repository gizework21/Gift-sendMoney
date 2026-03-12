import { Button } from "@/components/ui/button";
import { InfoIcon } from "./icons";
import Image from "next/image";

export type SendMoneyCalculatorProps = {
  exchangeRate: number;
  giftRate: number;
  minUsdTransfer: number;
  usdAmount: number;
  etbAmount: number;
  totalAmount: number;
  presets: number[];
  onUsdChange: (value: string) => void;
  onPresetSelect: (amount: number) => void;
  onSendMoney: () => void;
};

function formatNumber(
  value: number,
  minimumFractionDigits = 0,
  maximumFractionDigits = 2,
) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(value);
}

export function SendMoneyCalculator({
  exchangeRate,
  minUsdTransfer,
  usdAmount,
  etbAmount,
  totalAmount,
  presets,
  onUsdChange,
  onPresetSelect,
  onSendMoney,
}: SendMoneyCalculatorProps) {
  return (
    <div className="overflow-hidden rounded-4xl border border-[#e6efe7] bg-[#FEFEFE]">
      <div className="flex items-center justify-between gap-4 text-black md:text-white bg-white md:bg-linear-to-b from-[#1D3557] to-[#008F5F] px-3 md:px-6 py-4  font-bold">
        <div className="flex items-center whitespace-nowrap gap-1 md:gap-3 text-sm font-bold sm:text-base">
          <Image
            src={"/dollarIcon.svg"}
            width={25}
            height={5}  
            alt="us icon"
            className="hidden md:flex"
          />
          <div className="flex md:hidden">💹</div>{" "}
          <span>1 USD = {formatNumber(exchangeRate, 2, 2)} ETB</span>
        </div>
        <div className="rounded-full px-2 md:px-4 py-2 text-sm whitespace-nowrap font-semibold text-white bg-linear-to-r from-[#00BA63] to-[#008579] md:bg-white">
          Gift: 50.00 ETB/ 1 USD
        </div>
      </div>

      <div className="space-y-5 p-3 md:p-5">
        <div className="rounded-[24px] bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-[#9a9a9a]">
            Enter Amount (USD)
          </p>
          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-1 text-[color:var(--color-primary)]">
              <span className="text-4xl font-bold">$</span>
              <input
                type="number"
                // min={0}
                step="1"
                inputMode="numeric"
                value={usdAmount}
                onChange={(event) => onUsdChange(event.target.value)}
                className="w-28 bg-transparent text-5xl font-extrabold outline-none"
                aria-label="Amount in USD"
              />
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#f2f2f2] px-4 py-2">
              <Image src={"/usIcon.svg"} width={25} height={5} alt="us icon" />
              <span className="text-sm font-semibold text-[#1c1c1c]">USD</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[color:var(--color-primary)]">
            <InfoIcon />
            Minimum Transfer Amount: ${minUsdTransfer}
          </div>
        </div>

        <div className="rounded-[24px] bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-[#9a9a9a]">
            Enter Amount (ETB)
          </p>
          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="text-[#b0b0b0]">
              <span className="text-4xl font-extrabold">
                {formatNumber(etbAmount, 2, 2)}
              </span>
              <span className="ml-2 text-3xl font-bold">ETB</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#f2f2f2] px-4 py-2">
              <Image src={"/ethIcon.svg"} width={25} height={5} alt="us icon" />
              <span className="text-sm font-semibold text-[#1c1c1c]">ETB</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[color:var(--color-primary)]">
            <InfoIcon />
            Minimum Transfer Amount:{" "}
            {formatNumber(exchangeRate * minUsdTransfer, 2, 2)} ETB
          </div>
        </div>

        <div className="rounded-[22px] border border-[#e7efe7] bg-white p-4 shadow-sm">
          <div className="rounded-[18px] bg-[radial-gradient(circle_at_1px_1px,rgba(15,122,72,0.08)_1px,transparent_0)] bg-[length:24px_24px] p-4">
            <p className="text-sm font-semibold text-[#2a2a2a]">
              Total (Amount + Gift)
            </p>
            <p className="mt-2 text-2xl font-extrabold text-[color:var(--color-primary)]">
              {formatNumber(totalAmount, 2, 2)}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {presets.slice(0, 4).map((amount) => {
            const isActive = amount === usdAmount;
            return (
              <button
                key={amount}
                type="button"
                className={`rounded-full px-4 py-1.5 text-sm font-semibold shadow-sm transition ${
                  isActive
                    ? "bg-(--color-primary) text-white"
                    : "border border-[#e6e6e6] bg-white text-[#1c1c1c]"
                }`}
                onClick={() => onPresetSelect(amount)}
              >
                ${amount.toLocaleString("en-US")}
              </button>
            );
          })}
        </div>

        <Button
          type="button"
          variant="primary"
          onClick={onSendMoney}
          className="mt-2 w-full py-4 text-sm font-semibold rounded-2xl"
        >
          Send Money
        </Button>

        <Image
          src={"/footerImg.svg"}
          width={397}
          height={140}
          alt="footer image"
          className="block md:hidden"
        />
      </div>
    </div>
  );
}
