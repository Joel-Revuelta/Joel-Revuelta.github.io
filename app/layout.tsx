import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joel-revuelta.github.io"),
  title: "Joel Revuelta - Software Developer",
  description: "Portfolio of Joel Revuelta, Software Developer specializing in Next.js, Angular, Python, and C++.",
  keywords: ["Joel Revuelta", "Software Developer", "Web Developer", "Next.js", "React", "Angular", "Python", "C++", "Portfolio"],
  authors: [{ name: "Joel Revuelta" }],
  openGraph: {
    title: "Joel Revuelta - Software Developer",
    description: "Portfolio of Joel Revuelta, Software Developer specializing in Next.js, Angular, Python, and C++.",
    url: "https://joel-revuelta.github.io",
    siteName: "Joel Revuelta Portfolio",
    images: [
      {
        url: "/pfp.png",
        width: 800,
        height: 600,
        alt: "Joel Revuelta",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel Revuelta - Software Developer",
    description: "Portfolio of Joel Revuelta, Software Developer specializing in Next.js, Angular, Python, and C++.",
    images: ["/pfp.png"],
  },
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
    url: "https://joel-revuelta.github.io",
    image: "https://joel-revuelta.github.io/pfp.png",
    jobTitle: "Software Developer",
    sameAs: [
      "https://www.linkedin.com/in/joel-revuelta",
      "https://github.com/Joel-Revuelta",
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground min-h-screen">
        <main className="max-w-4xl mx-auto px-6 py-12 md:px-8 pb-32">
          {children}
        </main>
      </body>
    </html>
  );
}
