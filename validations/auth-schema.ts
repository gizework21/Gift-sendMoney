import * as yup from "yup";

export const loginSchema = yup.object({
  phone: yup.string().required("Phone is required"),
  password: yup.string().required("Password is required"),
});

export const registerSchema = yup.object({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone is required"),
  password: yup.string().min(8).required("Password is required"),
});
