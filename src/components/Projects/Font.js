import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text} from "@react-three/drei";

// Projects Header
function ProjectText() {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.y = -0.07;  
    });

    return (
      <mesh position={[-6.9,10,-60]} ref={ref}>
        <Text
          scale={[13, 13, 13]}
          color="#3ccfe3" 
          anchorX="center" 
          anchorY="middle" 
        >
          PROJECTS
        </Text>
        <Text
        position={[-1,19,-60]}
        scale={[15, 15, 15]}
        color="#3ccfe3" 
        anchorX="center" 
        anchorY="middle"
      >
        CLICK UNDER TO SEE THE GITHUB REPO
      </Text>
      <Text
        position={[-1.2,17,-60]}
        scale={[15, 15, 15]}
        color="#3ccfe3" 
        anchorX="center" 
        anchorY="middle"
      >
        CLICK THE BOX TO SEE THE LIVE SITE
      </Text>
      </mesh>
    );
}

// Contact Header
function ContactText() {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.y = -0.07;  
    });

    return (
      <mesh position={[-6.9,1.7,-60]} ref={ref}>
        <Text
          scale={[12, 12, 12]}
          color="#3ccfe3" 
          anchorX="center" 
          anchorY="middle"
        >
          CONTACT
        </Text>
      </mesh>
    );
}

// Projects Arrow Right
function ArrowRightText() {
  const ref = useRef()
  useFrame(() => {
      ref.current.rotation.y =3.5;  
  });

  return (
    <mesh position={[-6, -1.2, 1]} ref={ref}>
      <Text
        scale={[6, 6, 6]}
        color="#3ccfe3"
        anchorX="center"
        anchorY="middle"
      >
        ABOUT
      </Text>
    </mesh>
  );
}

// About Me Arrow Left
function ArrowleftText() {
  const ref = useRef()
  useFrame(() => {
      ref.current.rotation.y =3.5;  
  });

  return (
    <mesh position={[-0.4, -1.8, 1]} ref={ref}>
      <Text
        scale={[6, 6, 6]}
        color="#3ccfe3"
        anchorX="center"
        anchorY="middle"
      >
        PROJECTS
      </Text>
    </mesh>
  );
}

export default function Font() {
return (
    <group>
        <ProjectText/>

        <ContactText/>
        <ArrowRightText/>
        <ArrowleftText/>

    </group>
)}

