import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useControls } from 'leva';

// 3D Rocket component with Leva controls
function Rocket() {
    const rocketRef = useRef<THREE.Group>(null);
    const gltf = useGLTF('/models/rocket.glb');
    
    // Leva controls for fine-tuning the rocket
    const {
        // Position controls
        positionX,
        positionY,
        positionZ,
        // Rotation controls
        rotationX,
        rotationY,
        rotationZ,
        // Scale controls
        scale,
        // Animation controls
        animationSpeed,
        rotationIntensity,
        floatSpeed,
        floatIntensity,
        floatXIntensity,
    } = useControls('🚀 Rocket Controls', {
        // Position
        positionX: { value: 0.3, min: -5, max: 5, step: 0.1 },
        positionY: { value: 0, min: -3, max: 3, step: 0.1 },
        positionZ: { value: 0.7, min: -2, max: 2, step: 0.1 },
        // Rotation (static)
        rotationX: { value: 0.2, min: -Math.PI, max: Math.PI, step: 0.1 },
        rotationY: { value: 1, min: -Math.PI, max: Math.PI, step: 0.1 },
        rotationZ: { value: 0.1, min: -Math.PI, max: Math.PI, step: 0.1 },
        // Scale
        scale: { value: 1.5, min: 0.5, max: 3, step: 0.1 },
        // Animation
        animationSpeed: { value: 0.3, min: 0, max: 2, step: 0.1 },
        rotationIntensity: { value: 0, min: 0, max: 0.5, step: 0.01 },
        floatSpeed: { value: 1.5, min: 0.5, max: 3, step: 0.1 },
        floatIntensity: { value: 1.1, min: 0, max: 2, step: 0.1 },
        floatXIntensity: { value: 0.3, min: 0, max: 1, step: 0.05 },
    });

    // Animation with customizable speed and intensity
    useFrame((state) => {
        if (rocketRef.current) {
            // Y rotation animation
            if (animationSpeed > 0) {
                rocketRef.current.rotation.y = rotationY + Math.sin(state.clock.elapsedTime * animationSpeed) * rotationIntensity;
            }
            // X-axis propulsion motion (faster left, slower right like rocket thrust)
            if (floatXIntensity > 0) {
                const time = state.clock.elapsedTime * floatSpeed * 0.6;
                // Asymmetric wave: fast left thrust, slow drift back
                const thrustWave = Math.sin(time) > 0 
                    ? Math.sin(time * 2.5) * floatXIntensity // Fast left propulsion
                    : Math.sin(time * 0.7) * floatXIntensity * 0.5; // Slow right drift
                rocketRef.current.position.x = positionX + thrustWave;
            }
        }
    });

    return (
        <Float
            speed={floatSpeed}
            rotationIntensity={0.3}
            floatIntensity={floatIntensity}
        >
            <group 
                ref={rocketRef} 
                scale={[scale, scale, scale]} 
                position={[0, positionY, positionZ]}
                rotation={[rotationX, rotationY, rotationZ]}
            >
                <primitive object={gltf.scene.clone()} />
            </group>
        </Float>
    );
}

// Loading fallback component
function RocketLoader() {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="animate-pulse">
                <div className="w-32 h-48 bg-purple-300/20 rounded-lg"></div>
            </div>
        </div>
    );
}

interface R3FRocketModelProps {
    className?: string;
}

export function R3FRocketModel({ className = "" }: R3FRocketModelProps) {
    // Camera and lighting controls
    const {
        // Camera
        cameraX,
        cameraY,
        cameraZ,
        fov,
        // Ambient light
        ambientIntensity,
        ambientColor,
        // Directional light
        dirIntensity,
        dirPositionX,
        dirPositionY,
        dirPositionZ,
        dirColor,
        // Point light
        pointIntensity,
        pointPositionX,
        pointPositionY,
        pointPositionZ,
        pointColor,
        // Environment
        environmentPreset,
    } = useControls('🎬 Scene Controls', {
        // Camera
        cameraX: { value: 0, min: -10, max: 10, step: 0.5 },
        cameraY: { value: 0, min: -10, max: 10, step: 0.5 },
        cameraZ: { value: 5, min: 1, max: 15, step: 0.5 },
        fov: { value: 50, min: 20, max: 120, step: 5 },
        // Ambient light
        ambientIntensity: { value: 0, min: 0, max: 2, step: 0.1 },
        ambientColor: { value: "#aa00ff" },
        // Directional light
        dirIntensity: { value: 0, min: 0, max: 3, step: 0.1 },
        dirPositionX: { value: 5, min: -10, max: 10, step: 0.5 },
        dirPositionY: { value: 5, min: -10, max: 10, step: 0.5 },
        dirPositionZ: { value: 5, min: -10, max: 10, step: 0.5 },
        dirColor: { value: "#ffffff" },
        // Point light  
        pointIntensity: { value: 0.6, min: 0, max: 3, step: 0.1 },
        pointPositionX: { value: -5, min: -10, max: 10, step: 0.5 },
        pointPositionY: { value: 5, min: -10, max: 10, step: 0.5 },
        pointPositionZ: { value: 5, min: -10, max: 10, step: 0.5 },
        pointColor: { value: "#29ffe7" },
        // Environment
        environmentPreset: { 
            value: "studio", 
            options: ["studio", "sunset", "dawn", "night", "warehouse", "forest", "apartment", "city", "park", "lobby"] 
        },
    });

    return (
        <div className={`relative ${className}`}>
            <Canvas
                camera={{ 
                    position: [cameraX, cameraY, cameraZ], 
                    fov: fov,
                    near: 0.1,
                    far: 1000 
                }}
                style={{ background: 'transparent' }}
                gl={{ 
                    antialias: true, 
                    alpha: true,
                    powerPreference: "high-performance"
                }}
            >
                <Suspense fallback={null}>
                    {/* Controllable lighting */}
                    <ambientLight intensity={ambientIntensity} color={ambientColor} />
                    <directionalLight 
                        position={[dirPositionX, dirPositionY, dirPositionZ]} 
                        intensity={dirIntensity} 
                        color={dirColor}
                        castShadow
                    />
                    <pointLight 
                        position={[pointPositionX, pointPositionY, pointPositionZ]} 
                        intensity={pointIntensity} 
                        color={pointColor}
                    />
                    
                    {/* Controllable environment */}
                    <Environment preset={environmentPreset as any} />
                    
                    {/* 3D Rocket */}
                    <Rocket />
                </Suspense>
            </Canvas>
        </div>
    );
}

// Preload the optimized model for better performance
useGLTF.preload('/models/rocket.glb');