import type { Metadata } from "next";
import { Figtree, Italianno } from "next/font/google";
import "./globals.css";
import PageLayout from "../layout/PageLayout";
import { HeaderProvider } from "@/context/HeaderContext";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700"],
});

const italianno = Italianno({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-italianno",
  weight: "400",
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
      <body className={`${figtree.variable} ${italianno.variable} antialiased`}>
        <HeaderProvider>
          <PageLayout>{children}</PageLayout>
        </HeaderProvider>
      </body>
    </html>
  );
}
