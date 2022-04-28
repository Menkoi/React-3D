import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

function ProjectText() {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.y =3.5;  
    });

    return (
      <mesh position={[-29.2, 45, -20]} ref={ref}>
        <Text
          scale={[15, 15, 15]}
          color="white" // default
          anchorX="center" // default
          anchorY="middle" // default
        >
          PROJECTS
        </Text>
      </mesh>
    );
}

function ContactText() {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.y =3.5;  
    });

    return (
      <mesh position={[-29.2, 37.5, -20]} ref={ref}>
        <Text
          scale={[15, 15, 15]}
          color="white" // default
          anchorX="center" // default
          anchorY="middle" // default
        >
          CONTACT
        </Text>
      </mesh>
    );
}

export default function Font() {
return (
    <group>
        <ProjectText/>
        <ContactText/>
    </group>
)
    
}

