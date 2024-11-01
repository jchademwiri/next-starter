import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import Nav from "@/components/NavigationMenu/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = "https://www.playhousemedia.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Official Website",
  description: "Official Website",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Playhouse Media Group - Web Design and Development Services",
    siteName: "Playhouse Media Group",
    description:
      "Transform your online presence with Playhouse Media Group. We create captivating, user-friendly websites to boost brand visibility and drive organic traffic. Experts in web design, development, and SEO services.",
    url: siteUrl,
    locale: "en_US",
    type: "website",
    images: "/opengraph-image.png",
  },
  category: "technology",
  twitter: {
    title: "Playhouse Media Group - Web Design and Development Services",
    description:
      "Transform your online presence with Playhouse Media Group. We create captivating, user-friendly websites to boost brand visibility and drive organic traffic. Experts in web design, development, and SEO services.",
    creator: "@jchademwiri",
    creatorId: "1467726470533754880",
    siteId: "1467726470533754880",
    card: "summary_large_image",
    images: "/twitter-image.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          {/* <Footer /> */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
