import React, {Suspense, useRef} from "react";
import {Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sky, Box} from "@react-three/drei";
import Snow from './components/Snow';
import Car from './components/Car';
import MountainOne from './components/MountainOne'


function ModelSpin() {
    const scene = useRef();
    useFrame(() => {
        scene.current.rotation.y += 0.04;
        scene.current.rotation.x += 0.04;
        scene.current.rotation.z += 0.04;
    });
    return (
        <group ref={scene}>

        </group>
    )
}

  
 export default function ThreeTest() {
    return (
      <div className="MainTest">
        <h1>Lorem Ipsum</h1>
        <Canvas camera={{ position: [-10, 15, 15], fov: 50 }}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Box>
            <meshPhongMaterial attach="material" color="red"></meshPhongMaterial>
            </Box>
              <Snow></Snow>
              <MountainOne></MountainOne>
              <Car></Car>
            <Sky></Sky>
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    );
}
