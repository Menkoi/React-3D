import { Stars } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function StarSpin() {
    const scene = useRef();
    useFrame(() => {
        scene.current.rotation.y += 0.0005;
        scene.current.rotation.x += 0.0002;
        
    });
    return (
        <group ref={scene}>
          <Stars></Stars>
        </group>
    )
}

export default function SpaceBackground() {
    return (
        <group>
            <StarSpin/>
        </group>
    )
}