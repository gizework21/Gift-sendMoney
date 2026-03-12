import { LoginFlow } from "@/components/auth/login-flow";

export const componentType = "server";

export default function Page() {
  return <LoginFlow initialStep="phone" />;
}
