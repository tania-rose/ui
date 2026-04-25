"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { BreathOrb, OrbitingMote } from "./BreathOrb";
import { BreathParticles } from "./Particles";
import { BreathRibbon } from "./BreathRibbon";

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.4, 6.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#07060f"]} />
      <fog attach="fog" args={["#07060f", 8, 18]} />

      <ambientLight intensity={0.35} />
      <pointLight position={[6, 4, 4]} intensity={45} color="#f4a261" />
      <pointLight position={[-5, -3, 2]} intensity={30} color="#9d4edd" />
      <pointLight position={[0, 2, -5]} intensity={20} color="#80ffdb" />

      <Suspense fallback={null}>
        <Environment preset="night" />

        <Float speed={0.6} rotationIntensity={0.4} floatIntensity={0.6}>
          <BreathOrb />
        </Float>

        <BreathRibbon color="#9d4edd" offset={0} radius={2.6} />
        <BreathRibbon color="#f4a261" offset={Math.PI / 1.5} radius={2.9} />
        <BreathRibbon color="#80ffdb" offset={Math.PI} radius={3.2} />

        <OrbitingMote radius={2.2} speed={0.5} color="#f4a261" size={0.05} phase={0} />
        <OrbitingMote radius={2.5} speed={-0.35} color="#80ffdb" size={0.04} phase={1.5} />
        <OrbitingMote radius={2.9} speed={0.25} color="#9d4edd" size={0.06} phase={3} />

        <BreathParticles count={700} />
      </Suspense>
    </Canvas>
  );
}
