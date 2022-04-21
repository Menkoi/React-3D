import React, {Suspense, useRef, useState} from "react";
import {Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Box  } from "@react-three/drei";
import SpaceScene from './components/SpacePod';



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


function CameraTest() {
  console.log('Box was clicked');
  const scene = React.useRef();
  const [active, setActive] = useState(false);

    useFrame((state) => {
      state.camera.position.x = -11
      state.camera.position.y = 10
      state.camera.position.z = -20 
      //state.camera.lookAt(5, 1, 5)
      state.camera.updateProjectionMatrix()
    });
    return (
        <group ref={scene}>
          <Box
           onClick={() => setActive(!active)}>
           </Box>
           
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
            <CameraTest></CameraTest>
            <StarSpin></StarSpin>
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    );
}
