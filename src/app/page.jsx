import DatePicker from "@/components/ui/DatePicker";
import BlurIn from "@/components/ui/blur-in";
import { Input } from "@/components/ui/input";
import LetterPullup from "@/components/ui/letter-pullup";
import { Spotlight } from "@/components/ui/spotlight";
import BoxReveal from "@/components/ui/box-reveal";
import CarouselPictures from "@/components/carousel/CarouselPictures";
export default function Page() {
  return (
    <div className=" min-h-screen">
      <div className="flex flex-col gap-6 p-2  min-h-screen bg-[url('/img/carAnimate.svg')] bg-no-repeat bg-center ">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#a3e635"
        />
        <BlurIn word="EcoRide" className="pt-4" />
        <LetterPullup words="Partageons le trajet de demain" delay={0.04} />
      </div>
      <section className="h-40 w-full p-5 gap-2 bg-accent">
        <h2 className="text-2xl mb-5 font-bold text-lime-50">
          Besoin d'un trajet ?
        </h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input type="text" placeholder="Départ" className="text-center" />
          <Input
            type="text"
            placeholder="Destination"
            className="text-center"
          />
          <DatePicker />
        </div>
      </section>
      <section className="flex items-center w-full  mt-24 justify-around">
        <div className="max-w-xl  items-center justify-center overflow-hidden p-5">
          <BoxReveal boxColor={"#1f7551"} duration={0.5}>
            <h3 className="text-[3.5rem] font-semibold">
              Un trajet pour demain<span className="text-[#1f7551]">.</span>
            </h3>
          </BoxReveal>
      
          <p className="text-primary font-bold">Rejoignez le mouvement écologique avec notre application de covoiturage! Réduisez vos émissions de CO₂ tout en partageant vos trajets avec d'autres voyageurs responsables. Simplifiez vos déplacements, économisez de l'argent, et contribuez à un avenir plus vert. Ensemble, faisons du covoiturage une solution durable et conviviale pour tous !</p>
        </div>
        <div>
          <CarouselPictures />
        </div>
      </section>
    </div>
  );
}
