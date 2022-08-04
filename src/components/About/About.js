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
    return (
      <mesh position={[-14, 58, 1]} ref={ref}>
        <Text>
          <Html>
            <div class="card-body elegant-color" className="cardBody">
              <div class="aboutText">
                <p>
                  Web developer with a love for coding and learning new
                  technologies
                </p>
                
                <div>
                  <h2>Certificates</h2>
                  <p>Coding Bootcamp - Universtiy of Toronto</p>
                  <p>Google IT Support - Coursera</p>
                  <p>Intro to Computer Science - Harvard Universtiy (current)</p>
                </div>

                <div>
                  <h2>Resume</h2>
                  <a href="https://drive.google.com/file/d/1jpAmzOtWDRuTgAF-HEVXvCNCyVewFK9W/view?usp=sharing" target="blank">Click to view Resume</a>
                </div>
                
                <div>
                  <h2>Technologies</h2>

                  <div>
                  <FaHtml5 size={30} />
                  <FaCss3 size={30} />
                  <FaJs size={30} />
                  <FaReact size={30} />
                  <FaNodeJs size={30} />
                  <FaBootstrap size={30} />
                  <FaNpm size={30} />
                  <FaGithub size={30} />
                  <FaFigma size={30} />
                </div>

                </div>
              </div>
            </div>
          </Html>
        </Text>
      </mesh>
    );
}
