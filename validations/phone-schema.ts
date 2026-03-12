import * as yup from "yup";

export const phoneSchema = yup
  .string()
  .matches(/^\+2519\d{8}$/, "Use +2519XXXXXXXX format")
  .required("Phone is required");
