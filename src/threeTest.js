import React, {Suspense, useRef} from "react";
import {Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Box, Sky, useGLTF} from "@react-three/drei";
import Shiba from './Models/Shiba-test.glb';


const BoxModel= () => {
    const scene = useRef();
    useFrame(() => {
        scene.current.rotation.y += 0.04;
        scene.current.rotation.x += 0.04;
        scene.current.rotation.z += 0.04;
    });
    return (
        <group ref={scene}>
            <Box >
            <ambientLight intensity={1}></ambientLight>
                <meshPhongMaterial attach="material" color="red"></meshPhongMaterial>
            </Box>
        </group>
    )
};
console.log(BoxModel)


function Model(props) {
    const gltf = useGLTF(Shiba);
    return <primitive object={gltf.scene}/>;
};
console.log(Model)

function ModelSpin() {
    const scene = useRef();
    useFrame(() => {
        scene.current.rotation.y += 0.04;
        scene.current.rotation.x += 0.04;
        scene.current.rotation.z += 0.04;
    });
    return (
        <group ref={scene}>
            <Model></Model>
        </group>
    )
}

  
 export default function ThreeTest() {
    return (
        <div className="MainTest">
           <h1>Lorem Ipsum</h1> 
           <Canvas camera={{ position: [-10, 15, 15], fov: 50 }}>
           <ambientLight intensity={1} />
               <Suspense fallback={null}>
                   <ModelSpin></ModelSpin>
                   <Sky></Sky>
               </Suspense>
               <OrbitControls />
           </Canvas>
        </div>
    );
}
