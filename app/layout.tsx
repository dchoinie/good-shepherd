import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import PageLayout from "./layout/PageLayout";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
  weight: ["400", "600", "700"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Good Shepherd Lutheran Church",
  description:
    "An LCMS (Lutheran Church Missouri Synod) Church in North Mankato, MN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${sourceSerif.variable} antialiased`}
      >
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
