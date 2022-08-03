import React, { useRef }from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Wireframe from '../Models/wireframe.glb';

// Adds wireframe model
function WireImport() {
    //import model 
    const gltf = useGLTF(Wireframe);
    return <primitive object={gltf.scene} 
    scale={[1,1,1]} 
    position={[-35,15,35]}
    rotation={[-3.9,1.6,2.4]}
    color= "red"/>;
};

// Adds slow spin of model
function WireSpin() {
    const scene = useRef();
    useFrame(() => {
        scene.current.position.y += -0.008;
        scene.current.position.x += 0.008;
        
    });
    return (
        <group ref={scene}>
          <WireImport/>
        </group>
    )
}

export default function WirefameBackground() {
return (
    <WireSpin />
)
}

