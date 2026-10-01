import type { MetadataRoute } from "next";

import { courseDetails } from "@/content/courses";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteUrl}/login`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/signup`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...courseDetails.flatMap((course) =>
      ["", "/lessons", "/reviews"].map((tab) => ({
        url: `${siteUrl}/courses/${course.slug}${tab}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: tab ? 0.6 : 0.8,
      })),
    ),
  ];
}
