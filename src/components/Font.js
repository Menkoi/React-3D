import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

function ProjectText() {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.y =3.5;  
    });

    return (
      <mesh position={[-29.2, 46.5, -20]} ref={ref}>
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

function Info() {
  const ref = useRef()
  useFrame(() => {
      ref.current.rotation.y =3.5;  
  });

  return (
    <mesh  ref={ref}>
      <Text
        position={[19.5,60,-20]}
        scale={[12, 12, 12]}
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        CLICK UNDER TO SEE THE GITHUB REPO
      </Text>
      <Text
        position={[19.5,62,-20]}
        scale={[12, 12, 12]}
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        CLICK THE BOX TO SEE THE LIVE SITE
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
      <mesh position={[-29.2, 36.5, -20]} ref={ref}>
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
        <Info/>
        <ContactText/>
    </group>
)
    
}

