import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
// import { useControls } from 'leva';
import { rocketSettings } from '../config/rocketSettings';
import { useState, useEffect } from 'react';

// 3D Rocket component with modular settings
function Rocket() {
    const rocketRef = useRef<THREE.Group>(null);
    const gltf = useGLTF('/models/rocket.glb');
    
    // Dynamic scale based on screen size
    const [scale, setScale] = useState(rocketSettings.scale);
    
    useEffect(() => {
        const updateScale = () => {
            const isDesktop = window.innerWidth >= 1024;
            setScale(isDesktop ? 1.5 : 1.8);
        };
        
        updateScale();
        window.addEventListener('resize', updateScale);
        
        return () => window.removeEventListener('resize', updateScale);
    }, []);
    
    // Use modular settings instead of Leva controls
    const settings = rocketSettings;
    
    /* COMMENTED OUT - Leva controls for fine-tuning the rocket
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
    */

    // Animation with modular settings
    useFrame((state) => {
        if (rocketRef.current) {
            // Y rotation animation
            if (settings.animation.speed > 0) {
                rocketRef.current.rotation.y = settings.rotation.y + Math.sin(state.clock.elapsedTime * settings.animation.speed) * settings.animation.rotationIntensity;
            }
            // X-axis propulsion motion (faster left, slower right like rocket thrust)
            if (settings.animation.floatXIntensity > 0) {
                const time = state.clock.elapsedTime * settings.animation.floatSpeed;
                
                // Create a perfect loop with asymmetric timing
                const cycle = time % (2 * Math.PI); // Complete cycle from 0 to 2π
                let thrustWave = 0;
                
                if (cycle < Math.PI * 0.3) {
                    // Fast left thrust (30% of cycle)
                    const fastPhase = cycle / (Math.PI * 0.3); // 0 to 1
                    thrustWave = Math.sin(fastPhase * Math.PI) * settings.animation.floatXIntensity;
                } else {
                    // Slow right drift back (70% of cycle)
                    const slowPhase = (cycle - Math.PI * 0.3) / (Math.PI * 1.7); // 0 to 1
                    thrustWave = Math.sin(Math.PI + slowPhase * Math.PI) * settings.animation.floatXIntensity;
                }
                
                rocketRef.current.position.x = settings.position.x + thrustWave;
            }
        }
    });

    return (
        <Float
            speed={settings.animation.floatSpeed}
            rotationIntensity={0.3}
            floatIntensity={settings.animation.floatIntensity}
        >
            <group 
                ref={rocketRef} 
                scale={[scale, scale, scale]} 
                position={[0, settings.position.y, settings.position.z]}
                rotation={[settings.rotation.x, settings.rotation.y, settings.rotation.z]}
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
    // Use modular settings instead of Leva controls
    const settings = rocketSettings;
    
    /* COMMENTED OUT - Camera and lighting controls
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
        ambientIntensity: { value: 2, min: 0, max: 2, step: 0.1 },
        ambientColor: { value: "#792ca0" },
        // Directional light
        dirIntensity: { value: 3, min: 0, max: 3, step: 0.1 },
        dirPositionX: { value: 3, min: -10, max: 10, step: 0.5 },
        dirPositionY: { value: 1.5, min: -10, max: 10, step: 0.5 },
        dirPositionZ: { value: 3.5, min: -10, max: 10, step: 0.5 },
        dirColor: { value: "#ffffff" },
        // Point light  
        pointIntensity: { value: 0.6, min: 0, max: 3, step: 0.1 },
        pointPositionX: { value: -5, min: -10, max: 10, step: 0.5 },
        pointPositionY: { value: 5, min: -10, max: 10, step: 0.5 },
        pointPositionZ: { value: 5, min: -10, max: 10, step: 0.5 },
        pointColor: { value: "#29ffe7" },
        // Environment
        environmentPreset: { 
            value: "city", 
            options: ["studio", "sunset", "dawn", "night", "warehouse", "forest", "apartment", "city", "park", "lobby"] 
        },
    });
    */

    return (
        <div className={`relative ${className}`}>
            <Canvas
                camera={{ 
                    position: [settings.camera.position.x, settings.camera.position.y, settings.camera.position.z], 
                    fov: settings.camera.fov,
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
                    <ambientLight intensity={settings.lighting.ambient.intensity} color={settings.lighting.ambient.color} />
                    <directionalLight 
                        position={[settings.lighting.directional.position.x, settings.lighting.directional.position.y, settings.lighting.directional.position.z]} 
                        intensity={settings.lighting.directional.intensity} 
                        color={settings.lighting.directional.color}
                        castShadow
                    />
                    <pointLight 
                        position={[settings.lighting.point.position.x, settings.lighting.point.position.y, settings.lighting.point.position.z]} 
                        intensity={settings.lighting.point.intensity} 
                        color={settings.lighting.point.color}
                    />
                    
                    {/* Controllable environment */}
                    <Environment preset={settings.environment.preset} />
                    
                    {/* 3D Rocket */}
                    <Rocket />
                </Suspense>
            </Canvas>
        </div>
    );
}

// Preload the optimized model for better performance
useGLTF.preload('/models/rocket.glb');