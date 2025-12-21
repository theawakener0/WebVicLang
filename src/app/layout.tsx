import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victoria | A learning-first Programming Language",
  description: "A dynamic, interpreted programming language designed for readability and expressiveness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/10 selection:text-primary`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t border-border/50 py-12 bg-muted/10">
          <div className="container max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">Victoria</span>
              <span>— A learning-first language.</span>
            </div>
            <p>© {new Date().getFullYear()} Victoria Language. Built for clarity.</p>
            <div className="flex gap-6">
              <a href="https://github.com/theawakener0/VictoriaLang" className="hover:text-primary transition-colors">GitHub</a>
              <Link href="/docs/LANGUAGE" className="hover:text-primary transition-colors">Docs</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
