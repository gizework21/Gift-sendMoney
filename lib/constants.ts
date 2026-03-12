export const DEFAULT_CURRENCY = "USD";
export const DEFAULT_LOCALE = "en-US";
export const SUPPORTED_CURRENCIES = ["USD", "ETB"] as const;

export type BankOption = {
  name: string;
  initials: string;
  color: string;
  logoUrl?: string;
};

export const BANKS: BankOption[] = [
  {
    name: "Amhara Bank",
    initials: "A",
    color: "#1f6bd6",
    logoUrl: "/ama.png",
  },
  {
    name: "Zemen Bank",
    initials: "Z",
    color: "#e43b4d",
    logoUrl: "/zemen.png",
  },
  {
    name: "Lion Bank",
    initials: "L",
    color: "#1b7c6f",
    logoUrl: "/anbesa.png",
  },
  {
    name: "Bank of Abyssinia",
    initials: "BA",
    color: "#f0a01b",
    logoUrl: "/abbys.png",
  },
  {
    name: "Awash International Bank",
    initials: "AI",
    color: "#f27b2a",
    logoUrl: "/zemen.png",
  },
  {
    name: "Oromia Bank",
    initials: "O",
    color: "#2fa84d",
    logoUrl: "/oromia.png",
  },
  {
    name: "Hijira Bank",
    initials: "H",
    color: "#2e57d6",
    logoUrl: "/oromia.png",
  },
  {
    name: "Berhan Bank",
    initials: "B",
    color: "#f2b21b",
    logoUrl: "/awash.png",
  },
  {
    name: "Bunna Bank",
    initials: "BN",
    color: "#7a2c27",
    logoUrl: "/awash.png",
  },
  {
    name: "Sinqe Bank",
    initials: "S",
    color: "#f2a11a",
    logoUrl: "/awash.png",
  },
  {
    name: "Gedda Bank",
    initials: "G",
    color: "#d62828",
    logoUrl: "/awash.png",
  },
  {
    name: "Hibret Bank",
    initials: "H",
    color: "#0a8ad1",
    logoUrl: "/awash.png",
  },
  {
    name: "Zamzam Bank",
    initials: "Z",
    color: "#0f7b79",
    logoUrl: "/awash.png",
  },
  {
    name: "Nib Bank",
    initials: "N",
    color: "#d28b19",
    logoUrl: "/awash.png",
  },
  {
    name: "Abay Bank",
    initials: "AB",
    color: "#0f8a5f",
    logoUrl: "/awash.png",
  },
];

export const COUNTRIES = [
  "Ethiopia",
  "United States",
  "United Kingdom",
  "Canada",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Switzerland",
  "Belgium",
  "Ireland",
  "Portugal",
  "Greece",
  "Poland",
  "Turkey",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "South Africa",
  "Kenya",
  "Nigeria",
  "Ghana",
  "Rwanda",
  "Uganda",
  "Tanzania",
  "India",
  "Pakistan",
  "Bangladesh",
  "Sri Lanka",
  "China",
  "Japan",
  "South Korea",
  "Australia",
  "New Zealand",
  "Brazil",
  "Mexico",
  "Argentina",
  "Chile",
];
