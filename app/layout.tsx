import type { Metadata, Viewport } from "next";
import { Epilogue, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Dock from "@/components/Dock";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "Portfolio of Joel Revuelta, a software engineer in Barcelona building full-stack products and high-performance systems in TypeScript, Python and C++.";

export const metadata: Metadata = {
  metadataBase: new URL("https://joel-revuelta.github.io"),
  title: "Joel Revuelta — Software Engineer",
  description,
  keywords: [
    "Joel Revuelta",
    "Software Engineer",
    "Full-Stack Developer",
    "Systems Programming",
    "TypeScript",
    "Python",
    "C++",
    "Next.js",
    "Angular",
    "CUDA",
    "Go",
    "PostgreSQL",
    "AI",
    "Portfolio",
  ],
  authors: [{ name: "Joel Revuelta" }],
  openGraph: {
    title: "Joel Revuelta — Software Engineer",
    description,
    url: "https://joel-revuelta.github.io",
    siteName: "Joel Revuelta",
    locale: "en_GB",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Joel Revuelta, software engineer in Barcelona",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel Revuelta — Software Engineer",
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0d14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joel Revuelta",
    alternateName: "Joel Revuelta Gómez",
    url: "https://joel-revuelta.github.io",
    image: "https://joel-revuelta.github.io/og.png",
    jobTitle: "Software Engineer",
    email: "mailto:joel.revuel@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "EPITECH" },
      { "@type": "CollegeOrUniversity", name: "Koç University" },
    ],
    knowsAbout: [
      "Software engineering",
      "Full-stack development",
      "Systems programming",
      "C++",
      "TypeScript",
      "Python",
      "Java",
      "CUDA",
      "Go",
      "PostgreSQL",
      "AI",
    ],
    sameAs: [
      "https://www.linkedin.com/in/joel-revuelta",
      "https://github.com/Joel-Revuelta",
    ],
  };

  return (
    <html
      lang="en"
      className={`${epilogue.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-ink"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Dock />
      </body>
    </html>
  );
}
