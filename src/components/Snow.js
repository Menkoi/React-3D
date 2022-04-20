import React from "react";
import { useGLTF } from "@react-three/drei";
import SnowGround from '../Models/Snow.glb';

function SnowImport(props) {
    const gltf = useGLTF(SnowGround);
    return <primitive object={gltf.scene} scale={[15,5,15]}/>;
};

function Snow() {
return (
    <SnowImport />
)
}

export default Snow;