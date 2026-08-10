import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import PageCanvas from "@/components/PageCanvas";
import Reveal from "@/components/Reveal";
import JsonLd, { personSchema, websiteSchema } from "@/components/JsonLd";
import { SITE, SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shashank — Software Engineer | Go, TypeScript & Distributed Systems",
    template: "%s | Shashank",
  },
  description: SITE.description,
  applicationName: "Shashank — Portfolio",
  keywords: [
    "Shashank",
    "Shashank S",
    "shanki200801",
    "software engineer Bengaluru",
    "backend engineer India",
    "Go developer",
    "Golang engineer",
    "TypeScript developer",
    "distributed systems engineer",
    "microservices",
    "event-driven architecture",
    "GCP Pub/Sub",
    "Cloud Run",
    "PostgreSQL",
    "Next.js developer",
    "full stack developer portfolio",
    "hire software engineer",
  ],
  authors: [{ name: SITE.fullName, url: SITE.url }],
  creator: SITE.fullName,
  publisher: SITE.fullName,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Shashank — Software Engineer",
    description: SITE.description,
    url: SITE.url,
    siteName: "Shashank",
    type: "website",
    locale: "en_US",
    // og:image comes from app/opengraph-image.tsx (generated 1200x630 PNG).
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashank — Software Engineer",
    description: SITE.description,
    creator: "@shashank200801",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

// Runs before paint so the correct theme is applied without a flash. The `js`
// class also gates the scroll-reveal animation, so content stays visible if
// scripting is unavailable.
const themeScript = `
(function () {
  document.documentElement.classList.add('js');
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // globals.css sets `scroll-behavior: smooth`. From Next 16 the router no longer
  // overrides that during navigation unless data-scroll-behavior is present.
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} min-h-screen antialiased`}>
        <PageCanvas />
        <Reveal />
        <Navbar />
        <Sidebar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
