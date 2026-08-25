import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thenordgate.com"),
  title: {
    default: "Nordgate - Your route to the Nordics",
    template: "%s | NordGate",
  },
  description:
    "NordGate helps established international companies enter, sell and grow across the Nordics through local market knowledge and hands-on commercial execution.",
  openGraph: {
    title: "Nordgate - Your route to the Nordics",
    description:
      "NordGate helps established international companies enter, sell and grow across the Nordics through local market knowledge and hands-on commercial execution.",
    siteName: "NordGate",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nordgate - Your route to the Nordics",
    description:
      "NordGate helps established international companies enter, sell and grow across the Nordics through local market knowledge and hands-on commercial execution.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* Progressive-enhancement flag for the reveal system: only hide
            .reveal content pre-animation once JS is confirmed running and
            the visitor hasn't asked for reduced motion. Content stays fully
            visible by default otherwise. Runs before hydration/paint. */}
        <Script
          id="reveal-js-flag"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js');}}catch(e){}",
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
