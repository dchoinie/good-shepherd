"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "../components/custom/PageTransition";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
