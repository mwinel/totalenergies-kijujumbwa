import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito } from "next/font/google";
import "./globals.css";
import { isPublic, siteOrigin } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { station } from "@/content/station";

const totalFont = localFont({
  src: "../public/fonts/totalenergies-font-family.woff2",
  weight: "200 1000",
  variable: "--font-total",
  display: "swap",
});

const headingFont = Nunito({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: { url: "/totalenergies.svg", type: "image/svg+xml", sizes: "any" },
  },
  metadataBase: siteOrigin ? new URL(siteOrigin) : undefined,
  title: { default: station.name, template: `%s | ${station.name}` },
  description:
    "Find TotalEnergies Kijujumbwa in Uganda. Explore products, enquire about services and contact the station team.",
  robots: { index: isPublic, follow: isPublic },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${totalFont.variable} ${headingFont.variable} antialiased`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
