import * as yup from "yup";

export const paymentSchema = yup.object({
  cardNumber: yup
    .string()
    .required("Card number is required")
    .matches(/^\d{16}$/, "Card number must be 16 digits"),
  cvv: yup
    .string()
    .required("CVV is required")
    .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
  expiryMonth: yup.string().required("Expiry month is required"),
  expiryYear: yup.string().required("Expiry year is required"),
  country: yup.string().required("Country is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  postalCode: yup.string().required("Postal code is required"),
});
