import * as yup from "yup";

import type { ReceiverInfo } from "@/features/send-money/send-money.types";

export const receiverInfoSchema: yup.ObjectSchema<ReceiverInfo> = yup.object({
  receiverName: yup.string().required("Receiver name is required"),
  senderName: yup.string().optional().default(""),
  receiverPhone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[+0-9\s-]{7,15}$/, "Enter a valid phone number"),
  dropOffLocation: yup.string().required("Drop off location is required"),
  contactPreference: yup
    .mixed<"email" | "phone">()
    .oneOf(["email", "phone"])
    .required(),
  email: yup
    .string()
    .email("Enter a valid email")
    .when("contactPreference", {
      is: "email",
      then: (schema) => schema.required("Email is required"),
      otherwise: (schema) => schema.optional(),
    })
    .default(""),
  note: yup.string().optional().default(""),
  agree: yup
    .boolean()
    .oneOf([true], "You must agree to continue")
    .required("You must agree to continue"),
});
