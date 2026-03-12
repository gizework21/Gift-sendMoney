import * as yup from "yup";

export const bankSchema = yup.object({
  bankId: yup.string().required("Bank is required"),
});
