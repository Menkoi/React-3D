import React, {Suspense, useRef } from "react";
import {Canvas, useFrame} from 'react-three-fiber';
import {Sky, OrbitControls, Box} from "@react-three/drei";


const Scene = () => {
    const scene = useRef();
    useFrame(() => {
        scene.current.rotation.y += 0.04;
        scene.current.rotation.x += 0.04;
        scene.current.rotation.z += 0.04;
    });
    return (
        <group ref={scene}>
            <Box>
            <ambientLight intensity={1}></ambientLight>
                <meshPhongMaterial attach="material" color="red"></meshPhongMaterial>
            </Box>
        </group>
    )
}



function ThreeTest() {

    return (
        <div class="MainTest">
           <h1>Lorem Ipsum</h1> 
           <Canvas>
               <Sky></Sky>
               <OrbitControls></OrbitControls>
               <Suspense fallback={null}>
                   <Scene></Scene>
               </Suspense>
           </Canvas>
        </div>
    )
};

export default ThreeTest;