
import React from "react";
import { useGLTF } from "@react-three/drei";
import LowGrass from '../Models/LowGrass.glb';

function GrassImport1(props) {
    const gltf = useGLTF(LowGrass);
    return <primitive object={gltf.scene} scale={[1,1,1]} position={[9,2,9]}/>;
};

function Grass() {
return (
    <GrassImport1 />
)
}

export default Grass;

