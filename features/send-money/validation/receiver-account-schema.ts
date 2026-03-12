import * as yup from "yup";

import type { ReceiverAccount } from "@/features/send-money/send-money.types";

export const receiverAccountSchema: yup.ObjectSchema<ReceiverAccount> = yup.object({
  accountNumber: yup
    .string()
    .required("Account number is required")
    .matches(/^[0-9]{6,20}$/, "Enter a valid account number"),
  senderName: yup.string().optional().default(""),
});
