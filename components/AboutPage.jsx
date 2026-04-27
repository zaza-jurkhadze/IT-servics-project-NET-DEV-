"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useLang } from "@/context/LangContext";

export default function AboutPage() {
  const { t, lang } = useLang();

  useEffect(() => {
    document.title = `${t("about.doc.title")} | TechSol Georgia`;
  }, [t, lang]);

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">{t("nav.home")}</Link> / {t("about.doc.title")}
          </p>
          <h1>{t("about.title")}</h1>
          <p className="section-subtitle" style={{ margin: 0, maxWidth: "60ch" }}>
            {t("about.full.lead")}
          </p>
        </div>
      </div>

      <section className="prose-section">
        <div className="container prose">
          <p>{t("about.full.p1")}</p>
          <p>{t("about.full.p2")}</p>
          <h2>{t("about.full.h2.services")}</h2>
          <h3>{t("about.full.svc.web.title")}</h3>
          <p>{t("about.full.svc.web.desc")}</p>
          <h3>{t("about.full.svc.ai.title")}</h3>
          <p>{t("about.full.svc.ai.desc")}</p>
          <h3>{t("about.full.svc.infra.title")}</h3>
          <ul>
            <li>{t("about.full.svc.infra.li1")}</li>
            <li>{t("about.full.svc.infra.li2")}</li>
            <li>{t("about.full.svc.infra.li3")}</li>
            <li>{t("about.full.svc.infra.li4")}</li>
          </ul>
          <h2>{t("why.title")}</h2>
          <p>{t("about.full.why1")}</p>
          <p>{t("about.full.why2")}</p>
          <p>{t("about.full.why3")}</p>
          <p>{t("about.full.why4")}</p>

          <div className="prose-cta">
            <a href="/#კონტაქტი" className="btn btn-primary">
              {t("nav.contact")}
            </a>
            <Link href="/" className="btn btn-ghost" style={{ marginInlineStart: "0.5rem" }}>
              {t("nav.home")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
