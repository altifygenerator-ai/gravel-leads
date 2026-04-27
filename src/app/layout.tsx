import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/data/site";
import { Analytics } from "@vercel/analytics/react";

const siteUrl = "https://www.ozarkgravel.online";
const siteName = siteData.businessName;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteData.seoTitle,
    template: `%s | ${siteName}`,
  },

  description: siteData.seoDescription,

  openGraph: {
    title: siteData.seoTitle,
    description: siteData.seoDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: `${siteName} in ${siteData.location}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteData.seoTitle,
    description: siteData.seoDescription,
    images: ["/images/og-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}