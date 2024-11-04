import { useGLTF } from '@react-three/drei'
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Float } from "@react-three/drei";
import CanvasLoader from "../Loader";

function Pyramid(props) {
  const { nodes, materials } = useGLTF('src/assets/BlenderExports/Cloud_Pyramid_Export.glb')
  return (
    <group {...props} dispose={null} scale={2}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={materials['Material.001']}
      />
    </group>
  )
}

const PyramidCanvas = () => {
    return (
      <div style={{ width: '400px', height: '400px' }}> {}
        <Canvas
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Float speed={3} rotationIntensity={5} floatIntensity={5}>
          <ambientLight intensity={0.25 * Math.PI} />
            <spotLight decay={0} position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight decay={0} position={[-10, 0, -5]} angle={0.5} intensity={6} />
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls enableZoom={false} />
              <Pyramid/>
            </Suspense>
            <Preload all />
          </Float>
        </Canvas>
      </div>
    );
  };
  
  export default PyramidCanvas;
  

useGLTF.preload('src/assets/BlenderExports/Cloud_Pyramid_Export.glb')