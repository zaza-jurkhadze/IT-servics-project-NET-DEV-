"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useLang } from "@/context/LangContext";

const WORK_KEYS = [1, 2, 3, 4, 5, 6];

export default function ServiceSystemsPage() {
  const { t, lang } = useLang();

  useEffect(() => {
    document.title = `${t("svc.sys.title")} | TechSol Georgia`;
  }, [t, lang]);

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">{t("nav.home")}</Link> /{" "}
            <Link href="/#სერვისები">{t("nav.services")}</Link> /{" "}
            {t("svc.sys.title")}
          </p>
          <h1>{t("svc.sys.title")}</h1>
          <p className="section-subtitle" style={{ margin: 0, maxWidth: "50ch" }}>
            {t("svc.sys.detail.lead")}
          </p>
        </div>
      </div>

      <section className="prose-section">
        <div className="container prose">
          <h2>{t("svc.sys.detail.h2_what")}</h2>
          <p>{t("svc.sys.detail.p_what")}</p>

          <h2>{t("svc.sys.detail.h2_work")}</h2>
          <ul>
            {WORK_KEYS.map((n) => (
              <li key={n}>
                <strong>{t(`svc.sys.detail.work.li${n}.b`)}</strong>
                {t(`svc.sys.detail.work.li${n}.t`)}
              </li>
            ))}
          </ul>

          <h2>{t("svc.sys.detail.h2_why")}</h2>
          <p>{t("svc.sys.detail.p_why")}</p>

          <div className="prose-cta">
            <a href="/#კონტაქტი" className="btn btn-primary">
              {t("nav.contact")}
            </a>
            <a
              href="/#სერვისები"
              className="btn btn-ghost"
              style={{ marginInlineStart: "0.5rem" }}
            >
              {t("svc.nav_other")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
