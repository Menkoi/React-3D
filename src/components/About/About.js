import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Html } from "@react-three/drei";

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs,
  FaBootstrap, FaNpm, FaGithub,FaFigma} from 'react-icons/fa';

export default function About() {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.y = 3.5;
    });
    return(
        <mesh position={[-18.3, 58, 1]} ref={ref}>
        <Text>
          <Html>
          <div class="card-body elegant-color" className="cardBody">
            <p class="aboutText">
            Web developer with a love for coding and learning new technologies
            </p>
            <div class="aboutText">
              <h1>Tech</h1>
                <FaHtml5 size={30}/>
                <FaCss3 size={30}/> 
                <FaJs size={30}/> 
                <FaReact size={30}/> 
                <FaNodeJs size={30}/>
                <FaBootstrap size={30}/> 
                <FaNpm size={30}/> 
                <FaGithub size={30}/>
                <FaFigma size={30}/>
              <h1>Lorem Ipsum</h1>
            </div>
          </div>
          </Html>
        </Text>
      </mesh>
    )
}
