"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import { STR } from "@/i18n/strings";

const LangContext = createContext(null);

const LANG_KEY = "tsg-lang";

function getStoredLang() {
  if (typeof window === "undefined") return "ka";
  try {
    const s = localStorage.getItem(LANG_KEY);
    if (s === "en" || s === "ka") return s;
  } catch {
    /* ignore */
  }
  return "ka";
}

let listeners = new Set();

function emit() {
  for (const l of [...listeners]) l();
}

function subscribe(listener) {
  const onStorage = (e) => {
    if (e.key === LANG_KEY || e.key === null) listener();
  };
  if (typeof window !== "undefined") {
    window.addEventListener("storage", onStorage);
  }
  listeners.add(listener);
  return () => {
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage);
    }
    listeners.delete(listener);
  };
}

/** სერვერსა და ჰიდრატაციის პირველ პასუხს ყოველთვის "ka" — თავიდან აიცილებს hydration mismatch-ს */
function getServerLang() {
  return "ka";
}

export function LangProvider({ children }) {
  const lang = useSyncExternalStore(subscribe, getStoredLang, getServerLang);

  const setLang = useCallback((l) => {
    if (l !== "en" && l !== "ka") return;
    try {
      localStorage.setItem(LANG_KEY, l);
    } catch {
      /* ignore */
    }
    emit();
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
  }, [lang]);

  const t = useCallback((key) => STR[lang][key] ?? key, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return (
    <LangContext.Provider value={value}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
