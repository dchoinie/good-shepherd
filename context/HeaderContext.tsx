"use client";

import React, { createContext, useContext, useState } from "react";

interface HeaderContextType {
  headerHeight: number;
  setHeaderHeight: (height: number) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <HeaderContext.Provider value={{ headerHeight, setHeaderHeight }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeaderHeight() {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useHeaderHeight must be used within a HeaderProvider");
  }
  return context;
}
