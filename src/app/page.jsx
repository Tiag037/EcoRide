import DatePicker from "@/components/datePicker/DatePicker";
import BlurIn from "@/components/ui/blur-in";
import { Input } from "@/components/ui/input";
import LetterPullup from "@/components/ui/letter-pullup";
import { Spotlight } from "@/components/ui/spotlight";

export default function Page() {
  return (
    <div className=" min-h-screen">
      <div className="flex flex-col gap-6 p-2  min-h-screen bg-[url('/img/carAnimate.svg')] bg-no-repeat bg-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#a3e635"
        />
        <BlurIn word="EcoRide" className="pt-4" />
        <LetterPullup words="Partageons le trajet de demain" delay={0.04} />
      </div>
      <div className="h-full w-full p-5 flex gap-2">
        <Input type="text" placeholder="Départ" className="text-center" />
        <Input type="text" placeholder="Destination" className="text-center" />
        <DatePicker />
      </div>
    </div>
  );
}
