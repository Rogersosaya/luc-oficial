import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://luc-oficial.vercel.app'),
  title: "LUC",
  description: "LUC - Un grupo que lo cambia todo",
  openGraph: {
    title: "LUC",
    description: "LUC - Un grupo que lo cambia todo",
    images: '/example.png'
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
      
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
