export function getInitials(name: string, max = 2) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, max)
    .toUpperCase();
}
