import React, { useRef, useState} from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Cylinder } from "@react-three/drei";

import { TextureLoader } from 'three/src/loaders/TextureLoader'; 
import Github from '../img/github-logo.png';
import LinkedIn from '../img/linkedin-logo.png';
import Spar from '../img/spar_testing.jpg'


 function GitHub() {
    const ref = useRef();
    const [hover, set] = useState(false);
    const texture = useLoader(TextureLoader, Github)

    useFrame(() => {
      let scale = (ref.current.scale.x +=
        ((hover ? 1 : 0.8) - ref.current.scale.x) * 0.1);
      ref.current.scale.set(scale, scale, scale);
      ref.current.position.x = -26;
      ref.current.position.y = 35;
      ref.current.position.z = -20;

      ref.current.rotation.z = 1.6;
      ref.current.rotation.y = -1.1;

    });

    return (
      <group ref={ref}>
        <Cylinder
          onClick={(e) => { 
            e.Github(
              window.open('https://github.com/Menkoi')
            )
            console.log("Box Clicked", e);
          }}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
          castShadow
        />

        <mesh>
          <cylinderBufferGeometry />
          <meshStandardMaterial color={"white"} map={texture} />
        </mesh>
      </group>
    );
}

function LinkIn() {
  const ref = useRef();
  const [hover, set] = useState(false);
  const texture = useLoader(TextureLoader, LinkedIn)

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1 : 0.8) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -29.1;
    ref.current.position.y =35.2;
    ref.current.position.z = -20;

    ref.current.rotation.z = 1.6;
    ref.current.rotation.y = -1.2;
  });

  return (
    <group ref={ref}>
      <Cylinder
        onClick={(e) => {
          e.LinkIn(
            window.open('https://www.linkedin.com/in/brandon-burton-9b59a2215/')
          )
          console.log("Box Clicked", e);
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />

      <mesh>
        <cylinderBufferGeometry />
        <meshStandardMaterial color={"white"} map={texture}/>
      </mesh>
    </group>
  );
}

function ProjectThree() {
  const ref = useRef();
  const [hover, set] = useState(false);
  const texture = useLoader(TextureLoader, Spar)

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1 : 0.8) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -32;
    ref.current.position.y = 35.4;
    ref.current.position.z = -20;

    ref.current.rotation.z = 1.6;
    ref.current.rotation.y = -1.3;
  });

  return (
    <group ref={ref}>
      <Cylinder
        onClick={(e) => {
          console.log("Box Clicked", e);
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />

      <mesh>
        <cylinderBufferGeometry />
        <meshStandardMaterial color={"white"} map={texture}/>
      </mesh>
    </group>
  );
}


export default function Contact() {
  return(
    <group>
      <GitHub/>
      <LinkIn/>
      <ProjectThree/>
    </group>
  )
}