import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const SkillSphere = ({ position, skill, color }: any) => {
  const groupRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.7} 
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>
    </group>
  );
};

// Custom text rendering without using drei
const SkillLabel = ({ position, text, color }: { position: [number, number, number], text: string, color: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textureRef = useRef<THREE.Texture | null>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const meshRef = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = 256;
    canvas.height = 64;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw text
    ctx.fillStyle = color;
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    
    // Create texture
    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    } else {
      textureRef.current = new THREE.CanvasTexture(canvas);
      materialRef.current = new THREE.MeshBasicMaterial({
        map: textureRef.current,
        transparent: true,
        side: THREE.DoubleSide,
      });
      
      if (meshRef.current && materialRef.current) {
        meshRef.current.material = materialRef.current;
      }
    }
  }, [text, color]);
  
  return (
    <>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <mesh ref={meshRef} position={position}>
        <planeGeometry args={[1, 0.25]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
      </mesh>
    </>
  );
};

const WebGLContextHandler = () => {
  const { gl } = useThree();
  
  useEffect(() => {
    const handleContextLost = (event: Event) => {
      console.log('WebGL context lost, attempting to restore...');
      event.preventDefault();
    };

    const handleContextRestored = () => {
      console.log('WebGL context restored');
    };

    const canvas = gl.domElement;
    canvas.addEventListener('webglcontextlost', handleContextLost);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
    };
  }, [gl]);

  return null;
};

const Skills3D = () => {
  const skills = [
    { name: "React", position: [-2, 0, 0], color: "#61DAFB" },
    { name: "TypeScript", position: [2, 1, -1], color: "#3178C6" },
    { name: "Node.js", position: [0, -1, 1], color: "#339933" },
    { name: "Three.js", position: [-1, 1.5, 0.5], color: "#000000" },
    { name: "Python", position: [1.5, -0.5, -0.5], color: "#3776AB" },
  ];

  return (
    <Canvas 
      camera={{ position: [0, 0, 6], fov: 75 }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        gl.setClearColor(0x000000, 0);
      }}
      gl={{ 
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      }}
    >
      <WebGLContextHandler />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#8B5CF6" />
      
      {skills.map((skill, index) => (
        <group key={index}>
          <SkillSphere
            position={skill.position}
            skill={skill.name}
            color={skill.color}
          />
          <SkillLabel 
            position={[skill.position[0], skill.position[1] - 1.2, skill.position[2]]} 
            text={skill.name}
            color={skill.color}
          />
        </group>
      ))}
    </Canvas>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 88 },
        { name: "Three.js", level: 80 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "MongoDB", level: 82 },
        { name: "PostgreSQL", level: 78 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 85 },
        { name: "Jest", level: 82 },
        { name: "CI/CD", level: 78 }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: -90 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-24 pb-16 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* 3D Skills Visualization */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-96 mb-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-red-600/20 rounded-3xl blur-xl" />
          <div className="relative h-full rounded-3xl overflow-hidden">
            <Skills3D />
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + categoryIndex * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-white">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-yellow-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-yellow-400 to-red-400 h-full rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 animate-pulse opacity-75" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
