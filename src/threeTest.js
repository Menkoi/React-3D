import React, {Suspense, useRef} from "react";
import {Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import SpaceScene from './components/SpacePod';
//import SpaceBackground from './components/SpaceBackground';


function StarSpin() {
    const scene = useRef();
    useFrame(() => {
        scene.current.rotation.y += 0.0005;
        scene.current.rotation.x += 0.0002;
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
        <Canvas camera={{ position: [-10, 10, -30], fov: 70}}>
          <color attach="background" args={['#161c24']}/>
          <ambientLight intensity={0.01} />
          <pointLight position={[-10, 10, 10]} />
          <Suspense fallback={null}>
            <SpaceScene></SpaceScene>
            <StarSpin></StarSpin>
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    );
}
