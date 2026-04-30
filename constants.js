/**
 * ლოგო (PNG ან JPG): ჩაგდე ფაილი `public/` საქაღალდეში და აქ დაწერე იგივე სახელი.
 * მაგალითი: public/logo.png → "/logo.png"  |  public/logo.jpg → "/logo.jpg"
 */
export const LOGO_PUBLIC_URL = "/logo.png";

/** რასტრის ზომა (მიახლოებითი) — შეცვალე შენი ფაილის პროპორციის მიხედვით */
export const LOGO_WIDTH = 520;
export const LOGO_HEIGHT = 190;

export const CONTACT_EMAIL = "info@techsolgeorgia.com";
export const FORMSUBMIT_ACTION = `https://formsubmit.co/${CONTACT_EMAIL}`;

/** შეცვალეთ რეალური ნომერი და ბმულები გაშვებამდე */
export const CONTACT_PHONE_DISPLAY = "+995 595 53 10 07";
export const CONTACT_PHONE_TEL = "+995595531007";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/61572854547229",
  messenger: "https://m.me/1002193936312878",
  linkedin: "https://www.linkedin.com/company/techsol-georgia",
  instagram: "https://www.instagram.com/techsol_georgia",
  whatsapp: `https://wa.me/${CONTACT_PHONE_TEL.replace(/\D/g, "")}`,
};
