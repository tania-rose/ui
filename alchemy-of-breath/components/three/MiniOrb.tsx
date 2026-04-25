"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function OrbMesh({ color, accent }: { color: string; accent: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.3;
      ref.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    }
  });
  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          emissive={accent}
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.7}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export function MiniOrb({ color = "#9d4edd", accent = "#f4a261" }: { color?: string; accent?: string }) {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3], fov: 45 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 2]} intensity={20} color={accent} />
      <pointLight position={[-3, -2, 2]} intensity={15} color={color} />
      <Suspense fallback={null}>
        <OrbMesh color={color} accent={accent} />
      </Suspense>
    </Canvas>
  );
}
