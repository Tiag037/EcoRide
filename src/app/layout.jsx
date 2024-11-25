import Link from "next/link";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";

export const metadata = {
  title: "EcoRide - Recherche ton trajet",
  description: "Partage un covoiturage, et participe à l'écologie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header>
          <nav className="py-5 px-2 flex justify-between border-b-2 bg-cyan-50/20 text-cyan-800">
            <div>
              <Link href={"/"}>logo</Link>
            </div>
            <Navigation/>
            <div></div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
