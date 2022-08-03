import React, { useRef, useEffect, useState } from "react";
import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  extend,
  // Canvas,
} from "@react-three/fiber";
// import ff from "fonts"

import {
  OrbitControls,
  Stars,
  PerspectiveCamera,
  Text,
  Edges,
} from "@react-three/drei";
import * as THREE from "three";

export default function Radar(props) {
  var arete = 300;
  const [u, setu] = useState(0);

  function generateHexagone(arete) {
    const points = [];
    points.push(
      new THREE.Vector3(
        arete * Math.cos(1.04 / 2),
        arete * Math.sin(1.04 / 2),
        0
      )
    );
    points.push(
      new THREE.Vector3(
        arete * Math.cos(1.04 / 2),
        -arete * Math.sin(1.04 / 2),
        0
      )
    );
    points.push(new THREE.Vector3(0, -arete, 0));

    points.push(
      new THREE.Vector3(
        -arete * Math.cos(1.04 / 2),
        -arete * Math.sin(1.04 / 2),
        0
      )
    );
    points.push(
      new THREE.Vector3(
        -arete * Math.cos(1.04 / 2),
        arete * Math.sin(1.04 / 2),
        0
      )
    );
    points.push(new THREE.Vector3(0, arete, 0));
    points.push(
      new THREE.Vector3(
        arete * Math.cos(1.04 / 2),
        arete * Math.sin(1.04 / 2),
        0
      )
    );

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }

  function generateAxis(angle) {
    const arete = 600;
    const points = [];
    points.push(
      new THREE.Vector3(arete * Math.cos(angle), arete * Math.sin(angle), 0)
    );
    points.push(new THREE.Vector3(0, 0, 0));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }

  function generateDataLine() {
    const angle = [Math.PI/6,  Math.PI/2, Math.PI- Math.PI/6, Math.PI+ Math.PI/6, -Math.PI/2, -Math.PI/6 ];
    const data = [];
    data.push(
      100
    );
    data.push(
      200
    );
    data.push(
      300
    );
    data.push(
      400
    );
    data.push(
      500
    );
    data.push(
      200
    );
    var points=[]
    
    for (let pas = 0; pas < 6; pas++) {
      // Ceci sera exécuté 5 fois
      // À chaque éxécution, la variable "pas" augmentera de 1
      // Lorsque'elle sera arrivée à 5, le boucle se terminera.
      // console.log('Faire ' + pas + ' pas vers l\'est');
      points.push(new THREE.Vector3(data[pas]*Math.cos(angle[pas]), data*Math.sin(angle[pas]), 0))
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }

  function setText(angle) {
    const arete = 800;
    return (
      // <Text position={[arete*Math.cos(angle),arete*Math.sin(angle),0]}> AAAAA
      // <meshNormalMaterial color={"white"} />
      // </Text>
      <mesh>
      <Text
        rotation={[0, 0, 0]}
        fontSize={50}
        position={[arete*Math.cos(angle), arete*Math.sin(angle), 0]}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        hello world!
        <meshNormalMaterial color={"white"} />
      </Text>
      </mesh>
    );
  }

  const axis = generateAxis(Math.PI / 6);

  const axis2 = generateAxis(Math.PI / 2);

  const axis3 = generateAxis(Math.PI - Math.PI / 6);

  const axis4 = generateAxis(Math.PI / 6 + Math.PI);

  const axis5 = generateAxis(-Math.PI / 6);

  const axis6 = generateAxis(-Math.PI / 2);

  const geometry = generateHexagone(300);

  const geometry2 = generateHexagone(400);

  const geometry3 = generateHexagone(500);

  const dataLine = generateDataLine();

  const Textt1 = ()=>{
    // var array=[];
    array.push(Math.PI / 6);
    array.push(Math.PI / 2);
    array.push(Math.PI - Math.PI / 6);
    array.push(Math.PI / 6 + Math.PI);
    array.push(-Math.PI / 6);
    array.push(-Math.PI / 2);
    // setText(Math.PI / 6);
    array.map((item,i) => {return(setText(item))});
  }

  const oonClick = () => {
    console.log("click");
    setu(u + 1);
  };
  return (
    <>
      <group key={u} onClick={oonClick} position={[0, -2.5, -10]}>
        <line geometry={geometry}>
          <lineBasicMaterial
            attach="material"
            color={"#fff"}
            linewidth={30}
            linecap={"round"}
            linejoin={"round"}
          />
        </line>

        <line geometry={geometry2}>
          <lineBasicMaterial
            attach="material"
            color={"#fff"}
            linewidth={30}
            linecap={"round"}
            linejoin={"round"}
          />
        </line>

        <line geometry={geometry3}>
          <lineBasicMaterial
            attach="material"
            color={"#fff"}
            linewidth={30}
            linecap={"round"}
            linejoin={"round"}
          />
        </line>

        <line geometry={axis}>
          <lineBasicMaterial
            attach="material"
            color={"#fff"}
            linewidth={30}
            linecap={"round"}
            linejoin={"round"}
          />
        </line>

        <line geometry={axis2}>
          <lineBasicMaterial
            attach="material"
            color={"#fff"}
            linewidth={30}
            linecap={"round"}
            linejoin={"round"}
          />
        </line>

        <line geometry={axis3}>
          <lineBasicMaterial
            attach="material"
            color={"#fff"}
            linewidth={30}
            linecap={"round"}
            linejoin={"round"}
          />
        </line>

        <line geometry={axis4}>
          <lineBasicMaterial
            attach="material"
            color={"#fff"}
            linewidth={30}
            linecap={"round"}
            linejoin={"round"}
          />
        </line>

        <line geometry={axis5}>
          <lineBasicMaterial
            attach="material"
            color={"#fff"}
            linewidth={30}
            linecap={"round"}
            linejoin={"round"}
          />
        </line>

        <line geometry={axis6}>
          <lineBasicMaterial
            attach="material"
            color={"#fff"}
            linewidth={30}
            linecap={"round"}
            linejoin={"round"}
          />
        </line>

        {/* <line geometry={dataLine}>
          <lineBasicMaterial
            attach="material"
            color={"#f00"}
            linewidth={30}
            linecap={"round"}
            linejoin={"round"}
          />
        </line> */}

        

        {Textt1}
      </group>
    </>
  );
}

export function TextAroundRadar() {
  var angle=Math.PI/6
  var arete=800
  return (
      <mesh>
      <Text
        rotation={[0, 0, 0]}
        fontSize={50}
        position={[arete*Math.cos(angle), arete*Math.sin(angle), 0]}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        hello world!
        <meshNormalMaterial color={"white"} />
      </Text>
      <Text
        rotation={[0, 0, 0]}
        fontSize={50}
        position={[arete*Math.cos(Math.PI/2), arete*Math.sin(Math.PI/2), 0]}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        hello world!
        <meshNormalMaterial color={"white"} />
      </Text>
      <Text
        rotation={[0, 0, 0]}
        fontSize={50}
        position={[arete*Math.cos(Math.PI*5/6), arete*Math.sin(Math.PI*5/6), 0]}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        hello world!
        <meshNormalMaterial color={"white"} />
      </Text>
      <Text
        rotation={[0, 0, 0]}
        fontSize={50}
        position={[arete*Math.cos(Math.PI*7/6), arete*Math.sin(Math.PI*7/6), 0]}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        hello world!
        <meshNormalMaterial color={"white"} />
      </Text>
      <Text
        rotation={[0, 0, 0]}
        fontSize={50}
        position={[arete*Math.cos(-Math.PI/2), arete*Math.sin(-Math.PI/2), 0]}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        hello world!
        <meshNormalMaterial color={"white"} />
      </Text>
      <Text
        rotation={[0, 0, 0]}
        fontSize={50}
        position={[arete*Math.cos(-Math.PI/6), arete*Math.sin(-Math.PI/6), 0]}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        hello world!
        <meshNormalMaterial color={"white"} />
      </Text>
      </mesh>
  );
}
