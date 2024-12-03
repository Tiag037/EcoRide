import Link from "next/link";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import { Button } from "@/components/ui/button";
import { NotebookPen, User } from "lucide-react";
import BoxReveal from "@/components/ui/box-reveal";

export const metadata = {
  title: "EcoRide - Recherche ton trajet",
  description: "Partage un covoiturage, et participe à l'écologie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-[#ecfdf5]/10 ">
        <header>
          <nav className="py-2 px-2 flex justify-between items-center ">
            <div>
              <Link href={"/"}>
                <img src="/img/logo.svg" alt="logo de la marque EcoRide" width={90} />
              </Link>
            </div>

            <div className="flex gap-1">
              <BoxReveal boxColor={"#1f7551"} duration={0.3}>
                <Navigation />
              </BoxReveal>
              <BoxReveal boxColor={"#1f7551"} duration={0.5}>
                {" "}
                <Button variant="secondary">
                  <User />
                  Connexion
                </Button>
              </BoxReveal>
              <BoxReveal boxColor={"#1f7551"} duration={0.7}>
                <Button>
                  <NotebookPen />
                  Inscription
                </Button>
              </BoxReveal>
            </div>
          </nav>
        </header>
        <main className="min-h-80">{children}</main>

        <footer>
          <h3>footer</h3>
          <a href="https://storyset.com/nature">
            Nature illustrations by Storyset
          </a>
          <a href="https://lordicon.com/">Icons by Lordicon.com</a>
        </footer>
      </body>
    </html>
  );
}
