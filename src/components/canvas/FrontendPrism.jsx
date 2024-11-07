import { useGLTF } from '@react-three/drei'
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Float } from "@react-three/drei";
import CanvasLoader from "../Loader";

function FrontendPrism(props) {
  const { nodes, materials } = useGLTF('src/assets/BlenderExports/Frontend_Prism_Export.glb')
  return (
    <group {...props} dispose={null} scale={2}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.001']}
      />
    </group>
  )
}

const FrontendPrismCanvas = () => {
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
            <FrontendPrism/>
          </Suspense>
          <Preload all />
        </Float>
      </Canvas>
    </div>
  );
};

export default FrontendPrismCanvas;

useGLTF.preload('src/assets/BlenderExports/Frontend_Prism_Export.glb')