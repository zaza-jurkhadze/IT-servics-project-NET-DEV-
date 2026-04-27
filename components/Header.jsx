"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LangContext";
import {
  LOGO_HEIGHT,
  LOGO_PUBLIC_URL,
  LOGO_WIDTH,
  SOCIAL_LINKS,
} from "@/constants";

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
      <path
        fill="currentColor"
        d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.019 4.388 11.009 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.017 1.792-4.684 4.533-4.684 1.313 0 2.686.236 2.686.236v2.963h-1.514c-1.49 0-1.955.931-1.955 1.887v2.258h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.092 24 12.073z"
      />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
      />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
      />
    </svg>
  );
}

const SECTION_IDS = {
  services: "სერვისები",
  packages: "პაკეტები",
  contact: "კონტაქტი",
};

function scrollToSectionWithOffset(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return;
  const header = document.querySelector(".site-header");
  const headerOffset = header ? header.getBoundingClientRect().height : 0;
  const extraGap = 12;
  const top =
    el.getBoundingClientRect().top + window.scrollY - headerOffset - extraGap;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export function Header() {
  const { t, lang, setLang } = useLang();
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const isHome = pathname === "/";

  const closeNav = () => setNavOpen(false);

  useEffect(() => {
    if (!navOpen) return;
    const onScroll = () => setNavOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [navOpen]);

  const goToSection = useCallback(
    (sectionId) => {
      closeNav();
      if (pathname === "/") {
        scrollToSectionWithOffset(sectionId);
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}#${sectionId}`
        );
        return;
      }
      window.location.assign(`/#${sectionId}`);
    },
    [pathname]
  );

  return (
    <header className="site-header">
      {navOpen ? (
        <button
          type="button"
          className="nav-backdrop"
          aria-label={t("nav.closeBackdrop")}
          onClick={closeNav}
        />
      ) : null}
      <div className="container header-inner">
        <Link href="/" className="logo logo--full" id="top" onClick={closeNav}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_PUBLIC_URL}
            alt="TechSol Georgia"
            className="logo-img"
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            decoding="async"
            fetchPriority="high"
          />
        </Link>
        <div className="header-end">
          <nav
            className={`main-nav${navOpen ? " is-open" : ""}`}
            aria-label={lang === "ka" ? "მთავარი ნავიგაცია" : "Main navigation"}
          >
            <Link href="/" onClick={closeNav}>
              {t("nav.home")}
            </Link>
            <a
              href={isHome ? "#სერვისები" : "/#სერვისები"}
              onClick={(e) => {
                e.preventDefault();
                goToSection(SECTION_IDS.services);
              }}
            >
              {t("nav.services")}
            </a>
            <a
              href={isHome ? "#პაკეტები" : "/#პაკეტები"}
              onClick={(e) => {
                e.preventDefault();
                goToSection(SECTION_IDS.packages);
              }}
            >
              {t("nav.packages")}
            </a>
            <Link href="/about" onClick={closeNav}>
              {t("nav.about")}
            </Link>
            <a
              href={isHome ? "#კონტაქტი" : "/#კონტაქტი"}
              onClick={(e) => {
                e.preventDefault();
                goToSection(SECTION_IDS.contact);
              }}
            >
              {t("nav.contactNav")}
            </a>
          </nav>
          <div
            className="lang-switch"
            role="group"
            aria-label={t("lang.label")}
          >
            <button
              type="button"
              className={`lang-btn${lang === "ka" ? " is-active" : ""}`}
              aria-pressed={lang === "ka"}
              onClick={() => setLang("ka")}
            >
              KA
            </button>
            <button
              type="button"
              className={`lang-btn${lang === "en" ? " is-active" : ""}`}
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
          <div className="header-social" aria-label="Social links">
            <a
              href={SOCIAL_LINKS.facebook}
              className="header-social-link header-social-link--facebook"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <IconFacebook />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              className="header-social-link header-social-link--linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IconLinkedIn />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              className="header-social-link header-social-link--instagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <IconInstagram />
            </a>
          </div>
          <button
            type="button"
            className="nav-toggle"
            aria-label={t("nav.toggle")}
            aria-expanded={navOpen}
            onClick={() => setNavOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
