import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";
import {MeshBasicMaterial } from 'three';

// No longer used in the code but left in here for documentation purposes of what was tried

function PentagonalPrism(props) {
    console.log(props.imgUrls[0].icon)
    const background = useTexture(props.imgUrls[0].icon)
    console.log(background)
    
    const [right, left, top, bottom, front, back] = useTexture(
      [
        props.imgUrls[5].icon, // Right
        props.imgUrls[5].icon, // Right
        props.imgUrls[4].icon, // Left
        props.imgUrls[2].icon, // Top
        props.imgUrls[3].icon, // Bottom
        props.imgUrls[1].icon, // Back
        props.imgUrls[0].icon, // Front
      ]
    );

    const material1 = new MeshBasicMaterial({map: front })
    console.log(material1)

    const vertices = new Float32Array([
      //Changing the second number from 0.1 to 1 and -0.1 to -1 everywhere increases the distance between top and bottom prism by moving every single point
      // Top pentagon vertices
      2, 1, 0,           // Vertex 0
      0.618, 1, 1.902,   // Vertex 1
      -1.618, 1, 1.176,  // Vertex 2
      -1.618, 1, -1.176, // Vertex 3
      0.618, 1, -1.902,  // Vertex 4
      // Bottom pentagon vertices (height is -0.5)
      2, -1, 0,          // Vertex 5
      0.618, -1, 1.902,   // Vertex 6
      -1.618, -1, 1.176,  // Vertex 7
      -1.618, -1, -1.176, // Vertex 8
      0.618, -1, -1.902   // Vertex 9
    ]);
  
    //when top pentagon is
    //0, 1, 2
    //0, 2, 3
    //0, 3, 4
    //it faces inwards making it look like it is missing

    const faces = new Uint16Array([
      // Top pentagon face
      2, 1, 0, //connecting vertice 0, 1 and 2 creates a triangle wich is a face
      3, 2, 0,
      4, 3, 0, //1 pentagon exists out of 3 triangles

      // Bottom pentagon face
      5, 6, 7,
      5, 7, 8,
      5, 8, 9,

      // Side faces
      // A rectangular side can be drawn using only 2 triangles
      //side one:
      0, 1, 6,
      0, 6, 5,
    
      1, 2, 7,
      1, 7, 6,
    
      2, 3, 8,
      2, 8, 7,
    
      3, 4, 9,
      3, 9, 8,
    
      4, 0, 5,
      4, 5, 9,
  ]);
  
  const normals = new Float32Array([
    // Normals for top pentagon
    0, 0, 1, // Vertex 0
    0, 0, 1, // Vertex 1
    0, 0, 1, // Vertex 2
    0, 0, 1, // Vertex 3
    0, 0, 1, // Vertex 4
    // Normals for bottom pentagon
    0, 0, -1, // Vertex 5
    0, 0, -1, // Vertex 6
    0, 0, -1, // Vertex 7
    0, 0, -1, // Vertex 8
    0, 0, -1, // Vertex 9
    // Normals for side faces (simplified for demonstration)
    1, 0, 0,  // Side face normals
    0.309, 0, 0.951,
    -0.809, 0, 0.588,
    -0.809, 0, -0.588,
    0.309, 0, -0.951,
  ]);

  const uvs = new Float32Array([
    0.5, 1,   // Vertex 0
    1, 0,     // Vertex 1
    0.5, 0,   // Vertex 2
    0, 0,     // Vertex 3
    0, 1,     // Vertex 4
    // Add UVs for the bottom and sides similarly...
]);
  
  
    return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow>
          <meshBasicMaterial attach="material-0" map={background}/>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={vertices}
              count={vertices.length / 3}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-normal"
              array={normals}
              count={normals.length / 3}
              itemSize={3}
            />
            <bufferAttribute
              attach="index"
              array={faces}
              count={faces.length}
              itemSize={1}
            />
            <bufferAttribute
              attach="attributes-uv"
              array={uvs} // Make sure to define UVs for your geometry
              count={uvs.length / 2}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>
      </Float>
    );
  }
  // This between buffergeometry and mesh allows for solid colors to be used, using textures so removing it
  // <meshStandardMaterial
  //  vertexColors={true} //allow colors to be used like in the attribute above
  // /> 

  // const colors = new Float32Array([
  //   ...new Color(0xff0000).toArray(), // Red
  //   ...new Color(0x00ff00).toArray(), // Green
  //   ...new Color(0x0000ff).toArray(), // Blue
  //   ...new Color(0xffff00).toArray(), // Yellow
  //   ...new Color(0xff00ff).toArray(), // Magenta
  //   ...new Color(0x00ffff).toArray(), // Cyan
  //   ...new Color(0xffffff).toArray(), // White
  //   ...new Color(0x808080).toArray(), // Gray
  //   ...new Color(0xffa500).toArray(), // Orange
  //   ...new Color(0x800080).toArray(), // Purple
  //   ...new Color(0x008000).toArray(), // Dark Green
  //   ...new Color(0x000080).toArray(), // Navy
  //   ...new Color(0x800000).toArray(), // Maroon
  //   ...new Color(0x008080).toArray(), // Teal
  //   ...new Color(0x808000).toArray(), // Olive
  //   ...new Color(0x000000).toArray()  // Black
  // ]);
  
  const PentagonalPrismCanvas = ({icons}) => {
    return (
      <div style={{ width: '400px', height: '400px' }}> {/* Set the canvas size here */}
        <Canvas
          frameloop="demand"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />} >
            <OrbitControls enableZoom={false} />
            <PentagonalPrism imgUrls={icons}/>
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    );
  };
  
  export default PentagonalPrismCanvas;
