import React, { useRef, useState} from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Box } from "@react-three/drei";

import TestImg from '../img/spar_testing.jpg';
import { TextureLoader } from 'three/src/loaders/TextureLoader'; 

import { useGLTF } from "@react-three/drei";
import ArrowOne from '../Models/ArrowOne.glb';
import ArrowTwo from '../Models/ArrowTwo.glb';
import ArrowThree from '../Models/ArrowThree.glb';

function CameraOne() {
  const gltf = useGLTF(ArrowOne);
  const ref = useRef();
  const [hover, set] = useState(false)
  useFrame(() => {
    let scale = (ref.current.scale.x += ((hover ? 0.2 : 0.3) - ref.current.scale.x) * 0.1)
    ref.current.scale.set(scale, scale, scale)
    ref.current.rotation.y = -1.5;
    ref.current.rotation.x += 0.004;
  });
  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={[-4.8, -3, 1.5]}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      castShadow
      onClick={(e) => {
        e.camera.position.x = 17;
        e.camera.position.y = 10;
        e.camera.position.z = 25;
        console.log("arrow clicked", e);
      }}
    />
  );
};

// Camera Back Button *Goes to default camera*
function CameraOneBack() {
  const gltf = useGLTF(ArrowTwo);
  const ref = useRef();
  const [hover, set] = useState(false)
  useFrame(() => {
    let scale = (ref.current.scale.x += ((hover ? 0.2 : 0.3) - ref.current.scale.x) * 0.1)
    ref.current.scale.set(scale, scale, scale)
    ref.current.rotation.y = 1.5;
    ref.current.rotation.x += 0.004;
  });
  return <primitive
      ref={ref}
      object={gltf.scene}
      position={[-27.8, 5.5, -15]}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      castShadow
      onClick={(e) => {
        e.camera.position.x = 1;
        e.camera.position.y = 1;
        e.camera.position.z = 1;
        console.log("arrow clicked", e);
      }}/>;
};

// Camera Two *Goes to screen*
function CameraTwo() {
  const gltf = useGLTF(ArrowThree);
  const ref = useRef();
  const [hover, set] = useState(false)
  useFrame(() => {
    let scale = (ref.current.scale.x += ((hover ? 0.2 : 0.3) - ref.current.scale.x) * 0.1)
    ref.current.scale.set(scale, scale, scale)
    ref.current.rotation.y = 1.5;
    ref.current.rotation.x += -0.005;
  });
  return <primitive
      ref={ref}
      object={gltf.scene}
      position={[-1, -3.5, 1.5]}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      castShadow
      onClick={(e) => {
        e.camera.position.x = -8;
        e.camera.position.y = -4;
        e.camera.position.z = -24.2;
        e.camera.rotation.y = 1.2;
        console.log("arrow clicked", e);
      }} />;
};
  
  // Camera Back Button *Goes to default camera*
  function BoxCameraTwoBack() {
    console.log("Box hover")
    const ref = useRef();
    const [hover, set] = useState(false)
    const texture = useLoader(TextureLoader, TestImg)
    useFrame(() => {
      let scale = (ref.current.scale.x += ((hover ? 0.3 : 0.2) - ref.current.scale.x) * 0.1)
      ref.current.scale.set(scale, scale, scale)
      ref.current.position.x = 9.2;
      ref.current.position.y = -0.15;
      ref.current.position.z = -0.4; 
  });
    
    return (
        <group ref={ref}>
          <Box onClick={(e) => {
            e.camera.position.x = 1
            e.camera.position.y = 1
            e.camera.position.z = 1
  
            e.camera.rotation.y = 0.01
            
          console.log('Box Clicked', e)}}
             onPointerOver={() => set(true)}  
             onPointerOut={() => set(false)} 
             castShadow 
             />
             <mesh>
             <boxBufferGeometry/>
             <meshStandardMaterial map={texture}/>
             </mesh>
        </group>
    )
  }

export default function CameraFunction() {
return (
  <group>
    <CameraOne/>
    <CameraOneBack/>
    
    <CameraTwo/>
    <BoxCameraTwoBack />
  </group>
);
}