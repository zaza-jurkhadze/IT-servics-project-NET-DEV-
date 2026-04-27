"use client";

import { LangProvider } from "@/context/LangContext";
import { ScrollToTop } from "@/components/ScrollToTop";

export function Providers({ children }) {
  return (
    <LangProvider>
      <ScrollToTop />
      {children}
    </LangProvider>
  );
}
