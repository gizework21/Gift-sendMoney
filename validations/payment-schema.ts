import * as yup from "yup";

export const paymentSchema = yup.object({
  method: yup.string().required("Payment method is required"),
  reference: yup.string().required("Reference is required"),
});
