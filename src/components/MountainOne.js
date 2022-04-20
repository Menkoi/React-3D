import React from "react";
import { useGLTF } from "@react-three/drei";
import Mountain from '../Models/MountainOne.glb';

function MountainImport(props) {
    const gltf = useGLTF(Mountain);
    return <primitive object={gltf.scene} scale={[0.01,0.01,0.01]} position={[-50,2,35]}/>;
};

function MountainOne() {
return (
    <MountainImport />
)
}

export default MountainOne;