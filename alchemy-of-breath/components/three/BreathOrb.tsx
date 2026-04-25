"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Trail } from "@react-three/drei";
import * as THREE from "three";

export function BreathOrb() {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // 7s breathing cycle: 4s inhale, 3s exhale
    const cycle = (Math.sin(t / 1.1) + 1) / 2; // 0 → 1
    const scale = 1 + cycle * 0.18;

    if (groupRef.current) {
      groupRef.current.scale.setScalar(scale);
      groupRef.current.rotation.y = t * 0.08;
      groupRef.current.rotation.x = Math.sin(t * 0.15) * 0.1;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.2;
      innerRef.current.rotation.z = t * 0.1;
    }
    if (haloRef.current) {
      const m = haloRef.current.material as THREE.MeshBasicMaterial;
      m.opacity = 0.15 + cycle * 0.25;
      haloRef.current.scale.setScalar(1.3 + cycle * 0.15);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer halo */}
      <mesh ref={haloRef}>
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshBasicMaterial
          color="#9d4edd"
          transparent
          opacity={0.18}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Glowing core */}
      <Sphere args={[1, 128, 128]}>
        <MeshDistortMaterial
          color="#1a0d2e"
          emissive="#9d4edd"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.4}
          distort={0.35}
          speed={1.2}
        />
      </Sphere>

      {/* Inner shimmer */}
      <Sphere ref={innerRef} args={[0.7, 64, 64]}>
        <MeshDistortMaterial
          color="#f4a261"
          emissive="#e76f51"
          emissiveIntensity={1.2}
          roughness={0}
          metalness={1}
          distort={0.5}
          speed={2}
          transparent
          opacity={0.55}
        />
      </Sphere>

      {/* Concentric ring */}
      <mesh rotation={[Math.PI / 2.2, 0.4, 0]}>
        <torusGeometry args={[1.55, 0.008, 16, 200]} />
        <meshBasicMaterial color="#80ffdb" transparent opacity={0.45} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, -0.3, 0.5]}>
        <torusGeometry args={[1.7, 0.005, 16, 200]} />
        <meshBasicMaterial color="#f4a261" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

export function OrbitingMote({ radius, speed, color, size, phase }: { radius: number; speed: number; color: string; size: number; phase: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + phase;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 1.3) * 0.4;
    }
  });
  return (
    <Trail width={0.6} length={4} color={color} attenuation={(t) => t * t}>
      <mesh ref={ref}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </Trail>
  );
}
