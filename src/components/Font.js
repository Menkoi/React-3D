import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Text, Html, Box} from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs,
  FaBootstrap, FaNpm, FaGithub,FaFigma} from 'react-icons/fa';
  import Cert from '../img/cert.png'




function ProjectText() {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.y =3.5;  
    });

    return (
      <mesh position={[-29.2, 46.5, -20]} ref={ref}>
        <Text
          scale={[15, 15, 15]}
          color="white" 
          anchorX="center" 
          anchorY="middle" 
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
        color="white" 
        anchorX="center" 
        anchorY="middle"
      >
        CLICK UNDER TO SEE THE GITHUB REPO
      </Text>
      <Text
        position={[19.5,62,-20]}
        scale={[12, 12, 12]}
        color="white" 
        anchorX="center" 
        anchorY="middle"
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
          color="white" 
          anchorX="center" 
          anchorY="middle"
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
        color="white"
        anchorX="center"
        anchorY="middle"
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
        color="white"
        anchorX="center"
        anchorY="middle"
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
        <Text position={[-8.7,10,-60]} scale={[10,10,10]}>
          ABOUT ME
          </Text>
          <Text position={[-8.7,9,-60]} scale={[3,3,4]} >
           My name is Brandon Burton. I am a front end
          </Text>
          <Text position={[-8.7,8.6,-60]} scale={[3,3,4]}>
             developer with a background of leadership skills
             </Text>
             <Text position={[-8.7,8.2,-60]} scale={[3,3,4]}>
             from the US Army and life-long dedication to 
             </Text>
             <Text position={[-8.7,7.8,-60]} scale={[3,3,4]}>
             learning. Effective at combining creativity and
             </Text>
             <Text position={[-8.7,7.4,-60]} scale={[3,3,4]}>
             problem solving to develop user-friendly
             </Text>
             <Text position={[-8.7,7,-60]} scale={[3,3,4]}>
             applications. Known for going the extra mile to 
             </Text>
             <Text position={[-8.7,6.6,-60]} scale={[3,3,4]}>
             meet deadlines to achieve that goal.
             </Text>
             <Text position={[-8.7,5.8,-60]} scale={[6,6,6]}>
           LANGUAGES & TOOLS
          </Text>
          <Html  position={[-11,5.3,-60]}
           style={{
            color: "white",
            padding: '5px',
            display: 'flex',
            margin: 'auto',
            float: "center"
          }}>
            <FaHtml5 size={30}/>
             <FaCss3 size={30}/> 
             <FaJs size={30}/> 
             <FaReact size={30}/> 
             <FaNodeJs size={30}/>
             <FaBootstrap size={30}/> 
             <FaNpm size={30}/> 
             <FaGithub size={30}/>
             <FaFigma size={30}/>
          </Html>
    </mesh>
    </group>
    
  );
}

function Certificate() {
  const ref = useRef();
  const texture = useLoader(TextureLoader, Cert)

  useFrame(() => {
    ref.current.position.x = -6.3;
    ref.current.position.y = 0.8;
    ref.current.position.z = -70;

    ref.current.scale.x = 9;
    ref.current.scale.y = 7;
    ref.current.scale.z = 0.01;

   ref.current.rotation.y += 0.007;
  });

  return (
    <group ref={ref}>
      <Box />
      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial map={texture} />
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
        <Certificate/>
    </group>
)
    
}

