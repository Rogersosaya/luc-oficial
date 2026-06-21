import NavBar from "@/components/ui/navbar/NavBar";
import { Footer } from "@/components/ui/footer/Footer";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>
      <NavBar />
      <main id="contenido" className="pt-navigation-height">
        {children}
      </main>
      <Footer />
    </>
  );
}
