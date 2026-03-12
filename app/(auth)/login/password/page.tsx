import { LoginFlow } from "@/features/auth/components/login-flow";

export default function Page() {
  return <LoginFlow initialStep="password" />;
}
