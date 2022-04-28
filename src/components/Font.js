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

function ArrowRightText() {
  const ref = useRef()
  useFrame(() => {
      ref.current.rotation.y =3.5;  
  });

  return (
    <mesh position={[-6, -1.2, 1]} ref={ref}>
      <Text
        scale={[6, 6, 6]}
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        PROJECTS
      </Text>
    </mesh>
  );
}

function ArrowleftText() {
  const ref = useRef()
  useFrame(() => {
      ref.current.rotation.y =3.5;  
  });

  return (
    <mesh position={[-0.4, -1.8, 1]} ref={ref}>
      <Text
        scale={[6, 6, 6]}
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        LOREM IPSUM
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
        <ArrowRightText/>
        <ArrowleftText/>
    </group>
)
    
}

