import React, {useRef} from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

function ProjectText() {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.y =4.7;  
    });

    return (
      <mesh position={[9.2, 2.2, -0.4]} ref={ref}>
        <Text
          scale={[2, 2, 2]}
          color="white" // default
          anchorX="center" // default
          anchorY="middle" // default
        >
          Past Projects
        </Text>
      </mesh>
    );
}

function ContactText() {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.y =4.7;  
    });

    return (
      <mesh position={[9.2, 0.9, -0.4]} ref={ref}>
        <Text
          scale={[2, 2, 2]}
          color="white" // default
          anchorX="center" // default
          anchorY="middle" // default
        >
          Contact
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

