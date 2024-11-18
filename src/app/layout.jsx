import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "EcoRide - Recherche ton trajet",
  description: "Partage un covoiturage, et participe à l'écologie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {" "}
        <header>
          <nav className="py-5 px-2 flex justify-between border-b-2 ">
            <div>
              <Link href={"/"}>logo</Link>
            </div>
            <ul className="flex justify-center gap-4 ">
              <li>
                <Link className="hover:bg-slate-50 duration-300" href={"/"}>Accueil</Link>
              </li>
              <li>
                <Link href={"/covoiturage"}>En route !!</Link>
              </li>
            </ul>
            <div></div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
