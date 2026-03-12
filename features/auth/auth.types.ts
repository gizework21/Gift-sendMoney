export type AuthUser = {
  id: string;
  name?: string;
  phone?: string;
  email?: string;
  role?: "user" | "admin";
};

export type LoginStep = "phone" | "password";

export type LoginFormValues = {
  phone: string;
  password: string;
};

export type LoginFlowProps = {
  initialStep?: LoginStep;
};
