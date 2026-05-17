"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLang } from "@/context/LangContext";
import { CONTACT_EMAIL, WEB3FORMS_ACCESS_KEY } from "@/constants";
import { submitWeb3Form } from "@/lib/web3forms";

const VALID_PLANS = new Set([
  "basic",
  "standard",
  "premium",
  "webdev",
  "webapps",
  "aiauto",
]);

const INC_COUNT = {
  basic: 6,
  standard: 8,
  premium: 6,
  webdev: 4,
  webapps: 4,
  aiauto: 4,
};

export default function PackageRequestClient({ planKey: rawPlan }) {
  const { t, lang } = useLang();
  const planKey = VALID_PLANS.has(rawPlan) ? rawPlan : "basic";
  const planLabel = t(`pkg.plan.${planKey}`);
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    document.title = `${t("pkg.doc.title")} | TechSol Georgia`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", t("pkg.doc.desc"));
  }, [t, lang]);

  const incN = INC_COUNT[planKey];
  const includes = Array.from({ length: incN }, (_, i) =>
    t(`pkg.inc.${planKey}.${i + 1}`),
  );
  const solves = [1, 2, 3].map((i) => t(`pkg.sol.${planKey}.${i}`));
  const benefits = [1, 2, 3].map((i) => t(`pkg.ben.${planKey}.${i}`));

  const mailSubject = t("pkg.mail_subject").replace("%s", planLabel);
  const defaultMessage = t(`pkg.msg.${planKey}`);

  async function handlePackageSubmit(e) {
    e.preventDefault();
    setFormError(false);
    setFormSubmitting(true);

    try {
      await submitWeb3Form(e.currentTarget);
      setFormSent(true);
      setFormKey((k) => k + 1);
    } catch {
      setFormError(true);
    } finally {
      setFormSubmitting(false);
    }
  }

  const formErrorText =
    lang === "en"
      ? "Could not send. Please try again or email us directly."
      : "გაგზავნა ვერ მოხერხდა. სცადეთ თავიდან ან მოგვწერეთ ელფოსტით.";

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">{t("nav.home")}</Link> / {t("pkg.breadcrumb")}
          </p>
          <h1>
            {t("pkg.h1_prefix")} {planLabel}
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-highlight" style={{ marginBottom: "1.25rem" }}>
            <h2 className="section-title" style={{ marginBottom: "0.35rem" }}>
              {t(`pkg.why.${planKey}`)}
            </h2>
            <p className="section-subtitle" style={{ marginBottom: "1.25rem" }}>
              {t(`pkg.lead.${planKey}`)}
            </p>
            <h3>{t("pkg.h.includes")}</h3>
            <ul className="price-list">
              {includes.map((item, i) => (
                <li key={`i-${i}`}>{item}</li>
              ))}
            </ul>

            <h3>{t("pkg.h.solves")}</h3>
            <ul className="price-list">
              {solves.map((item, i) => (
                <li key={`s-${i}`}>{item}</li>
              ))}
            </ul>

            <h3>{t("pkg.h.benefits")}</h3>
            <ul className="price-list" style={{ marginBottom: 0 }}>
              {benefits.map((item, i) => (
                <li key={`b-${i}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-wrap">
          <div className="contact-intro">
            <h2 className="section-title">{t("pkg.confirm.title")}</h2>
            <p className="section-subtitle">{t("pkg.confirm.sub")}</p>
            {formSent ? (
              <p className="contact-success" role="status">
                {t("pkg.success")}
              </p>
            ) : null}
            {formError ? (
              <p className="contact-form-note" role="alert">
                {formErrorText}
              </p>
            ) : null}
          </div>

          <form
            key={formKey}
            className="contact-form"
            onSubmit={handlePackageSubmit}
          >
            <input
              type="hidden"
              name="access_key"
              value={WEB3FORMS_ACCESS_KEY}
            />
            <input type="hidden" name="subject" value={mailSubject} />
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <label>
              <span>{t("pkg.form.package")}</span>
              <input
                type="text"
                name="selected_package"
                defaultValue={planLabel}
                readOnly
              />
            </label>
            <label>
              <span>{t("form.name")}</span>
              <input type="text" name="name" required placeholder={t("ph.name")} />
            </label>
            <label>
              <span>{t("form.email")}</span>
              <input
                type="email"
                name="email"
                required
                placeholder={t("ph.email")}
              />
            </label>
            <label>
              <span>{t("form.company")}</span>
              <input type="text" name="company" placeholder={t("pkg.ph.company")} />
            </label>
            <label>
              <span>{t("form.message")}</span>
              <textarea
                name="message"
                rows={5}
                required
                defaultValue={defaultMessage}
              />
            </label>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={formSubmitting}
            >
              {formSubmitting ? "…" : t("pkg.form.submit")}
            </button>
            <p className="contact-email">
              <span>{t("pkg.form.mailto")}</span>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
