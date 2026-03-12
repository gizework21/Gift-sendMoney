import * as yup from "yup";

export const receiverSchema = yup.object({
  fullName: yup.string().required("Full name is required"),
  phone: yup.string().required("Phone is required"),
  bankId: yup.string().required("Bank is required"),
  accountNumber: yup.string().required("Account number is required"),
});
