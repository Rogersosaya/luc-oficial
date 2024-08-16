import NavBar from "@/components/ui/navbar/NavBar";
import {Footer} from "../../components/ui/footer/Footer";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />

      <main className=" pt-navigation-height"> {children}</main>

      <Footer />
    </div>
  );
}
