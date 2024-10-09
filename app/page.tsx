import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { Heart, SquareArrowOutUpRight, Box } from "lucide-react";
import Link from "next/link";
import Particles from "@/components/particles";

export default function Home() {
  return (
    <div className="relative flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <div className="z-10 flex flex-col items-center">
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <Link
          href="https://github.com/warfin123/docs-bugattipvp"
          target="_blank"
          className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
        >
          Follow along on GitHub{" "}
          <SquareArrowOutUpRight className="w-4 h-4 font-extrabold " />
        </Link>
        <h1 className="text-5xl font-bold mb-4 sm:text-7xl font-display">
          Bugatti PvP
        </h1>
        <p className="mb-8 sm:text-xl max-w-[400px] text-muted-foreground text">
          Explore our public Origins SMP server, with unique powers and endless
          adventure!
          <br />
        </p>
        <div className="flex flex-row items-center gap-5">
          <Link
            href={`/docs/${page_routes[0].href}`}
            className={buttonVariants({ className: "px-6", size: "lg" })}
          >
            Start Playing
          </Link>
          <Link
            href="https://discord.gg/ZewyUmtVSS"
            className={buttonVariants({
              variant: "outline",
              className: "px-6",
              size: "lg",
            })}
          >
            Discord
          </Link>
        </div>
        <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 max-[800px]:mb-12">
          <Heart className="w-4 h-4 mr-1" /> ~ By unt1tle and darkterrer
        </span>
      </div>
    </div>
  );
}
