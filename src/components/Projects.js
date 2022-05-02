import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Box, Html } from "@react-three/drei";

import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Spar from '../img/spar_testing.jpg';
import BookEnd from '../img/BookEndT.png';
import RewardBank from '../img/RewardBankT.png';
import SaveTv from '../img/SaveTvT.png';
import GithubRepo from './GithubRepo';
import Quiz from '../img/js-logo.jpg';
import TaskMaster from '../img/taskmaster.png';

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
          onClick={(e) => {
            console.log("Project 1 Clicked", e);
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
        onClick={(e) => {
          console.log("Project 2 Clicked", e);
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
        onClick={(e) => {
          console.log("Project 3 Clicked", e);
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
        onClick={(e) => {
          console.log("Project 4 Clicked", e);
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
        onClick={(e) => {
          console.log("Project 5 Clicked", e);
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
        onClick={(e) => {
          console.log("Project 6 Clicked", e);
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

