import Link from "next/link";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export const metadata = {
  title: "EcoRide - Recherche ton trajet",
  description: "Partage un covoiturage, et participe à l'écologie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen">
        <header>
          <nav className="py-5 px-2 flex justify-between border-b-2 ">
            <div>
              <Link href={"/"}>logo</Link>
            </div>
            <Navigation />
            <div className="flex gap-1">
              <Button variant="outline"><User />Connexion</Button>
              <Button>Inscription</Button>
              
            </div>
          </nav>
        </header>
        {children}
        <footer>
          <h3 className="border-t-2">footer</h3>
        </footer>
      </body>
    </html>
  );
}
