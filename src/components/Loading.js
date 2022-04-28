import React, { useRef } from "react";
import { Html } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'; 
import Earth from '../img/Earth.jpg';

export default function EarthLoading() {
    const scene = useRef();
    const texture = useLoader(TextureLoader, Earth)
    useFrame(() => {
  
      scene.current.rotation.y += 0.006;
    });
    return (
        <group ref={scene}>
            <mesh>
            <pointLight position={[1, 10, 10]} />
          <sphereBufferGeometry />
          <meshStandardMaterial color={"white"} map={texture} />
          <Html  position={[1,1,1]}style={{
            color: "white",
          }}>
            <h1>Loading...</h1>
          </Html>
          </mesh>
        </group>
    )
  }