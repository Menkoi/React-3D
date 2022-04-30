import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Cylinder } from "@react-three/drei";

import { TextureLoader } from 'three/src/loaders/TextureLoader';
import GithubText from '../img/GithubText.png';

function GitHubOne() {
    const ref = useRef();
    const GitHub = useLoader(TextureLoader, GithubText);
    useFrame(() => {
      ref.current.scale.set(0.5,0.5,0.5);
      ref.current.position.x = -26;
      ref.current.position.y = 41.7;
      ref.current.position.z = -20;
      ref.current.rotation.y += 0.01;
    });
    return (
      <group ref={ref}>
        <Cylinder
            onClick={(e) => { 
                window.open('https://github.com/Menkoi/spar/tree/master')
              console.log("Box Clicked", e);
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
      ref.current.position.x = -29.1;
      ref.current.position.y = 41.5;
      ref.current.position.z = -20;
      ref.current.rotation.y += 0.01;
    });
    return (
      <group ref={ref}>
        <Cylinder
            onClick={(e) => { 
                window.open('https://github.com/project3UOT/bookend')
              console.log("Box Clicked", e);
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
      ref.current.position.x = -32;
      ref.current.position.y = 41.3;
      ref.current.position.z = -20;
      ref.current.rotation.y += 0.01;
    });
    return (
      <group ref={ref}>
        <Cylinder
            onClick={(e) => { 
                window.open('https://github.com/UTBootCampGroup2/SaveTV')
              console.log("Box Clicked", e);
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
      ref.current.position.x = -26;
      ref.current.position.y = 38.3;
      ref.current.position.z = -20;
      ref.current.rotation.y += 0.01;
    });
    return (
      <group ref={ref}>
        <Cylinder
            onClick={(e) => { 
                window.open('https://github.com/UTBootCampGroup2Project2/reward-bank')
              console.log("Box Clicked", e);
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
      ref.current.position.x = -29.1;
      ref.current.position.y = 38.3;
      ref.current.position.z = -20;
      ref.current.rotation.y += 0.01;
    });
    return (
      <group ref={ref}>
        <Cylinder
            onClick={(e) => { 
              e.Github(
                window.open('')
              )
              console.log("Box Clicked", e);
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
      ref.current.position.x = -32;
      ref.current.position.y = 38.4;
      ref.current.position.z = -20;
      ref.current.rotation.y += 0.01;
    });
    return (
      <group ref={ref}>
        <Cylinder
            onClick={(e) => { 
              e.Github(
                window.open('')
              )
              console.log("Box Clicked", e);
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