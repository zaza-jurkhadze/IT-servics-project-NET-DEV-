import { Noto_Sans, Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingChatButtons } from "@/components/FloatingChatButtons";

const notoGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-georgian",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  title: {
    default: "TechSol Georgia | IT ინფრასტრუქტურის მომსახურება",
    template: "%s | TechSol Georgia",
  },
  description:
    "TechSol Georgia — IT მომსახურება ბიზნესისთვის: კომპიუტერული პრობლემები, სერვერული პრობლემები, ქსელური პრობლემები, სისტემური ადმინისტრირება და კიბერუსაფრთხოება.",
  keywords: [
    "IT მომსახურება",
    "კომპიუტერული პრობლემები",
    "სერვერული პრობლემები",
    "ქსელური პრობლემები",
    "ქსელის გამართვა",
    "სისტემური ადმინისტრირება",
    "IT support georgia",
    "managed it services",
    "cybersecurity georgia",
    "help desk",
    "server support",
    "network support",
    "TechSol Georgia",
  ],
  metadataBase: new URL("https://www.techsol.ge"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TechSol Georgia | IT ინფრასტრუქტურის მომსახურება",
    description:
      "კომპიუტერული, სერვერული და ქსელური პრობლემების პროფესიონალური გადაწყვეტა. Managed IT და კიბერუსაფრთხოების სერვისები ბიზნესისთვის.",
    url: "https://www.techsol.ge",
    siteName: "TechSol Georgia",
    locale: "ka_GE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "TechSol Georgia | IT ინფრასტრუქტურის მომსახურება",
    description:
      "IT support, server support, network support და cybersecurity სერვისები საქართველოში.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechSol Georgia",
    url: "https://www.techsol.ge",
    email: "info@techsol.ge",
    telephone: "+995595531007",
    sameAs: [
      "https://www.facebook.com/techsolgeorgia",
      "https://www.linkedin.com/company/techsol-georgia",
      "https://www.instagram.com/techsolgeorgia",
    ],
  };

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TechSol Georgia",
    description:
      "Managed IT services: კომპიუტერული, სერვერული და ქსელური პრობლემების მოგვარება, IT მხარდაჭერა და კიბერუსაფრთხოება.",
    areaServed: "GE",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kutaisi",
      addressCountry: "GE",
    },
    url: "https://www.techsol.ge",
  };

  return (
    <html
      lang="ka"
      suppressHydrationWarning
      className={`${notoGeorgian.variable} ${notoSans.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        <Providers>
          <Header />
          {children}
          <FloatingChatButtons />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
