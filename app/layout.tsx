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
    template: "%s",
  },
  description:
    "A public Origins SMP Server, Choose across many different powers ranging from spiders to vampire, Grind, Grow, Fight. Clan wars, Quests, Bounties and much more",
  openGraph: {
    title: "Bugatti PvP",
    description:
      "A public Origins SMP Server, Choose across many different powers ranging from spiders to vampire, Grind, Grow, Fight. Clan wars, Quests, Bounties and much more",
    url: "https://BugattiPvP.vercel.app",
    siteName: "Bugatti PvP",
    images: [
      {
        url: "https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/bugattipvp.vercel.app/Bugatti%20PvP/A%20public%20Origins%20SMP%20Server%2C%20Choose%20across%20many%20different%20powers%20ranging%20from%20spiders%20to%20vampire%2C%20Grind%2C%20Grow%2C%20Fight.%20Clan%20wars%2C%20Quests%2C%20Bounties%20and%20much%20more/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F606bc2e9-95c6-42f4-a027-7ba68284560f.jpg%3Ftoken%3DuLsu2DuOU8PhO2Z0qosbmubqWPjmYRJ3nU_07QSVn0I%26height%3D675%26width%3D1200%26expires%3D33260694185/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
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
