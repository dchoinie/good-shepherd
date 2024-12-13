import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageLayout from "./layout/PageLayout";

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
  description: "An LCMS (Lutheran Church Missouri Synod) Church in North Mankato, MN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
