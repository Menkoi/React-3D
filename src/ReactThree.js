import React, { Suspense, useRef } from "react";
import {Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Components
import Font from './components/Font';
import Contact from './components/Contact';
import SpacePod from './components/SpacePod';
import SpaceBackground from "./components/SpaceBackground";
import CameraFunction from './components/Camera';
import Projects from './components/Projects';
import EarthLoading from "./components/Loading";

// Landing page default camera
function CameraDefault() {
  const scene = useRef();
  useFrame(() => {
    scene.current.position.x = -11
    scene.current.position.y = 5
    scene.current.position.z = -20
    scene.current.rotation.y = 9.8
    
  });
  return (
      <group ref={scene}>
        <PerspectiveCamera makeDefault />
      </group>
  )
}

 export default function ReactThree() {
    return (
      <div className="MainTest">
        <Canvas>
          <color attach="background" args={['#161c24']}/>
          <ambientLight intensity={0.01} />
          <Suspense fallback={<EarthLoading/>}>
            
            <SpacePod/>
            <SpaceBackground/>

            <CameraDefault/>
            <CameraFunction/>

            <Font/>
            <Projects/>
            <Contact/>

            <EffectComposer>
            <Bloom intensity={0.1} kernelSize={1} luminanceThreshold={0} luminanceSmoothing={0.4} />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>
    );
}
