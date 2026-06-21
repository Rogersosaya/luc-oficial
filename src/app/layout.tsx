import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://luc-oficial.vercel.app"),
  title: {
    default: "Cátedra · Reseñas de profesores UNI",
    template: "%s · Cátedra",
  },
  description:
    "Encuentra, compara y reseña profesores de la Universidad Nacional de Ingeniería. Calificaciones reales de estudiantes sobre dificultad, aprendizaje y más.",
  keywords: ["UNI", "profesores", "reseñas", "calificaciones", "universidad", "Cátedra"],
  openGraph: {
    title: "Cátedra · Reseñas de profesores UNI",
    description:
      "Calificaciones reales de estudiantes de la UNI: dificultad, aprendizaje, etiquetas y reseñas.",
    images: "/example.png",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      style={{
        // Map Geist's generated CSS vars onto the names used by Tailwind
        ["--font-sans" as string]: "var(--font-geist-sans)",
        ["--font-mono" as string]: "var(--font-geist-mono)",
      }}
    >
      <body>
        <Providers>{children}</Providers>
        <SpeedInsights />
        <Script
          id="adsense"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8176473734031711"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
