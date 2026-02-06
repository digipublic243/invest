import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://invest.digipublic.app/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Invest In DRC",
    template: "%s | Invest In DRC",
  },
  description:
    "Plateforme de reference pour investir en RDC. Opportunites, projets et contacts strategiques pour investir en Democratic Republic of Congo.",
  keywords: [
    "invest in DRC",
    "invest in Democratic Republic of Congo",
    "DRC investment",
    "Congo investment opportunities",
    "investir en RDC",
    "RDC investissement",
    "mining investment DRC",
    "DRC finance",
    "Sycamore",
  ],
  applicationName: "Invest In DRC",
  authors: [{ name: "Sycamore Group" }],
  creator: "Sycamore Group",
  publisher: "Sycamore Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Invest In DRC",
    description:
      "Plateforme de reference pour investir en RDC. Opportunites, projets et contacts strategiques pour investir en Democratic Republic of Congo.",
    siteName: "Invest In DRC",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest In DRC",
    description:
      "Plateforme de reference pour investir en RDC. Opportunites, projets et contacts strategiques pour investir en Democratic Republic of Congo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Invest In DRC",
              url: SITE_URL,
              description:
                "Plateforme de reference pour investir en RDC. Opportunites, projets et contacts strategiques pour investir en Democratic Republic of Congo.",
              publisher: {
                "@type": "Organization",
                name: "Sycamore Group",
                url: SITE_URL,
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
