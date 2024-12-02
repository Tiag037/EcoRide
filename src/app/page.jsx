import DatePicker from "@/components/datePicker/DatePicker";
import BlurIn from "@/components/ui/blur-in";
import { Input } from "@/components/ui/input";
import LetterPullup from "@/components/ui/letter-pullup";
import { Spotlight } from "@/components/ui/spotlight";
import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";

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
      <section className="h-full w-full p-5 gap-2 bg-accent ">
        <h2 className="text-xl mb-5 font-bold text-lime-50">
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
      <section className="min-h-16">
        <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
          <BoxReveal boxColor={"#1f7551"} duration={0.5}>
            <p className="text-[3.5rem] font-semibold">
              Un trajet pour l'avenir<span className="text-[#1f7551]">.</span>
            </p>
          </BoxReveal>
          

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
          </BoxReveal>
        </div>
      </section>
    </div>
  );
}
