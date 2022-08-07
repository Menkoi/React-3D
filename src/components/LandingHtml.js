import React, { useRef, useState} from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Text, Html } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader';

import RingTexture from '../img/Ring.webp';

export default function Landing() {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.y = 3.5;
    });
    return(
        <mesh position={[-1, 15, 2]} ref={ref}>
        <Text>
          <Html class= "container">
            <h1 class="jumboHeader">Hello</h1>
            <p class="subHeader">Welcome to my portfolio</p>
          </Html>
          <Torus/>
        </Text>
      </mesh>
    )
}

function Torus() {
  const ref = useRef();
  const [set] = useState(false);
  const texture = useLoader(TextureLoader, RingTexture)
  useFrame(() => {
    ref.current.scale.set(3,3,3);
    ref.current.position.x = -11;
    ref.current.position.y = -12;
    ref.current.position.z = -3;
    ref.current.rotation.y += 0.001;
  });

  return (
    <group ref={ref}>
      <torusKnotGeometry
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
      />
      <mesh>
        <torusKnotBufferGeometry/>
        <meshStandardMaterial map={texture}/>
      </mesh>
    </group>
  );
}