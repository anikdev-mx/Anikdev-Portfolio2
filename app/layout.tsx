import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ANIK-DEV | Developer Portfolio",
  description: "ANIK-DEV — Discord bot, Minecraft server, hosting panel, Petro Manager Bot and payment gateway bot development.",
  keywords: ["ANIK-DEV", "Bot Developer", "Discord Developer", "Minecraft Server Developer", "Panel Developer", "RIVEN CLOUD"],
  authors: [{ name: "ANIK-DEV" }],
  creator: "ANIK-DEV",
  publisher: "ANIK-DEV",
  openGraph: {
    type: "website",
    title: "ANIK-DEV | Developer Portfolio",
    description: "Bots, servers, panels and automation.",
    siteName: "ANIK-DEV",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
