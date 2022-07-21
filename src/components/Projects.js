import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Box, Html } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader';

// Importing images for project box
import Spar from '../img/spar_testing.webp';
import BookEnd from '../img/BookEndT.webp';
import RewardBank from '../img/RewardBankT.webp';
import SaveTv from '../img/SaveTv.webp';
import Quiz from '../img/js-logo.webp';
import TaskMaster from '../img/taskmaster.webp';

import GithubRepo from './GithubRepo';

//Spar
 function ProjectOne() {
    const ref = useRef();
    const [hover, set] = useState(false);
    const texture = useLoader(TextureLoader, Spar)

    useFrame(() => {
      let scale = (ref.current.scale.x +=
        ((hover ? 1.4 : 1.2) - ref.current.scale.x) * 0.1);
      ref.current.scale.set(scale, scale, scale);
      ref.current.position.x = -26;
      ref.current.position.y = 42.7;
      ref.current.position.z = -20;
      ref.current.rotation.y = 0.4;
    });

    return (
      <group ref={ref}>
        <Box
          onClick={() => {
              window.open('https://menkoi.github.io/spar/#/')
          }}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
          castShadow
        />
        <mesh>
          <boxBufferGeometry />
          <meshStandardMaterial map={texture} />
          <Html  position={[0.6,1.8,1]}style={{
            color: "white",
            fontWeight:'Bold'
          }}>
            <p>SPAR</p>
          </Html>
        </mesh>
      </group>
    );
}

//BookEnd
function ProjectTwo() {
  const ref = useRef();
  const [hover, set] = useState(false);
  const texture = useLoader(TextureLoader, BookEnd)

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1.3 : 1.1) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -29.2;
    ref.current.position.y = 42.4;
    ref.current.position.z = -20.2;
    ref.current.rotation.y = 0.4;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={() => {
            window.open('http://bookend-recommendations.herokuapp.com/')
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />
      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial map={texture}/>
        <Html  position={[0.7,1.8,1]}style={{
            color: "white",
            fontWeight:'Bold'
          }}>
            <p>BOOKEND</p>
          </Html>
      </mesh>
    </group>
  );
}

//SaveTV
function ProjectThree() {
  const ref = useRef();
  const [hover, set] = useState(false);
  const texture = useLoader(TextureLoader, SaveTv)

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1.3 : 1.1) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -32;
    ref.current.position.y = 42.2;
    ref.current.position.z = -20;
    ref.current.rotation.y = 0.4;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={() => {
            window.open('https://utbootcampgroup2.github.io/SaveTV/')
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />

      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial map={texture} />
        <Html  position={[0.3,1.8,1]}style={{
            color: "white",
            fontWeight:'Bold'
          }}>
            <p>SAVETV</p>
          </Html>
      </mesh>
    </group>
  );
}

//Reward Bank
function ProjectFour() {
  const ref = useRef();
  const [hover, set] = useState(false);
  const texture = useLoader(TextureLoader, RewardBank)

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1.5 : 1.3) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -26;
    ref.current.position.y = 39.2;
    ref.current.position.z = -20;
    ref.current.rotation.y = 0.4;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={() => {
            window.open('https://rocky-dawn-18669.herokuapp.com')
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />
      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial map={texture} />
        <Html  position={[0.7,1.5,1]}style={{
            color: "white",
            fontWeight:'Bold'
          }}>
            <p>SAVETV</p>
          </Html>
      </mesh>
    </group>
  );
}

//Coding Quiz
function ProjectFive() {
  const ref = useRef();
  const [hover, set] = useState(false);
  const texture = useLoader(TextureLoader, Quiz)
  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1.4 : 1.2) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -29.1;
    ref.current.position.y = 39.2;
    ref.current.position.z = -20;
    ref.current.rotation.y = 0.4;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={() => {
          window.open('https://menkoi.github.io/coding-quiz/')
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />
      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial map={texture}/>
        <Html  position={[0.4,1.5,1]}style={{
            color: "white",
            fontWeight:'Bold'
          }}>
            <p> QUIZ</p>
          </Html>
      </mesh>
    </group>
  );
}

//Taskmaster
function ProjectSix() {
  const ref = useRef();
  const [hover, set] = useState(false);
  const texture = useLoader(TextureLoader, TaskMaster)
  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1.3: 1.1) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -32;
    ref.current.position.y = 39.2;
    ref.current.position.z = -20;
    ref.current.rotation.y = 0.4;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={() => {
          window.open('https://menkoi.github.io/taskmaster-pro/')
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />

      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial map={texture}/>
        <Html  position={[0.2,1.5,1]}style={{
            color: "white",
            fontWeight:'Bold'
          }}>
            <p>TASK</p>
          </Html>
      </mesh>
    </group>
  );
}

export default function Projects() {
  return(
    <group>
      <pointLight position={[-90, 40, -21]} />
      <ProjectOne/>
      <ProjectTwo/>
      <ProjectThree/>
      <ProjectFour/>
      <ProjectFive/>
      <ProjectSix/>

      <GithubRepo/>
    </group>
  )
}

