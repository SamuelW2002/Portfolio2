import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

function Cube(props) {
    const [right, left, top, bottom, front, back] = useTexture(
      [
        props.imgUrls[5].icon, // Right
        props.imgUrls[4].icon, // Left
        props.imgUrls[2].icon, // Top
        props.imgUrls[3].icon, // Bottom
        props.imgUrls[1].icon, // Back
        props.imgUrls[0].icon, // Front
      ]
    );
  
    return (
      <Float speed={3} rotationIntensity={5} floatIntensity={5}>
        <ambientLight intensity={0.5} />

        <mesh castShadow receiveShadow scale={4}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshBasicMaterial attach="material-0" map={right} />   {/* Right face */}
          <meshBasicMaterial attach="material-1" map={left} />    {/* Left face */}
          <meshBasicMaterial attach="material-2" map={top} />     {/* Top face */}
          <meshBasicMaterial attach="material-3" map={bottom} />  {/* Bottom face */}
          <meshBasicMaterial attach="material-4" map={front} />   {/* Front face */}
          <meshBasicMaterial attach="material-5" map={back} />    {/* Back face */}
        </mesh>
      </Float>
    );
  }

  const CubeCanvas = ({ icons }) => {
    return (
      <div style={{ width: '400px', height: '400px' }}> {/* Set the canvas size here */}
        <Canvas
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Cube imgUrls={icons} />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    );
  };

export default CubeCanvas;
