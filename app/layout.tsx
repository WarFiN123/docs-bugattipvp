import type { Metadata } from "next";
import LocalFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bugatti PvP",
    template: "Bugatti PvP - %s",
  },
  description:
    "A public Origins SMP Server, Choose across many different powers ranging from spiders to vampire, Grind, Grow, Fight. Clan wars, Quests, Bounties and much more",
  openGraph: {
    title: "Bugatti PvP",
    description:
      "A public Origins SMP Server, Choose across many different powers ranging from spiders to vampire, Grind, Grow, Fight. Clan wars, Quests, Bounties and much more",
    url: "https://bugattipvp.vercel.app",
    siteName: "Bugatti PvP",
    images: [
      {
        url: "https://github.com/WarFiN123/docs-bugattipvp/blob/505521df7a471293a56aace242f40de80ad44ede/app/opengraph-image.png?raw=true",
        width: 1920,
        height: 1080,
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
      "A public Origins SMP Server, Choose across many different powers ranging from spiders to vampire, Grind, Grow, Fight. Clan wars, Quests, Bounties and much more",
    images: [
      "https://github.com/WarFiN123/docs-bugattipvp/blob/505521df7a471293a56aace242f40de80ad44ede/app/opengraph-image.png?raw=true",
    ],
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

const Heroeau = LocalFont({
  src: "../public/fonts/Heroeau.ttf",
  variable: "--font-heroeau",
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
      className={[Heroeau.variable].join(" ")}
    >
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-regular`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[85vw] h-auto">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
