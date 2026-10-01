import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700" },
  ],
});

const clashDisplay = localFont({
  variable: "--font-clash-display",
  src: "./fonts/ClashDisplay-Bold.woff2",
  weight: "700",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const title = "ByteSpace";
const description =
  "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title: "Get Access to Hundreds Courses Available",
    description,
    siteName: title,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ByteSpace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Access to Hundreds Courses Available",
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#003be2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${satoshi.variable} ${clashDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
