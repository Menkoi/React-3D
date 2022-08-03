import React, { Suspense, useRef } from "react";
import {Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera} from "@react-three/drei";
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Components
import Wireframe from './components/Wireframe';
import SpaceBackground from "./components/SpaceBackground";
import CameraFunction from './components/Camera';
import ProjectsMain from './components/Projects/ProjectsMain';
import EarthLoading from "./components/Loading";
import LandingHtml from './components/LandingHtml';
import About from './components/About/About';

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

 export default function Main() {
    return (
      <div className="Main">
        <Canvas>
          <color attach="background" args={['#161c24']}/>
          <ambientLight intensity={0.01} />
          <Suspense fallback={<EarthLoading/>}>
            <CameraDefault/>
            <CameraFunction/>

            <LandingHtml/>
            <About/>

            <Wireframe/>
            <SpaceBackground/>

            <ProjectsMain/>

            <EffectComposer>
            <Bloom intensity={0.2} kernelSize={1} luminanceThreshold={0} luminanceSmoothing={0.4} />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>
    );
}
