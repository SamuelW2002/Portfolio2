import { useGLTF } from '@react-three/drei'
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Float } from "@react-three/drei";
import CanvasLoader from "../Loader";

function CloudPyramid() {
  const { nodes, materials } = useGLTF('/Cloud_Pyramid_Export.glb')
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

const CloudPyramidCanvas = () => {
    return (
      <div style={{ width: '400px', height: '400px' }}> {}
        <Canvas
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{position:[20,3,5], fov:25}}
        >
          <Float speed={3} rotationIntensity={5} floatIntensity={2}>
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
  

useGLTF.preload('/Cloud_Pyramid_Export.gltf')