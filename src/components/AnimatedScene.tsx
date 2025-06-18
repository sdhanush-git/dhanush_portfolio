
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Box, Torus } from "@react-three/drei";
import * as THREE from "three";

const FloatingObject = ({ position, color, type = "sphere" }: any) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {type === "sphere" && <Sphere args={[0.5, 32, 32]} />}
      {type === "box" && <Box args={[0.8, 0.8, 0.8]} />}
      {type === "torus" && <Torus args={[0.6, 0.2, 16, 100]} />}
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  );
};

const AnimatedScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#8B5CF6" />
      
      <FloatingObject position={[-2, 0, 0]} color="#06B6D4" type="sphere" />
      <FloatingObject position={[2, 1, -1]} color="#8B5CF6" type="box" />
      <FloatingObject position={[0, -1, 1]} color="#10B981" type="torus" />
      
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default AnimatedScene;
