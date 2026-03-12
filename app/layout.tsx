import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import localFont from "next/font/local";

export const componentType = "server";

const outfit = localFont({
  src: [
    {
      path: "../public/fonts/Outfit/Outfit-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit/Outfit-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit/Outfit-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit/Outfit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit/Outfit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit/Outfit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit/Outfit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit/Outfit-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit/Outfit-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "GiftSend",
    template: "%s | GiftSend",
  },
  description:
    "GiftSend is a secure and fast platform to send money and digital gifts to friends and family anywhere in the world.",
  keywords: [
    "GiftSend",
    "send money",
    "money transfer",
    "digital gifts",
    "online payments",
    "remittance",
  ],
  authors: [{ name: "GiftSend Team" }],
  creator: "GiftSend",
  applicationName: "GiftSend",
  openGraph: {
    title: "GiftSend – Send Money & Gifts Easily",
    description:
      "Send money and digital gifts instantly with GiftSend. Fast, secure, and simple.",
    url: "https://giftsend.com",
    siteName: "GiftSend",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GiftSend – Send Money & Gifts Easily",
    description:
      "Send money and digital gifts instantly with GiftSend. Fast, secure, and simple.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased font-outfit">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
