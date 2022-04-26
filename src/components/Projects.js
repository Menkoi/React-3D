import React, { useRef, useState} from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";

 function ProjectOne() {
    const ref = useRef();
    const [hover, set] = useState(false);

    useFrame(() => {
      let scale = (ref.current.scale.x +=
        ((hover ? 0.3 : 0.2) - ref.current.scale.x) * 0.1);
      ref.current.scale.set(scale, scale, scale);
      ref.current.position.x = 9.3;
      ref.current.position.y = 1.7;
      ref.current.position.z = -0.8;
    });

    return (
      <group ref={ref}>
        <Box
          onClick={(e) => {
            console.log("Box Clicked", e);
          }}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
          castShadow
        />

        <mesh>
          <boxBufferGeometry />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </group>
    );
}

function ProjectTwo() {
  const ref = useRef();
  const [hover, set] = useState(false);

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 0.3 : 0.2) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = 9.3;
    ref.current.position.y = 1.7;
    ref.current.position.z = -0.4;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={(e) => {
          console.log("Box Clicked", e);
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />

      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </group>
  );
}

function ProjectThree() {
  const ref = useRef();
  const [hover, set] = useState(false);

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 0.3 : 0.2) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = 9.3;
    ref.current.position.y = 1.7;
    ref.current.position.z = -0.01;

    //ref.current.rotation.x = 4.5;
    //ref.current.rotation.z = 1.6;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={(e) => {
          console.log("Box Clicked", e);
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />

      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </group>
  );
}

function ProjectFour() {
  const ref = useRef();
  const [hover, set] = useState(false);

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 0.3 : 0.2) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = 9.3;
    ref.current.position.y = 1.3;
    ref.current.position.z = -0.8;

    
  });

  return (
    <group ref={ref}>
      <Box
        onClick={(e) => {
          console.log("Box Clicked", e);
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />

      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </group>
  );
}

function ProjectFive() {
  const ref = useRef();
  const [hover, set] = useState(false);

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 0.3 : 0.2) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = 9.3;
    ref.current.position.y = 1.3;
    ref.current.position.z = -0.4;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={(e) => {
          console.log("Box Clicked", e);
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />

      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </group>
  );
}

function ProjectSix() {
  const ref = useRef();
  const [hover, set] = useState(false);

  useFrame(() => {
    let scale = (ref.current.scale.x +=
      ((hover ? 0.3 : 0.2) - ref.current.scale.x) * 0.1);
    ref.current.scale.set(scale, scale, scale);
    ref.current.position.x = 9.3;
    ref.current.position.y = 1.3;
    ref.current.position.z = -0.01;
  });

  return (
    <group ref={ref}>
      <Box
        onClick={(e) => {
          console.log("Box Clicked", e);
        }}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        castShadow
      />

      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </group>
  );
}

export default function Projects() {
  return(
    <group>
      <ProjectOne/>
      <ProjectTwo/>
      <ProjectThree/>
      <ProjectFour/>
      <ProjectFive/>
      <ProjectSix/>
    </group>
  )
}

