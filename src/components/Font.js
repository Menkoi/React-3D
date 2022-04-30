import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Html} from "@react-three/drei";

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
        ABOUT ME
      </Text>
    </mesh>
  );
}

function AboutMe() {
  const ref = useRef()
  useFrame(() => {
      ref.current.rotation.y =-0.03;  
  });

  return (
    <group ref={ref}>
      <mesh >
      <Text
        position={[-8.7,10,-60]}
        scale={[10, 10, 10]}
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        ABOUT ME
      </Text>
      <Html  position={[-11,9.5,-60]} 
      style={{
            color: "white",
            fontWeight:'Bold',
          }}>
            <div className="about">
            <p>
            My name is Brandon Burton. I am a front end developer with a background of leadership
            skills from the US Army and life-long dedication to learning. Effective at 
            combining creativity and problem solving to develop
            user-friendly applications. Known for going the extra mile to meet deadlines to achieve that goal.
             </p>
            </div>
           
          </Html>
    </mesh>

    </group>
    
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
        <AboutMe/>
    </group>
)
    
}

