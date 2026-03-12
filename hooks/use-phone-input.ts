import * as React from "react";

const normalize = (raw: string) => {
  const digits = raw.replace(/D/g, "");
  if (digits.startsWith("251")) return "+" + digits;
  if (digits.startsWith("0")) return "+251" + digits.slice(1);
  if (digits.startsWith("9")) return "+251" + digits;
  return raw;
};

export function usePhoneInput(initial = "") {
  const [value, setValue] = React.useState(initial);

  const onChange = (next: string) => setValue(normalize(next));

  return { value, setValue, onChange };
}
