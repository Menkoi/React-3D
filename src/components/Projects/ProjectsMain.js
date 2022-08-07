import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Box, Html } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader';

// Images for project box texture
import Spar from '../../img/spar.webp';
import BookEnd from '../../img/BookEnd.webp';
import RewardBank from '../../img/RewardBank.webp';
import SaveTv from '../../img/SaveTv.webp';
import Quiz from '../../img/js-logo.webp';
import TaskMaster from '../../img/taskmaster.webp';

import GithubRepo from './GithubRepo';
import Font from './Font';
import Contact from './Contact';

// Spar
 function ProjectOne() {
    const ref = useRef();
    const [hover, set] = useState(false);
    const texture = useLoader(TextureLoader, Spar)

    useFrame(() => {
      let scale = (ref.current.scale.x +=
        ((hover ? 1.4 : 1.2) - ref.current.scale.x) * 0.1);
      ref.current.scale.set(scale, scale, scale);
      ref.current.position.x = -9.2;
      ref.current.position.y = 6.8;
      ref.current.position.z = -60;
      ref.current.rotation.y = 1.52;
    });

    return (
      <group ref={ref}>
        <Box
          onClick={() => {
              window.open('https://menkoi.github.io/spar/#/')
          }}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
        />
        <mesh>
          <boxBufferGeometry />
          <meshStandardMaterial map={texture} />
          <Html position={[2,1.76,-0.7]}
          style={{color: "white",fontWeight:'Bold'}}
          >
            <p>SPAR</p>
          </Html>
        </mesh>
      </group>
    );
}

// BookEnd
function ProjectTwo() {
  const ref = useRef();
  const [hover, set] = useState(false);
  const texture = useLoader(TextureLoader, BookEnd)

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1.4 : 1.2) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -7;
    ref.current.position.y = 6.8;
    ref.current.position.z = -60;
    ref.current.rotation.y = 1.52;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={() => {
            window.open('http://bookend-recommendations.herokuapp.com/')
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
      />
      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial map={texture}/>
        <Html  position={[1.1,1.55,-0.5]} style={{
            color: "white",
            fontWeight:'Bold'
          }}>
            <p>BOOKEND</p>
          </Html>
      </mesh>
    </group>
  );
}

// SaveTV
function ProjectThree() {
  const ref = useRef();
  const [hover, set] = useState(false);
  const texture = useLoader(TextureLoader, SaveTv)

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1.4 : 1.2) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -4.7;
    ref.current.position.y = 6.83;
    ref.current.position.z = -60;
    ref.current.rotation.y = 1.52;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={() => {
            window.open('https://utbootcampgroup2.github.io/SaveTV/')
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
      />

      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial map={texture} />
        <Html  position={[1.1,1.55,-0.2]}style={{
            color: "white",
            fontWeight:'Bold'
          }}>
            <p>SAVETV</p>
          </Html>
      </mesh>
    </group>
  );
}

// Reward Bank
function ProjectFour() {
  const ref = useRef();
  const [hover, set] = useState(false);
  const texture = useLoader(TextureLoader, RewardBank)

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1.4 : 1.2) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -9.2;
    ref.current.position.y = 4;
    ref.current.position.z = -60;
    ref.current.rotation.y = 1.52;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={() => {
            window.open('https://rocky-dawn-18669.herokuapp.com')
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
      />
      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial map={texture} />
        <Html  position={[-0.4,1,-0.5]}style={{
            color: "white",
            fontWeight:'Bold'
          }}>
            <p>REWARD</p>
          </Html>
      </mesh>
    </group>
  );
}

// Coding Quiz
function ProjectFive() {
  const ref = useRef();
  const [hover, set] = useState(false);
  const texture = useLoader(TextureLoader, Quiz)
  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1.4 : 1.2) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -7;
    ref.current.position.y = 4;
    ref.current.position.z = -60;
    ref.current.rotation.y = 1.52;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={() => {
          window.open('https://menkoi.github.io/coding-quiz/')
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
      />
      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial map={texture}/>
        <Html  position={[0.4,1.1,-0.25]}style={{
            color: "white",
            fontWeight:'Bold'
          }}>
            <p> QUIZ</p>
          </Html>
      </mesh>
    </group>
  );
}

// Taskmaster
function ProjectSix() {
  const ref = useRef();
  const [hover, set] = useState(false);
  const texture = useLoader(TextureLoader, TaskMaster)
  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1.4: 1.2) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -4.7;
    ref.current.position.y = 4;
    ref.current.position.z = -60;
    ref.current.rotation.y = 1.52;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={() => {
          window.open('https://menkoi.github.io/taskmaster-pro/')
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
      />

      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial map={texture}/>
        <Html  position={[1,1.2,-0.2]}style={{
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
      <Font/>
      <ProjectOne/>
      <ProjectTwo/>
      <ProjectThree/>
      <ProjectFour/>
      <ProjectFive/>
      <ProjectSix/>

      <GithubRepo/>

      <Contact/>
    </group>
  )
}

