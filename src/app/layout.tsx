import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LUC",
  description: "LUC - Un grupo que lo cambia todo",
  openGraph: {
    title: "LUC",
    description: "LUC - Un grupo que lo cambia todo",
    images: [{ url: "/example.png", alt: "Logo de LUC" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="dark  bg-background font-sans text-off-white"
      style={{ fontSize: "62.5%" }}
      lang="en"
    >
      <Head>
        <title>LUC</title>
        <meta name="description" content="LUC - Un grupo que lo cambia todo" />
        <meta property="og:title" content="LUC" />
        <meta property="og:description" content="LUC - Un grupo que lo cambia todo"/>
        
          <meta  property="og:image" content="/example.png" />
        
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
