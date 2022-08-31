import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Cylinder } from "@react-three/drei";

import { TextureLoader } from 'three/src/loaders/TextureLoader';
import GithubText from '../../img/GithubText.webp';

function GitHubOne() {
    const ref = useRef();
    const GitHub = useLoader(TextureLoader, GithubText);
    useFrame(() => {
      ref.current.scale.set(0.5,0.5,0.5);
      ref.current.position.x = -9.2;
      ref.current.position.y = 5.9;
      ref.current.position.z = -60;
      ref.current.rotation.y += 0.01;
    });
    return (
      <group ref={ref}>
        <Cylinder
            onClick={() => { 
                window.open('https://github.com/Menkoi/Backrooms')
            }}/>
          <mesh>
          <cylinderBufferGeometry/>
          <meshStandardMaterial map={GitHub} />
          </mesh>
      </group>
  
    )
  }

  function GitHubTwo() {
    const ref = useRef();
    const GitHub = useLoader(TextureLoader, GithubText);
    useFrame(() => {
      ref.current.scale.set(0.5,0.5,0.5);
      ref.current.position.x = -7;
      ref.current.position.y = 5.9;
      ref.current.position.z = -60;
      ref.current.rotation.y += 0.01;
    });
    return (
      <group ref={ref}>
        <Cylinder
            onClick={() => { 
                window.open('https://github.com/project3UOT/bookend')
            }}/>
          <mesh>
          <cylinderBufferGeometry/>
          <meshStandardMaterial map={GitHub} />
          </mesh>
      </group>
  
    )
  }

  function GitHubThree() {
    const ref = useRef();
    const GitHub = useLoader(TextureLoader, GithubText);
    useFrame(() => {
      ref.current.scale.set(0.5,0.5,0.5);
      ref.current.position.x = -4.7;
      ref.current.position.y = 5.95;
      ref.current.position.z = -60;
      ref.current.rotation.y += 0.01;
    });
    return (
      <group ref={ref}>
        <Cylinder
            onClick={() => { 
                window.open('https://github.com/Menkoi/spar')
            }}/>
          <mesh>
          <cylinderBufferGeometry/>
          <meshStandardMaterial map={GitHub} />
          </mesh>
      </group>
  
    )
  }

  function GitHubFour() {
    const ref = useRef();
    const GitHub = useLoader(TextureLoader, GithubText);
    useFrame(() => {
      ref.current.scale.set(0.5,0.5,0.5);
      ref.current.position.x = -9.2;
      ref.current.position.y = 3.1;
      ref.current.position.z = -60;
      ref.current.rotation.y += 0.01;
    });
    return (
      <group ref={ref}>
        <Cylinder
            onClick={() => { 
                window.open('https://github.com/UTBootCampGroup2Project2/reward-bank')
            }}/>
          <mesh>
          <cylinderBufferGeometry/>
          <meshStandardMaterial map={GitHub} />
          </mesh>
      </group>
    )
  }

  function GitHubFive() {
    const ref = useRef();
    const GitHub = useLoader(TextureLoader, GithubText);
    useFrame(() => {
      ref.current.scale.set(0.5,0.5,0.5);
      ref.current.position.x = -7;
      ref.current.position.y = 3.1;
      ref.current.position.z = -60;
      ref.current.rotation.y += 0.01;
    });
    return (
      <group ref={ref}>
        <Cylinder
            onClick={() => { 
                window.open('https://github.com/Menkoi/coding-quiz')
            }}/>
          <mesh>
          <cylinderBufferGeometry/>
          <meshStandardMaterial map={GitHub} />
          </mesh>
      </group>
    )
  }
  function GitHubSix() {
    const ref = useRef();
    const GitHub = useLoader(TextureLoader, GithubText);
    useFrame(() => {
      ref.current.scale.set(0.5,0.5,0.5);
      ref.current.position.x = -4.7;
      ref.current.position.y = 3.1;
      ref.current.position.z = -60;
      ref.current.rotation.y += 0.01;
    });
    return (
      <group ref={ref}>
        <Cylinder
            onClick={() => { 
                window.open('https://github.com/Menkoi/taskmaster-pro')
            }}/>
          <mesh>
          <cylinderBufferGeometry/>
          <meshStandardMaterial map={GitHub} />
          </mesh>
      </group>
    )
  }

  export default function GithubRepo() {
      return(
          <group>
              <GitHubOne/>
              <GitHubTwo/>
              <GitHubThree/>
              <GitHubFour/>
              <GitHubFive/>
              <GitHubSix/>
          </group>
      )
  }