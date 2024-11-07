import { useGLTF } from '@react-three/drei'
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Float } from "@react-three/drei";
import CanvasLoader from "../Loader";

function MSPOctagon() {
  const { nodes, materials } = useGLTF('MSP_Octagon_Export.glb')
  return (
    <group dispose={null} scale={[2, 2, 2]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.002']}
      />
    </group>
  )
}

const MSPOctagonCanvas = () => {
    return (
      <div style={{ width: '400px', height: '400px' }}> {}
        <Canvas
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Float speed={3} rotationIntensity={5} floatIntensity={5}>
            <ambientLight intensity={1.5} />
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls enableZoom={false} />
              <MSPOctagon/>
            </Suspense>
            <Preload all />
          </Float>
        </Canvas>
      </div>
    );
  };
  
export default MSPOctagonCanvas;

useGLTF.preload('MSP_Octagon_Export.glb')