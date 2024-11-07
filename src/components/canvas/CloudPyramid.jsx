import { useGLTF } from '@react-three/drei'
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Float } from "@react-three/drei";
import CanvasLoader from "../Loader";

function CloudPyramid(props) {
  const { nodes, materials } = useGLTF('Cloud_Pyramid_Export.glb')
  return (
    <group {...props} dispose={null} scale={2.5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={materials['Material.001']}
      />
    </group>
  )
}

const CloudPyramidCanvas = () => {
    return (
      <div style={{ width: '400px', height: '400px' }}> {}
        <Canvas
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Float speed={3} rotationIntensity={5} floatIntensity={2}>
          <ambientLight intensity={1.5} />
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls enableZoom={false} />
              <CloudPyramid/>
            </Suspense>
            <Preload all />
          </Float>
        </Canvas>
      </div>
    );
  };
  
export default CloudPyramidCanvas;
  

useGLTF.preload('Cloud_Pyramid_Export.glb')