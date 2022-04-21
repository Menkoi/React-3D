import React, {Suspense, useRef} from "react";
import {Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Box, Stars} from "@react-three/drei";
import SpaceScene from './components/SpacePod';
//import SpaceBackground from './components/SpaceBackground';


function StarSpin() {
    const scene = useRef();
    useFrame(() => {
        scene.current.rotation.y += 0.002;
        //scene.current.rotation.x += 0.002;
        //scene.current.rotation.z += 0.04;
    });
    return (
        <group ref={scene}>
          <Stars></Stars>
        </group>
    )
}

  
 export default function ThreeTest() {
    return (
      <div className="MainTest">
        <h1>Lorem Ipsum</h1>
        <Canvas camera={{ position: [-10, 15, 15], fov: 50 }}>
          <color attach="background" args={['#161c24']}/>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Box>
            <meshPhongMaterial attach="material" color="red"></meshPhongMaterial>
            </Box>
            <SpaceScene></SpaceScene>
            <StarSpin></StarSpin>
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    );
}
