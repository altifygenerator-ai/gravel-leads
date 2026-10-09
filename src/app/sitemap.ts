import { areas } from "@/data/areas";

const baseUrl = "https://www.ozarkgravel.online";

export default function sitemap() {
  return [
    // Homepage
    {
      url: baseUrl,
            changeFrequency: "weekly" as const,
      priority: 1,
    },

    // Area pages
    ...areas.map((area) => ({
      url: `${baseUrl}/service-area/${area.slug}`,
            changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}