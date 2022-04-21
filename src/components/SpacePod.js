import React from "react";
import { useGLTF } from "@react-three/drei";
import SpacePod from '../Models/SpacePod.glb';

function SpaceImport(props) {
    const gltf = useGLTF(SpacePod);
    return <primitive object={gltf.scene} scale={[10,10,10]} position={[-4,-10,-20]}/>;
};

function SpaceScene() {
return (
    <SpaceImport />
)
}

export default SpaceScene;