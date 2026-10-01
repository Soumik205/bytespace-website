import type { Metadata } from "next";

// Vercel sets VERCEL_PROJECT_PRODUCTION_URL on every deployment, so links and
// social images always point at the production domain.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const siteName = "ByteSpace";

export const siteTitle = "Get Access to Hundreds Courses Available";

export const siteDescription =
  "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.";

// Next.js replaces openGraph and twitter as a whole when a page sets them, so
// every page builds its social metadata from here to keep the shared image.
export function socialMetadata(title: string, path: string): Metadata {
  return {
    alternates: { canonical: path },
    openGraph: {
      title,
      description: siteDescription,
      url: path,
      siteName,
      locale: "en_US",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: siteDescription,
      images: ["/og.png"],
    },
  };
}
