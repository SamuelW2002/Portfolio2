import { useGLTF } from '@react-three/drei'
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Float } from "@react-three/drei";
import CanvasLoader from "../Loader";

function FrontendPrism(props) {
  const { nodes, materials } = useGLTF('src/assets/BlenderExports/Frontend_Prism_Export.glb')
  return (
<group {...props} dispose={null} scale={[2, 2, 2]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.React2.geometry}
        material={materials.React2}
        position={[0, 0.752, 0]}
        rotation={[-Math.PI, 1.066, -Math.PI]}
        scale={[2, 1, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.html.geometry}
        material={materials.html}
        position={[0.87, 0, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.css.geometry}
        material={materials.css}
        position={[0.45, 0, 0.76]}
        rotation={[Math.PI / 2, 0, -0.506]}
      />
      <mesh
        geometry={nodes.javascript.geometry}
        material={materials.javascript}
        position={[-0.453, 0.025, 0.756]}
        rotation={[Math.PI / 2, 0, -2.611]}
      />
      <mesh
        geometry={nodes.vueLogo.geometry}
        material={materials.vueLogo}
        position={[0, -0.76, 0]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[1.14, 1, 1.2]}
      />
      <mesh
        geometry={nodes.angularLogo.geometry}
        material={materials.angularLogo}
        position={[0.45, 0, -0.75]}
        rotation={[Math.PI / 2, 0, -2.601]}
        scale={[1.2, 1, 1.2]}
      />
      <mesh
        geometry={nodes.blender.geometry}
        material={materials.blender}
        position={[-0.45, 0, -0.75]}
        rotation={[Math.PI / 2, 0, -0.506]}
      />
      <mesh
        geometry={nodes.ThreeJS.geometry}
        material={materials.ThreeJS}
        position={[-0.87, 0, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.5, 1, 1.5]}
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
          <ambientLight intensity={0.5} />
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