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
  title: "Joel Revuelta - Software Developer",
  description: "Portfolio of Joel Revuelta, Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
      <body className="bg-background text-foreground min-h-screen">
        <main className="max-w-4xl mx-auto px-6 py-12 md:px-8 pb-32">
          {children}
        </main>
      </body>
    </html>
  );
}
