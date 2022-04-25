import React, { useRef, useState} from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Box } from "@react-three/drei";

import TestImg from '../img/spar_testing.jpg';
import { TextureLoader } from 'three/src/loaders/TextureLoader'; 

// Camera 1 *Goes outside Pod*
function BoxCameraOne() {
  console.log("Box hover")
  const ref = useRef();
  const [hover, set] = useState(false)

  useFrame(() => {
    let scale = (ref.current.scale.x += ((hover ? 1.4 : 1) - ref.current.scale.x) * 0.1)
    ref.current.scale.set(scale, scale, scale)
    ref.current.position.x = -4.5;
    ref.current.position.y = -3;
    ref.current.position.z = 1.5;

    ref.current.rotation.y += 0.004;
    ref.current.rotation.x += 0.004;
    
});
  
  return (
      <group ref={ref}>
        <Box onClick={(e) => {
          e.camera.position.x = 17
          e.camera.position.y = 10
          e.camera.position.z = 25
        console.log('Box Clicked', e)}}
           onPointerOver={() => set(true)}  
           onPointerOut={() => set(false)} 
           castShadow />
           
           <mesh>
           <ambientLight intensity={0.1} />
           <boxBufferGeometry/>
           <meshStandardMaterial color={"red"} />
           </mesh>
      </group>
      
  )
}

// Camera Back Button *Goes to default camera*
function BoxCameraOneBack() {
  console.log("Box hover")
  const ref = useRef();
  const [hover, set] = useState(false)

  useFrame(() => {
    let scale = (ref.current.scale.x += ((hover ? 1.4 : 1) - ref.current.scale.x) * 0.1)
    ref.current.scale.set(scale, scale, scale)
    // Box Position
    ref.current.position.x = -27.8;
    ref.current.position.y = 5.5;
    ref.current.position.z = -15;

    //Box Rotation
    ref.current.rotation.y += 0.002;
    ref.current.rotation.x += 0.003;
    ref.current.rotation.x += 0.004;
    
});
  
  return (
      <group ref={ref}>
        <Box onClick={(e) => {
          // On Click Camera Default Position
          e.camera.position.x = 1
          e.camera.position.y = 1
          e.camera.position.z = 1
        console.log('Box Clicked', e)}}
           onPointerOver={() => set(true)}  
           onPointerOut={() => set(false)} 
           castShadow />
           
           <mesh>
           <boxBufferGeometry/>
           <meshStandardMaterial color={"red"} />
           </mesh>
      </group>
      
  )
}

// Camera Two *Goes to screen*
function BoxCameraTwo() {
    console.log("Box hover")
    const ref = useRef();
    const [hover, set] = useState(false)
    const texture = useLoader(TextureLoader, TestImg)
    useFrame(() => {
      let scale = (ref.current.scale.x += ((hover ? 1.4 : 1) - ref.current.scale.x) * 0.1)
      ref.current.scale.set(scale, scale, scale)
      ref.current.position.x = -1;
      ref.current.position.y = -3.5;
      ref.current.position.z = 1.5;
  
      //Box Rotation
      ref.current.rotation.y += -0.002;
      ref.current.rotation.x += -0.003;
      
  });
    
    return (
        <group ref={ref}>
          <Box onClick={(e) => {
            e.camera.position.x = -8
            e.camera.position.y = -4
            e.camera.position.z = -24.2
  
            e.camera.rotation.y = 1.2
            
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
      ref.current.position.z = -0.5; 
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
    <BoxCameraOne />
    <BoxCameraOneBack />

    <BoxCameraTwo />
    <BoxCameraTwoBack />
  </group>
);
}