import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://luc-oficial.vercel.app"),
  title: "LUC",
  description: "LUC - Un grupo que lo cambia todo",
  openGraph: {
    title: "LUC",
    description: "LUC - Un grupo que lo cambia todo",
    images: "/example.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="dark bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-850  font-sans text-off-white"
      style={{ fontSize: "62.5%" }}
      lang="en"
    >
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8176473734031711"
        crossOrigin="anonymous"
      ></script>
      <meta name="google-adsense-account" content="ca-pub-8176473734031711"></meta>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8176473734031711"
     crossOrigin="anonymous"></script>
      <body>
        <Providers>
          {children}
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
