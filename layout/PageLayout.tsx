"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "../components/custom/PageTransition";
import AnnouncementBanner from "@/components/custom/AnnouncementBanner";
import { SHOW_ANNOUNCEMENT_BAR } from "@/lib/constants";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {SHOW_ANNOUNCEMENT_BAR && <AnnouncementBanner />}
      <Header />
      <main className="overflow-x-hidden">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
