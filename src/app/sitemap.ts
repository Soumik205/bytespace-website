import type { MetadataRoute } from "next";

import { courseDetails } from "@/content/courses";
import { creators } from "@/content/creators";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteUrl}/courses`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
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
    ...creators.map((creator) => ({
      url: `${siteUrl}/creators/${creator.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
