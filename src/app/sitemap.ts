import { areas } from "@/data/areas";

const baseUrl = "https://ozarkgravel.online";

export default function sitemap() {
  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },

    // Area pages
    ...areas.map((area) => ({
      url: `${baseUrl}/service-area/${area.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}