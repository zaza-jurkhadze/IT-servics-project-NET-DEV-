"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useLang } from "@/context/LangContext";
import { CONTACT_EMAIL, FORMSUBMIT_ACTION } from "@/constants";

const PRICE_BASIC_KEYS = [1, 2, 3, 4, 5, 6];
const PRICE_STD_KEYS = [1, 2, 3, 4, 5, 6, 7, 8];
const PRICE_PREM_KEYS = [1, 2, 3, 4, 5, 6];

function scrollToHashFromLocation() {
  if (typeof window === "undefined") return;
  const hash = window.location.hash;
  if (!hash) return;
  let id;
  try {
    id = decodeURIComponent(hash.slice(1));
  } catch {
    id = hash.slice(1);
  }
  const el = document.getElementById(id);
  if (el) {
    const header = document.querySelector(".site-header");
    const headerOffset = header ? header.getBoundingClientRect().height : 0;
    const extraGap = 12;
    const top =
      el.getBoundingClientRect().top + window.scrollY - headerOffset - extraGap;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }
}

export default function Home() {
  const { t, lang } = useLang();
  const urlFieldRef = useRef(null);
  const nextFieldRef = useRef(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sentOk = searchParams.get("sent") === "1";
  const [activeServiceGroup, setActiveServiceGroup] = useState("infra");

  useEffect(() => {
    document.title = t("doc.title");
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", t("doc.desc"));
  }, [t, lang]);

  useEffect(() => {
    const base = `${window.location.origin}${window.location.pathname}`;
    if (urlFieldRef.current) {
      urlFieldRef.current.value = base.split("#")[0];
    }
    if (nextFieldRef.current) {
      nextFieldRef.current.value = `${base.split("#")[0]}?sent=1#კონტაქტი`;
    }
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    scrollToHashFromLocation();
    const t1 = setTimeout(scrollToHashFromLocation, 100);
    const t2 = setTimeout(scrollToHashFromLocation, 350);
    const onHashChange = () => scrollToHashFromLocation();
    window.addEventListener("hashchange", onHashChange);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  const subject =
    lang === "en"
      ? "TechSol Georgia — new inquiry"
      : "TechSol Georgia — ახალი მიმართვა";
 
  const formNote = t("contact.formNote").trim();

  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>
              <span className="hero-title-top">{t("hero.title.top")}</span>
              <span className="hero-title-bottom">{t("hero.title.bottom")}</span>
              <span className="hero-title-bottom hero-title-bottom-last">
                {t("hero.title.bottom.last")}
              </span>
            </h1>
            <div className="hero-leads">
              <p className="hero-lead">{t("hero.lead1")}</p>
              <p className="hero-lead">{t("hero.lead2")}</p>
            </div>
            <div className="hero-actions">
              <a href="#პაკეტები" className="btn btn-primary">
                {t("hero.cta")}
              </a>
            </div>
          </div>
          <div className="hero-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-directions.png"
              alt="Network, Infrastructure, Web Development and AI"
              className="hero-image"
            />
          </div>
        </div>
        <div className="hero-glow" aria-hidden />
      </section>

      <section id="სერვისები" className="section">
        <div className="container">
          <h2 className="section-title">{t("services.title")}</h2>
          <div className="service-group-switch" role="tablist" aria-label={t("services.title")}>
            <button
              type="button"
              role="tab"
              aria-selected={activeServiceGroup === "infra"}
              className={`service-group-btn${activeServiceGroup === "infra" ? " is-active" : ""}`}
              onClick={() => setActiveServiceGroup("infra")}
            >
              {t("services.group.infra")}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeServiceGroup === "devai"}
              className={`service-group-btn${activeServiceGroup === "devai" ? " is-active" : ""}`}
              onClick={() => setActiveServiceGroup("devai")}
            >
              {t("services.group.devai")}
            </button>
          </div>

          {activeServiceGroup === "infra" ? (
            <ul className="feature-grid feature-grid--six">
              <li>
                <Link
                  href="/services/network"
                  className="feature-card feature-card-link"
                >
                  <h3>{t("svc.net.title")}</h3>
                  <p>{t("svc.net.desc")}</p>
                  <span className="feature-card-more">{t("svc.net.more")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/systems"
                  className="feature-card feature-card-link"
                >
                  <h3>{t("svc.sys.title")}</h3>
                  <p>{t("svc.sys.desc")}</p>
                  <span className="feature-card-more">{t("svc.sys.more")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud"
                  className="feature-card feature-card-link"
                >
                  <h3>{t("svc.cld.title")}</h3>
                  <p>{t("svc.cld.desc")}</p>
                  <span className="feature-card-more">{t("svc.cld.more")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/security"
                  className="feature-card feature-card-link"
                >
                  <h3>{t("svc.sec.title")}</h3>
                  <p>{t("svc.sec.desc")}</p>
                  <span className="feature-card-more">{t("svc.sec.more")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/support"
                  className="feature-card feature-card-link"
                >
                  <h3>{t("svc.sup.title")}</h3>
                  <p>{t("svc.sup.desc")}</p>
                  <span className="feature-card-more">{t("svc.sup.more")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/monitoring"
                  className="feature-card feature-card-link"
                >
                  <h3>{t("svc.mon.title")}</h3>
                  <p>{t("svc.mon.desc")}</p>
                  <span className="feature-card-more">{t("svc.mon.more")}</span>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="feature-grid feature-grid--three">
              <li>
                <Link
                  href="/services/web-development"
                  className="feature-card feature-card-link"
                >
                  <h3>{t("svc.web.title")}</h3>
                  <p>{t("svc.web.desc")}</p>
                  <span className="feature-card-more">{t("svc.web.more")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-apps"
                  className="feature-card feature-card-link"
                >
                  <h3>{t("svc.app.title")}</h3>
                  <p>{t("svc.app.desc")}</p>
                  <span className="feature-card-more">{t("svc.app.more")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai"
                  className="feature-card feature-card-link"
                >
                  <h3>{t("svc.ai.title")}</h3>
                  <p>{t("svc.ai.desc")}</p>
                  <span className="feature-card-more">{t("svc.ai.more")}</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </section>

      <section id="პაკეტები" className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t("price.title")}</h2>
          <h3 className="pricing-group-title">{t("price.group.infra")}</h3>
          <div className="pricing-grid">
            <article className="price-card">
              <h3 className="price-name">{t("price.basic")}</h3>
              <p className="price-tag">
                <span className="amount">450</span>{" "}
                <span className="currency">₾</span>{" "}
                <span className="period">{t("price.period")}</span>
              </p>
              <ul className="price-list">
                {PRICE_BASIC_KEYS.map((n) => (
                  <li key={n}>{t(`price.b.li${n}`)}</li>
                ))}
              </ul>
              <Link href="/package-request?plan=basic" className="btn btn-outline">
                {t("price.choose")}
              </Link>
            </article>
            <article className="price-card price-card-featured">
              <p className="price-ribbon">{t("price.ribbon")}</p>
              <h3 className="price-name">{t("price.standard")}</h3>
              <p className="price-tag">
                <span className="amount">850</span>{" "}
                <span className="currency">₾</span>{" "}
                <span className="period">{t("price.period")}</span>
              </p>
              <ul className="price-list">
                {PRICE_STD_KEYS.map((n) => (
                  <li key={n}>{t(`price.s.li${n}`)}</li>
                ))}
              </ul>
              <Link href="/package-request?plan=standard" className="btn btn-primary">
                {t("price.choose")}
              </Link>
            </article>
            <article className="price-card">
              <h3 className="price-name">{t("price.premium")}</h3>
              <p className="price-tag">
                <span className="amount">2200</span>{" "}
                <span className="currency">₾</span>{" "}
                <span className="period">{t("price.period")}</span>
              </p>
              <ul className="price-list">
                {PRICE_PREM_KEYS.map((n) => (
                  <li key={n}>{t(`price.p.li${n}`)}</li>
                ))}
              </ul>
              <Link href="/package-request?plan=premium" className="btn btn-outline">
                {t("price.choose")}
              </Link>
            </article>
          </div>
          <h3 className="pricing-group-title">{t("price.group.devai")}</h3>
          <div className="pricing-grid pricing-grid--devai">
            <article className="price-card">
              <h3 className="price-name">{t("price.web.title")}</h3>
              <p className="price-tag">
                <span className="amount">300</span>{" "}
                <span className="currency">₾</span>{" "}
                <span className="period">{t("price.web.period")}</span>
              </p>
              <ul className="price-list">
                <li>{t("price.web.li1")}</li>
                <li>{t("price.web.li2")}</li>
                <li>{t("price.web.li3")}</li>
                <li>{t("price.web.li4")}</li>
              </ul>
              <Link href="/package-request?plan=webdev" className="btn btn-outline">
                {t("price.choose")}
              </Link>
            </article>
            <article className="price-card">
              <h3 className="price-name">{t("price.app.title")}</h3>
              <p className="price-tag">
                <span className="amount amount-text">{t("price.app.custom")}</span>
              </p>
              <ul className="price-list">
                <li>{t("price.app.li1")}</li>
                <li>{t("price.app.li2")}</li>
                <li>{t("price.app.li3")}</li>
                <li>{t("price.app.li4")}</li>
              </ul>
              <Link href="/package-request?plan=webapps" className="btn btn-outline">
                {t("price.choose")}
              </Link>
            </article>
            <article className="price-card">
              <h3 className="price-name">{t("price.ai.title")}</h3>
              <p className="price-tag">
                <span className="amount amount-text">{t("price.ai.custom")}</span>
              </p>
              <ul className="price-list">
                <li>{t("price.ai.li1")}</li>
                <li>{t("price.ai.li2")}</li>
                <li>{t("price.ai.li3")}</li>
                <li>{t("price.ai.li4")}</li>
              </ul>
              <Link href="/package-request?plan=aiauto" className="btn btn-primary">
                {t("price.choose")}
              </Link>
            </article>
          </div>
          <p className="pricing-note">{t("price.note")}</p>
        </div>
      </section>

      <section id="რატომ-ჩვენ" className="section">
        <div className="container">
          <h2 className="section-title">{t("why.title")}</h2>
          <p className="section-subtitle">{t("why.sub")}</p>
          <div className="about-highlight about-highlight--solo">
            <ul className="why-list">
              <li>{t("about.w1")}</li>
              <li>{t("about.w2")}</li>
              <li>{t("about.w3")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="ჩვენს-შესახებ" className="section section-alt">
        <div className="container about-grid about-grid--single">
          <div>
            <h2 className="section-title">{t("about.title")}</h2>
            <p className="about-teaser">{t("about.teaser")}</p>
            <p className="about-teaser">{t("about.p3")}</p>
            <Link href="/about" className="btn btn-primary about-readmore">
              {t("about.readmore")}
            </Link>
          </div>
        </div>
      </section>

      <section id="კონტაქტი" className="section">
        <div className="container contact-wrap">
          <div className="contact-intro">
            <h2 className="section-title">{t("contact.title")}</h2>
            <p className="section-subtitle">{t("contact.sub")}</p>
            <p className="contact-email">
              <span>{t("contact.emailLabel")} </span>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
            {sentOk && (
              <p className="contact-success" role="status">
                {t("contact.success")}
              </p>
            )}
            {formNote ? (
              <p className="contact-form-note">{formNote}</p>
            ) : null}
          </div>
          <form
            className="contact-form"
            action={FORMSUBMIT_ACTION}
            method="POST"
          >
            <input ref={urlFieldRef} type="hidden" name="_url" defaultValue="" />
            <input ref={nextFieldRef} type="hidden" name="_next" defaultValue="" />
            <input type="hidden" name="_subject" value={subject} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="text"
              name="_honey"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />
            <label>
              <span>{t("form.name")}</span>
              <input
                type="text"
                name="name"
                required
                placeholder={t("ph.name")}
              />
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
              <input
                type="text"
                name="company"
                placeholder={t("ph.company")}
              />
            </label>
            <label>
              <span>{t("form.message")}</span>
              <textarea
                name="message"
                rows={5}
                required
                placeholder={t("ph.message")}
              />
            </label>
            <button type="submit" className="btn btn-primary btn-block">
              {t("form.submit")}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
