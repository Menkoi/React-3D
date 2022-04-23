import React, {Suspense, useRef, useState} from "react";
import {Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Box, PerspectiveCamera, Html } from "@react-three/drei";
import SpaceScene from './components/SpacePod';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

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
      scene.current.position.y = 10
      scene.current.position.z = -20
    });
    return (
        <group ref={scene}>
          <PerspectiveCamera makeDefault></PerspectiveCamera>
        </group>
    )
}

//////////////////////////////////////////////////////////////////////

function BoxTest() {
  console.log("Box hover")
  const ref = useRef();
  const [hover, set] = useState(false)

  useFrame(() => {
    let scale = (ref.current.scale.x += ((hover ? 1.5 : 1) - ref.current.scale.x) * 0.1)
    ref.current.scale.set(scale, scale, scale)
    ref.current.rotation.y += 0.04;
    ref.current.rotation.x += 0.04;
});
  
  return (
      <group ref={ref}>
        <Box onClick={(e) => console.log('Box Clicked', e)} onPointerOver={() => set(true)}  onPointerOut={() => set(false)} castShadow />
      </group>
      
  )
}

 export default function ThreeTest() {
    return (
      <div className="MainTest">
        <Canvas>
          <color attach="background" args={['#161c24']}/>
          <ambientLight intensity={0.01} />
          <pointLight position={[-10, 10, 10]} />
          <Suspense fallback={null}>
            
            <SpaceScene></SpaceScene>
            <StarSpin></StarSpin>

            <CameraMain></CameraMain>

            <BoxTest></BoxTest>
            

            <EffectComposer>
            <Bloom intensity={0.5} kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} />
            </EffectComposer>
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    );
}
