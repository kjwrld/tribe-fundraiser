// Rocket 3D Model Configuration
// All default settings for the rocket appearance and behavior

export const rocketSettings = {
  // Rocket Transform
  position: {
    x: 0.3,
    y: 0,
    z: 0.7,
  },
  rotation: {
    x: 0.2,
    y: 1,
    z: 0.1,
  },
  scale: 1.5,

  // Animation Settings
  animation: {
    speed: 0.3,
    rotationIntensity: 0,
    floatSpeed: 1.5,
    floatIntensity: 1.1,
    floatXIntensity: 0.3,
  },

  // Camera Settings
  camera: {
    position: {
      x: 0,
      y: 0,
      z: 5,
    },
    fov: 50,
  },

  // Lighting Configuration
  lighting: {
    ambient: {
      intensity: 2,
      color: "#792ca0",
    },
    directional: {
      intensity: 3,
      position: {
        x: 3,
        y: 1.5,
        z: 3.5,
      },
      color: "#ffffff",
    },
    point: {
      intensity: 0.6,
      position: {
        x: -5,
        y: 5,
        z: 5,
      },
      color: "#29ffe7",
    },
  },

  // Environment Settings
  environment: {
    preset: "city" as const,
  },
} as const;

// Type for the settings (useful for TypeScript)
export type RocketSettings = typeof rocketSettings;