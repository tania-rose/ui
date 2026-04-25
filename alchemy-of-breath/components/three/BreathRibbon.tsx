"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function BreathRibbon({ color = "#9d4edd", offset = 0, radius = 2.6 }: { color?: string; offset?: number; radius?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  const tubeGeometry = useMemo(() => {
    class SpiralCurve extends THREE.Curve<THREE.Vector3> {
      r: number;
      o: number;
      constructor(r: number, o: number) {
        super();
        this.r = r;
        this.o = o;
      }
      getPoint(t: number, target = new THREE.Vector3()) {
        const angle = t * Math.PI * 6 + this.o;
        const x = Math.cos(angle) * this.r * (1 - t * 0.4);
        const y = (t - 0.5) * 4;
        const z = Math.sin(angle) * this.r * (1 - t * 0.4);
        return target.set(x, y, z);
      }
    }
    return new THREE.TubeGeometry(new SpiralCurve(radius, offset), 200, 0.025, 8, false);
  }, [radius, offset]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.15 + offset;
    const m = meshRef.current.material as THREE.MeshBasicMaterial;
    m.opacity = 0.35 + Math.sin(t * 0.5 + offset) * 0.15;
  });

  return (
    <mesh ref={meshRef} geometry={tubeGeometry}>
      <meshBasicMaterial color={color} transparent opacity={0.5} blending={THREE.AdditiveBlending} />
    </mesh>
  );
}
