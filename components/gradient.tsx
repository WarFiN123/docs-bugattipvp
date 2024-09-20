'use client';

import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import { Suspense } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";

export default function Gradient() {
  return (
    <ShaderGradientCanvas
    importedFiber={{ ...fiber, ...drei, ...reactSpring }}
    pointerEvents="none"
    eventPrefix="client"
    className="pointer-events-none"
    style={{
      position: "absolute",
      PointerEvents: "none",
      top: 0,
      zIndex: "-20",
    }}
  >
    <Suspense fallback={null}>
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
    </Suspense>
  </ShaderGradientCanvas>
  );
}