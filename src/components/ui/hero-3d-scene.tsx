import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Center, OrbitControls, Float, MeshDistortMaterial, Environment, Preload } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';
import { useSpring, animated } from '@react-spring/three';
import { useTheme } from '../../contexts/ThemeContext';

// Individual letter component with animation using 3D geometries
function Letter({ children, position, color, delay = 0 }: { children: string; position: [number, number, number]; color: string; delay?: number }) {
  const meshRef = useRef<Mesh>(null);
  const { mouse } = useThree((state) => ({
    mouse: state.mouse,
  }));

  const [spring, api] = useSpring(() => ({
    position: position,
    rotation: [0, 0, 0],
    scale: 1,
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Mouse interaction
    const x = (mouse.x * 0.5) * 0.3;
    const y = (mouse.y * 0.5) * 0.3;
    
    api.start({
      rotation: [y, x, 0],
    });

    // Gentle floating animation
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.1;
  });

  // Use different geometries for each letter to create visual variety
  const getGeometry = (letter: string) => {
    switch(letter) {
      case 'K': return <boxGeometry args={[0.8, 1, 0.3]} />;
      case 'R': return <cylinderGeometry args={[0.5, 0.5, 1, 8]} />;
      case 'I': return <capsuleGeometry args={[0.3, 0.8, 4, 8]} />;
      case 'S': return <torusGeometry args={[0.4, 0.2, 8, 16]} />;
      case 'H': return <octahedronGeometry args={[0.6]} />;
      default: return <boxGeometry args={[0.8, 1, 0.3]} />;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <animated.mesh
        ref={meshRef}
        position={spring.position as any}
        rotation={spring.rotation as any}
        scale={spring.scale as any}
        onPointerOver={() => api.start({ scale: 1.2 })}
        onPointerOut={() => api.start({ scale: 1 })}
      >
        {getGeometry(children)}
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.3}
          radius={1}
          roughness={0.2}
          metalness={0.8}
          envMapIntensity={1}
        />
      </animated.mesh>
      
      {/* Add text label below each shape */}
      <Suspense fallback={null}>
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.4}
          color={color}
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          {children}
        </Text>
      </Suspense>
    </Float>
  );
}

// Floating particles background
function Particles() {
  const count = 100;
  const { theme } = useTheme();
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.075;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={theme === 'dark' ? '#4a5568' : '#cbd5e0'}
        opacity={0.6}
        transparent
      />
    </points>
  );
}

// Geometric background shapes
function GeometricBackground() {
  const { theme } = useTheme();
  const groupRef = useRef<any>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[-3, 2, -2]}>
          <octahedronGeometry args={[0.4]} />
          <meshStandardMaterial
            color={theme === 'dark' ? '#3b82f6' : '#2563eb'}
            roughness={0.3}
            metalness={0.8}
            wireframe
          />
        </mesh>
      </Float>
      
      <Float speed={3} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[3, -1, -2]}>
          <tetrahedronGeometry args={[0.5]} />
          <meshStandardMaterial
            color={theme === 'dark' ? '#8b5cf6' : '#7c3aed'}
            roughness={0.3}
            metalness={0.8}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.7}>
        <mesh position={[0, -2, -3]}>
          <dodecahedronGeometry args={[0.3]} />
          <meshStandardMaterial
            color={theme === 'dark' ? '#ec4899' : '#db2777'}
            roughness={0.3}
            metalness={0.8}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
}

// Main 3D scene component
export function Hero3DScene() {
  const { theme } = useTheme();
  
  // Check if we're on a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isSmallScreen = window.innerWidth < 768;
  
  const letters = [
    { char: 'K', position: [-2.5, 0, 0] as [number, number, number], color: '#3b82f6' },
    { char: 'R', position: [-1.25, 0, 0] as [number, number, number], color: '#8b5cf6' },
    { char: 'I', position: [0, 0, 0] as [number, number, number], color: '#ec4899' },
    { char: 'S', position: [1.25, 0, 0] as [number, number, number], color: '#f59e0b' },
    { char: 'H', position: [2.5, 0, 0] as [number, number, number], color: '#10b981' },
  ];

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, isSmallScreen ? 6 : 5], fov: isSmallScreen ? 85 : 75 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        className="w-full h-full"
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <Preload all />
          
          {/* Lighting */}
          <ambientLight intensity={theme === 'dark' ? 0.3 : 0.5} />
          <directionalLight position={[10, 10, 5]} intensity={theme === 'dark' ? 0.8 : 1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          
          {/* Environment for reflections - disabled on mobile for performance */}
          {!isMobile && <Environment preset={theme === 'dark' ? 'night' : 'sunset'} />}
          
          {/* Background elements - reduced on mobile */}
          {!isMobile && <Particles />}
          <GeometricBackground />
          
          {/* Main text */}
          <group position={[0, 0, 0]} scale={isSmallScreen ? 0.7 : 1}>
            {letters.map((letter, index) => (
              <Letter
                key={letter.char}
                position={letter.position}
                color={letter.color}
                delay={index * 0.2}
              >
                {letter.char}
              </Letter>
            ))}
          </group>
          
          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
            autoRotate
            autoRotateSpeed={isMobile ? 0.3 : 0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Fallback component for loading or errors
export function Hero3DSceneFallback() {
  const { theme } = useTheme();
  
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-4">
          <div className={`w-full h-full rounded-full border-4 border-t-transparent animate-spin ${
            theme === 'dark' ? 'border-blue-400' : 'border-blue-600'
          }`} />
        </div>
        <p className="text-gray-600 dark:text-gray-400">Loading 3D Scene...</p>
      </div>
    </div>
  );
}

// Static fallback for when WebGL is not supported
export function StaticHeroFallback() {
  const { theme } = useTheme();
  
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse" />
        
        {/* Text display */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative z-10">
          KRISH
        </h1>
        
        {/* Floating elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full blur-md animate-bounce" />
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full blur-md animate-bounce delay-100" />
        <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-500 rounded-full blur-md animate-bounce delay-200" />
      </div>
    </div>
  );
}