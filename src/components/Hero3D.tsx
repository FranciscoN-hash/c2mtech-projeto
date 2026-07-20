import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Ring, Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// Orbe de Dados Matemático Otimizado e Seguro
function DataCoreSphere({ count = 2000 }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Geração segura de coordenadas esféricas
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      const r = 1.25; // Raio ideal do orbe
      arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Rotação suave contínua da estrutura de dados
    pointsRef.current.rotation.y = t * 0.12;
    pointsRef.current.rotation.x = Math.sin(t * 0.04) * 0.15;
  });

  return (
    // O componente Points do Drei vincula os atributos nativos sem quebrar o ciclo do Canvas
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#38bdf8"
        size={0.028}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.7}
      />
    </Points>
  );
}

// Anéis Técnicos de Interface de Engenharia
function TechnicalRings() {
  const ringGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ringGroupRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Rotações inversas sincronizadas para efeito futurista premium
    if (ringGroupRef.current.children[0]) ringGroupRef.current.children[0].rotation.z = -t * 0.15;
    if (ringGroupRef.current.children[1]) {
      ringGroupRef.current.children[1].rotation.x = t * 0.08;
      ringGroupRef.current.children[1].rotation.y = t * 0.12;
    }
  });

  return (
    <group ref={ringGroupRef}>
      {/* Anel Externo Ciano */}
      <Ring args={[1.55, 1.57, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.2} side={THREE.DoubleSide} />
      </Ring>
      
      {/* Anel Interno Roxo */}
      <Ring args={[0.95, 0.96, 48]} rotation={[0, Math.PI / 4, 0]}>
        <meshBasicMaterial color="#a855f7" transparent opacity={0.12} side={THREE.DoubleSide} />
      </Ring>
    </group>
  );
}

function Scene() {
  return (
    <>
      {/* Iluminação de Estúdio */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 4]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-3, 2, 2]} intensity={3} color="#38bdf8" distance={8} />
      <pointLight position={[3, -2, 1]} intensity={2} color="#e9d5ff" distance={6} />

      {/* Flutuação Cinematográfica Suave */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.25}>
        <group position={[1.3, 0, 0]}>
          <DataCoreSphere count={2500} />
          <TechnicalRings />
        </group>
      </Float>

      {/* Processamento de Brilho Volumétrico Controlado */}
      <EffectComposer>
        <Bloom luminanceThreshold={0.05} mipmapBlur intensity={1.5} radius={0.6} />
      </EffectComposer>
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 bg-[#070a13]">
      <Canvas camera={{ position: [0, 0, 4.4], fov: 45 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
      {/* Overlay de Mascaramento para Integração Gradual com a UI */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070a13] via-[#070a13]/85 to-transparent pointer-events-none" />
    </div>
  );
}