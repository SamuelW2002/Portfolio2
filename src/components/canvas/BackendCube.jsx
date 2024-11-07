import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

function BackendCube(props) {
  const [right, left, top, bottom, front, back] = useTexture(
    [
      props.imgUrls[5].icon,
      props.imgUrls[4].icon,
      props.imgUrls[2].icon,
      props.imgUrls[3].icon,
      props.imgUrls[1].icon,
      props.imgUrls[0].icon,
    ]
  );
  
  return (
    <Float speed={3} rotationIntensity={5} floatIntensity={5}>
      <ambientLight intensity={0.5} />

      <mesh castShadow receiveShadow scale={4}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshBasicMaterial attach="material-0" map={right} />   {}
        <meshBasicMaterial attach="material-1" map={left} />    {}
        <meshBasicMaterial attach="material-2" map={top} />     {}
        <meshBasicMaterial attach="material-3" map={bottom} />  {}
        <meshBasicMaterial attach="material-4" map={front} />   {}
        <meshBasicMaterial attach="material-5" map={back} />    {}
      </mesh>
    </Float>
  );
}

  const BackendCubeCanvas = ({ icons }) => {
    return (
      <div style={{ width: '400px', height: '400px' }}> {}
        <Canvas
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <BackendCube imgUrls={icons} />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    );
  };

export default BackendCubeCanvas;
