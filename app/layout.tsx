import type { Metadata } from "next";
import LocalFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Metrics from "./metrics";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bugatti PvP",
    template: "Bugatti PvP | %s",
  },
  description:
    "Explore our public Origins SMP server, with unique powers and endless adventure!",
  openGraph: {
    title: "Bugatti PvP",
    description:
      "Explore our public Origins SMP server, with unique powers and endless adventure!",
    url: "https://www.bugattipvp.net",
    siteName: "bugattipvp.net",
    images: [
      {
        url: "https://github.com/WarFiN123/docs-bugattipvp/blob/main/app/opengraph-image.png?raw=true",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Bugatti PvP",
    card: "summary_large_image",
    description:
      "Explore our public Origins SMP server, with unique powers and endless adventure!",
    images: [
      "https://github.com/WarFiN123/docs-bugattipvp/blob/main/app/opengraph-image.png?raw=true",
    ],
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

const BrunoAce = LocalFont({
  src: "../public/fonts/BrunoAce.ttf",
  variable: "--font-brunoAce",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={[BrunoAce.variable].join(" ")}
    >
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-regular`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          <main>
            {children}
            <Metrics />
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
