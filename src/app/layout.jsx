import Link from "next/link";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import { Button } from "@/components/ui/button";
import {
  Copyright,
  Facebook,
  Instagram,
  NotebookPen,
  Twitter,
  User,
} from "lucide-react";
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
                <img
                  src="/img/logo.svg"
                  alt="logo de la marque EcoRide"
                  width={90}
                />
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

        <footer className="mt-20 grid grid-cols-3">
          <div className="bg-primary text-white text-sm col-span-2 grid grid-cols-2">
            <div className=" items-center justify-center">
              <ul className="p-3  font-semibold">
                <li>Nous contacter</li>
                <li>Mentions légales</li>
                <li>
                  Ressource:
                  <ul>
                    <li>
                      <a href="https://storyset.com/nature">
                        -Nature illustrations by Storyset
                      </a>
                    </li>
                    <li>
                      <a href="https://lordicon.com/">-Icons by Lordicon.com</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-evenly">
              <h5 className="font-bold">Ecoride</h5>
              <address>
                123 rue de L'exemple,
                <br />
                37530 Nazelles-Négron, France <br />
                Téléphone : <a href="tel:+33123456789">0123456789</a>
                <br />
                Email :{" "}
                <a href="mailto:contact@ecoride.com">contact@ecoride.com</a>
              </address>
            </div>
          </div>
          <div className="bg-secondary col-span-1 text-center">
            <h5 className="mt-2 font-semibold p-1 bg-accent border-4 border-primary w-1/3 m-auto rounded">
              Suivez-nous
            </h5>
            <div className="mt-6 text-primary">
              <ul className="flex justify-center">
                <li className="border-r-4 border-primary px-7 hover:scale-110">
                  <Facebook size={44} />
                </li>
                <li className="px-7 hover:scale-110">
                  <Instagram  size={44}/>
                </li>
                <li className="border-l-4 border-primary px-7  hover:scale-110">
                  <Twitter size={44} />
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-800 col-span-3 text-center text-white ">
            
            <p className="flex justify-center p-2"><Copyright/>Tout droits réservés</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
