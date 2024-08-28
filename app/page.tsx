'use client'

import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import { Heart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 sm:text-7xl font-display">
          Bugatti
        </h1>
        <h1 className="text-3xl font-bold mb-4 sm:text-7xl font-display">PvP</h1>
        <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground text">
          A public Origins SMP Server, Choose across many different powers ranging
          from spiders to vampire, Grind, Grow, Fight. Clan wars, Quests, Bounties
          and much more<br></br>
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-5">
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
      <ShaderGradientCanvas
        style={{ position: 'absolute', top: 0, zIndex: '-20' }}
      >
        <ShaderGradient
          control='query'
          urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&toggleAxis=false&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false'
        />
      </ShaderGradientCanvas>
    </div>
  );
}
