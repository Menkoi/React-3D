import React, { useRef, useState} from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";

 function ProjectOne() {
    const ref = useRef();
    const [hover, set] = useState(false);

    useFrame(() => {
      let scale = (ref.current.scale.x +=
        ((hover ? 1.5 : 1.2) - ref.current.scale.x) * 0.1);
      ref.current.scale.set(scale, scale, scale);
      ref.current.position.x = -26;
      ref.current.position.y = 43;
      ref.current.position.z = -20;
      ref.current.rotation.y = 0.4;
    });

    return (
      <group ref={ref}>
        <Box
          onClick={(e) => {
            console.log("Project 1 Clicked", e);
          }}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
          castShadow
        />
        <mesh>
          <boxBufferGeometry />
          <meshStandardMaterial color={"white"} />
        </mesh>
      </group>
    );
}

function ProjectTwo() {
  const ref = useRef();
  const [hover, set] = useState(false);

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1.5 : 1.1) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -29.2;
    ref.current.position.y = 42.7;
    ref.current.position.z = -20.2;
    ref.current.rotation.y = 0.4;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={(e) => {
          console.log("Project 2 Clicked", e);
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />

      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial color={"white"} />
      </mesh>
    </group>
  );
}

function ProjectThree() {
  const ref = useRef();
  const [hover, set] = useState(false);

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1.5 : 1.1) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -32;
    ref.current.position.y = 42.5;
    ref.current.position.z = -20;
    ref.current.rotation.y = 0.4;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={(e) => {
          console.log("Project 3 Clicked", e);
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />

      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial color={"white"} />
      </mesh>
    </group>
  );
}

function ProjectFour() {
  const ref = useRef();
  const [hover, set] = useState(false);

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1.5 : 1.3) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -26;
    ref.current.position.y = 40.1;
    ref.current.position.z = -20;
    ref.current.rotation.y = 0.4;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={(e) => {
          console.log("Project 4 Clicked", e);
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />

      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial color={"white"} />
      </mesh>
    </group>
  );
}

function ProjectFive() {
  const ref = useRef();
  const [hover, set] = useState(false);

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1.5 : 1.2) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -29.1;
    ref.current.position.y = 40;
    ref.current.position.z = -20;
    ref.current.rotation.y = 0.4;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={(e) => {
          console.log("Project 5 Clicked", e);
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />
      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial color={"white"} />
      </mesh>
    </group>
  );
}

function ProjectSix() {
  const ref = useRef();
  const [hover, set] = useState(false);

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 1.5: 1.2) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = -32;
    ref.current.position.y = 40;
    ref.current.position.z = -20;
    ref.current.rotation.y = 0.4;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={(e) => {
          console.log("Project 6 Clicked", e);
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />

      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial color={"white"} />
      </mesh>
    </group>
  );
}

export default function Projects() {
  return(
    <group>
      <pointLight position={[-90, 40, -21]} />
      <ProjectOne/>
      <ProjectTwo/>
      <ProjectThree/>
      <ProjectFour/>
      <ProjectFive/>
      <ProjectSix/>
    </group>
  )
}

