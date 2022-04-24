import React, {Suspense, useRef, useState} from "react";
import {Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars, Box, PerspectiveCamera, Html } from "@react-three/drei";
import SpaceScene from './components/SpacePod';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

import Bear from './img/spar_testing.jpg';
import { TextureLoader } from 'three/src/loaders/TextureLoader'; 

function StarSpin() {
    const scene = useRef();
    useFrame(() => {
        scene.current.rotation.y += 0.0005;
        scene.current.rotation.x += 0.0002;
        
    });
    return (
        <group ref={scene}>
          <Stars></Stars>
        </group>
    )
}

  function CameraMain() {
    const scene = useRef();
    useFrame(() => {
      scene.current.position.x = -11
      scene.current.position.y = 5
      scene.current.position.z = -20
      scene.current.rotation.y = 9.8
      
    });
    return (
        <group ref={scene}>
          <PerspectiveCamera makeDefault ></PerspectiveCamera>
        </group>
    )
}

//////////////////////////////////////////////////////////////////////


function BoxCameraOne() {
  console.log("Box hover")
  const ref = useRef();
  const [hover, set] = useState(false)

  useFrame(() => {
    let scale = (ref.current.scale.x += ((hover ? 1.4 : 1) - ref.current.scale.x) * 0.1)
    ref.current.scale.set(scale, scale, scale)
    ref.current.position.x = -2;
    ref.current.position.y = -3;
    ref.current.position.z = 1.5;

    ref.current.rotation.y += 0.004;
    ref.current.rotation.x += 0.004;
    
});
  
  return (
      <group ref={ref}>
        <Box onClick={(e) => {
          e.camera.position.x = 10
          e.camera.position.y = 10
          e.camera.position.z = 25
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

function BoxCameraOneBack() {
  console.log("Box hover")
  const ref = useRef();
  const [hover, set] = useState(false)

  useFrame(() => {
    let scale = (ref.current.scale.x += ((hover ? 1.4 : 1) - ref.current.scale.x) * 0.1)
    ref.current.scale.set(scale, scale, scale)
    // Box Position
    ref.current.position.x = -22;
    ref.current.position.y = 7;
    ref.current.position.z = -20;

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

///////////////////////////////////////////////////////////////////////////

function BoxCameraTwo() {
  console.log("Box hover")
  const ref = useRef();
  const [hover, set] = useState(false)
  const texture = useLoader(TextureLoader, Bear)
  useFrame(() => {
    let scale = (ref.current.scale.x += ((hover ? 1.4 : 1) - ref.current.scale.x) * 0.1)
    ref.current.scale.set(scale, scale, scale)
    ref.current.position.x = -5;
    ref.current.position.y = -2.5;
    ref.current.position.z = 1;

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

function BoxCameraTwoBack() {
  console.log("Box hover")
  const ref = useRef();
  const [hover, set] = useState(false)
  const texture = useLoader(TextureLoader, Bear)
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

 export default function ThreeTest() {
    return (
      <div className="MainTest">
        <Canvas>
          <color attach="background" args={['#161c24']}/>
          <ambientLight intensity={0.01} />
          <pointLight position={[1, 10, 10]} />
          <Suspense fallback={null}>
            
            <SpaceScene></SpaceScene>
            <StarSpin></StarSpin>

            <BoxCameraOne/>
            <BoxCameraOneBack/>

            <BoxCameraTwo/>
            <BoxCameraTwoBack/>

            <CameraMain/>
            <EffectComposer>
            <Bloom intensity={0.5} kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>
    );
}
