import React from "react";
import { useGLTF } from "@react-three/drei";
import SpaceModel from '../Models/SpacePod.glb';

function SpaceImport() {
    const gltf = useGLTF(SpaceModel);
    return <primitive object={gltf.scene} scale={[10,10,10]} position={[-4,-10,-15]}/>;
};

export default function SpacePod() {
return (
    <SpaceImport />
)
}

