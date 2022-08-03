import React, { useRef, useState} from "react";
import { useFrame } from "@react-three/fiber";

import { useGLTF } from "@react-three/drei";
import ArrowOne from '../Models/ArrowOne.glb';
import ArrowTwo from '../Models/ArrowTwo.glb';
import ArrowThree from '../Models/ArrowThree.glb';
import ArrowFour from '../Models/ArrowFour.glb';


// Goes to About
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
      position={[-5.5, -3, 1.5]}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={(e) => {
        e.camera.position.x = 17;
        e.camera.position.y = 34;
        e.camera.position.z = 25;
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
      position={[-27, 30, -15]}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={(e) => {
        e.camera.position.x = 1;
        e.camera.position.y = 1;
        e.camera.position.z = 1;
      }}/>;
};

// Goes to Projects
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
      onClick={(e) => {
        e.camera.position.x = -12;
        e.camera.position.y = -1;
        e.camera.position.z = 22; 
        e.camera.rotation.y = 2.7;
      }} />;
};
  
  // Camera Back Button *Goes to default camera*
  function CameraTwoBack() {
    const gltf = useGLTF(ArrowFour);
    const ref = useRef();
    const [hover, set] = useState(false)
  
    useFrame(() => {
      let scale = (ref.current.scale.x += ((hover ? 0.2 : 0.3) - ref.current.scale.x) * 0.1)
      ref.current.scale.set(scale, scale, scale)
      ref.current.position.x = -6.7;
      ref.current.position.y = -6.5;
      ref.current.position.z = -70; 

      ref.current.rotation.x += 0.004;
      ref.current.rotation.y += 0.004;
  });
    
    return (
      <primitive
      ref={ref}
      object={gltf.scene}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={(e) => {
        e.camera.position.x = 1;
        e.camera.position.y = 1;
        e.camera.position.z = 1; 
        e.camera.rotation.y = 0;
      }} />
    )
  }

export default function CameraFunction() {
return (
  <group>
    <CameraOne/>
    <CameraOneBack/>
    
    <CameraTwo/>
    <CameraTwoBack />
  </group>
);
}