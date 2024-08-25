import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";
import Particles from "../components/particles";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl font-display">
        Bugatti
      </h1>
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl font-display">PVP</h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground text">
        A public Origins SMP Server, Choose acroos many diffrent powers ranging
        from spiders to vampire, Grind, Grow, Fight. Clan wars, Quests, Bounties
        and much more<br></br>
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
    </div>
  );
}
