// Vercel sets VERCEL_PROJECT_PRODUCTION_URL on every deployment, so links and
// social images always point at the production domain.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const siteName = "ByteSpace";

export const siteTitle = "Get Access to Hundreds Courses Available";

export const siteDescription =
  "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.";
