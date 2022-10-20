import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Html } from "@react-three/drei";

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs,
  FaBootstrap, FaNpm, FaGithub,FaFigma} from 'react-icons/fa';

// Images
import CS50 from '../../img/CS50Cert.webp';
import Google from '../../img/GoogleCert.webp';
import Uot from '../../img/UotCert.webp';

export default function About() {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.y = 3.5;
    });
    return (
      <mesh position={[-15, 58, 3]} ref={ref}>
        <Text>
          <Html>
            <div class="card-body elegant-color" className="cardBody">
              <div class="aboutText">
                <div>
                  <h2>Resume</h2>
                  <a href="https://drive.google.com/file/d/15dGqjN14xGFlIqTEm9TBRAFbuRQDvvJi/view?usp=sharing" target="blank" className="resume">Click to view Resume</a>
                </div>

                <div className="certs">
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

                <div className="certs">
                  <h2>Certificates</h2>
                  <h3>Intro to Computer Science - Harvard Universtiy</h3>
                  <img src={CS50} className="img" alt=""></img>
                  <h3>Google IT Support - Coursera</h3>
                  <img src={Google} className="img" alt=""></img>
                  <h3>Coding Bootcamp - Universtiy of Toronto</h3>
                  <img src={Uot} className="img" alt=""></img>
                </div>
                
                

                </div>
              </div>
            </div>
          </Html>
        </Text>
      </mesh>
    );
}
