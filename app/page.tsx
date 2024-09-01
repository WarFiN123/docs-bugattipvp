"use client";

import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import { Canvas } from '@react-three/fiber'
import { SiDiscord } from "react-icons/si";
import { Preload } from '@react-three/drei'
import { Heart, Gamepad2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <ShaderGradientCanvas
      pointerEvents="none"
      eventPrefix="client"
      className="pointer-events-none"
        style={{ position: "absolute", PointerEvents: "none", top: 0, zIndex: "-20" }}
      >
        <Preload all />
        <ShaderGradient
          control="props"
          animate="on"
          cAzimuthAngle={270}
          cDistance={0.5}
          cPolarAngle={180}
          cameraZoom={15.1}
          color1={"#73bfc4"}
          color2={"#ff810a"}
          color3={"#8da0ce"}
          envPreset="city"
          frameRate={10}
          grain="on"
          lightType="env"
          positionX={-0.1}
          positionY={0}
          positionZ={0}
          range="disabled"
          reflection={0.4}
          rotationX={0}
          rotationY={130}
          rotationZ={70}
          shader="defaults"
          type="sphere"
          uAmplitude={3.2}
          uDensity={0.8}
          uFrequency={5.5}
          uSpeed={0.3}
          uStrength={0.3}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 sm:text-7xl font-display">
          Bugatti
        </h1>
        <h1 className="text-3xl font-bold mb-4 sm:text-7xl font-display">
          PvP
        </h1>
        <p className="mb-8 sm:text-xl max-w-[800px]">
        Experience the ultimate Minecraft adventure on our public Origins SMP server! With a vast array of unique powers to choose from, including spiders, vampires, and more, you&apos;ll embark on a journey of growth, combat, and exploration. Engage in epic clan wars, complete thrilling quests, and claim coveted bounties in a world of endless possibility
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
