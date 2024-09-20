import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { SiDiscord } from "react-icons/si";
import { Heart, Gamepad2 } from "lucide-react";
import Link from "next/link";
import Gradient from "@/components/gradient";

export default function Home() {
  return (
    <div className="relative flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <Gradient />
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 sm:text-7xl font-display">
          Bugatti
        </h1>
        <h1 className="text-3xl font-bold mb-4 sm:text-7xl font-display">
          PvP
        </h1>
        <p className="mb-8 sm:text-xl max-w-[800px]">
          Experience the ultimate Minecraft adventure on our public Origins SMP
          server! With a vast array of unique powers to choose from, including
          spiders, vampires, and more, you&apos;ll embark on a journey of
          growth, combat, and exploration. Engage in epic clan wars, complete
          thrilling quests, and claim coveted bounties in a world of endless
          possibility
          <br></br>
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Link
            href={`/docs/${page_routes[0].href}`}
            className={buttonVariants({ className: "px-6", size: "lg" })}
          >
            <Gamepad2 className="mr-2 w-5 h-5" /> Start Playing
          </Link>
          <Link
            href="https://discord.gg/ZewyUmtVSS"
            className={buttonVariants({
              variant: "outline",
              className: "px-6",
              size: "lg",
            })}
          >
            <SiDiscord className="mr-3 w-4 h-4" /> Discord
          </Link>
        </div>
        <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 max-[800px]:mb-12">
          <Heart className="w-4 h-4 mr-1" /> ~ By unt1tle and darkterrer
        </span>
      </div>
    </div>
  );
}
