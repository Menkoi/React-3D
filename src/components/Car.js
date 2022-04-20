import React from "react";
import { useGLTF } from "@react-three/drei";
import SnowCar from '../Models/SnowCar.glb';

function SnowCarImport(props) {
    const gltf = useGLTF(SnowCar);
    return <primitive object={gltf.scene} scale={[1,1,1]} position={[30,1.40,-35]}/>;
};

function Car() {
return (
    <SnowCarImport />
)
}

export default Car;
