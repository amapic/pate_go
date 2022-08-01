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
import { CameraControls } from "./CameraControls";
import * as THREE from "three";

function Portion(props) {
  const mesh = useRef();
  // const mesh2 = useRef();
  var onInit = false;
  var angle = 0;
  var end = false;
  var fin_anim = false;
  var debut_eclatement = false;
  var rassemblement = true;
  var init = false;
  const [rp, setRp] = useState([Math.PI / 2, 0, 0]);
  // const [init, setInit] = useState(props.close);
  const [gsf, setsfgs] = useState(true);
  angle = props.thetaEnd - props.thetaDebut;

  var posXdebut = 500 * Math.sin(angle);
  var posYdebut = 500 * Math.cos(angle);

  const handleClick = () => {
    setRp([Math.PI / 2, 0, 0]);
    // setInit(true);
    setsfgs(!gsf);
  };

  useEffect(() => {
    if (props.close) {
      init = true;
    }

    if (!props.close) {
      init = false;
    }
  }, [props.close]);

  useFrame(() => {
    if (!rassemblement) {
      init && !end && !fin_anim ? (mesh.current.rotation.y += 0.2) : false,
        !init && !fin_anim ? (mesh.current.rotation.y += 0.01) : false,
        !onInit
          ? false
          : (mesh.current.position.y +=
              Math.cos(angle + mesh.current.rotation.y) * 1),
        !onInit
          ? false
          : (mesh.current.position.x +=
              Math.sin(angle + mesh.current.rotation.y) * 1),
        fin_anim ? (mesh.current.rotation.y += 0) : false;
    }
  });

  //remise a zero
  useFrame(() => {
    if (
      init &&
      mesh.current.rotation.y % (2 * Math.PI) < 1 &&
      mesh.current.rotation.y % (2 * Math.PI) > -1
    ) {
      end = true;
      fin_anim = true;
      debut_eclatement = true;
    }
  });

  //eclatement
  useFrame(
    () => 
    {
      if (mesh.current.position.x>300){
          props.upgradeShowText(false);
        }
    (
      debut_eclatement
        ? (mesh.current.position.x += Math.sin(angle) * 100)
        : true,
      debut_eclatement
        ? (mesh.current.position.y += Math.cos(angle) * 100)
        : true
        
    )
    }
  );

  //rassemblement
  useFrame(() => {
    if (mesh.current.position.x < 0.5 && mesh.current.position.y < 0.5) {
      rassemblement = false;
      props.upgradeShowText(true);
    }
  });

  useFrame(
    () => (
      rassemblement ? (mesh.current.position.x -= Math.sin(angle) * 10) : true,
      rassemblement ? (mesh.current.position.y -= Math.cos(angle) * 10) : true
    )
  );

  //   var intersects = raycaster.intersectObjects( objects );
  // if ( intersects.length > 0 ) {
  //     // find the object by name? intersects[0].
  //     // Hidden if index > 0
  // }

  const geometry = new THREE.CylinderGeometry(300, 300, 50, 32);
  const edges = new THREE.EdgesGeometry(geometry);

  return (
    <>

      <mesh
        position={[posXdebut, posYdebut, 0]}
        scale={[1, 1, 1]}
        rotation={rp}
        castShadow={true}
        receiveShadow={true}
        ref={mesh}
        onClick={handleClick}
        opacity={0}
      >
        <cylinderGeometry
          attach="geometry"
          args={[300, 300, 50, 32, , false, props.thetaDebut, props.thetaEnd]}
        />

        <meshBasicMaterial transparent color={"black"} opacity={1} />
        <Edges
          scale={1}
          threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
          color="red"
          linewidth={30}
        />
      </mesh>
    </>
  );
}

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    // let curve = new THREE.EllipseCurve(-200, 200, 500, 500);
    // let v = new THREE.Vector3();
    // let t = (clock.getElapsedTime() * 0.05) % 1;
    // curve.getPointAt(t, v);
    camera.position.z = 1800 + Math.sin(clock.getElapsedTime()) * 150;
    camera.position.x = Math.sin(clock.getElapsedTime()) * 300;
    camera.position.x = Math.cos(clock.getElapsedTime()) * 300;
    // camera.position.copy(v);
  });
  return null;
}

export default function Scene(props) {
  var POS_X = 0;
  var POS_Y = 0;
  var POS_Z = 1800;

  var WIDTH = 1000;
  var HEIGHT = 600;

  var FOV = 45;
  var NEAR = 1;
  var FAR = 120000;
  // const camera = new THREE.PerspectiveCamera( 60, width / height, 0.01, 1000 );
  var camera = new THREE.PerspectiveCamera(FOV, WIDTH / HEIGHT, NEAR, FAR);
  camera.position.set(POS_X, POS_Y, POS_Z);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  var camera2=camera.clone();

  const [reset, setReset] = useState(false);
  const [showText, setShowText] = useState(false);
  let curve = new THREE.EllipseCurve(0, 0, 10, 5);

  const upgradeShowText = (bool) => {
    setShowText(bool);
  }


  let v = new THREE.Vector3();
  let clock = new THREE.Clock();
  // useFrame(() => {
  //   let t = (clock.getElapsedTime() * 0.05) % 1;
  //   curve.getPointAt(t, v);
  //   {
  //     // rassemblement ? (mesh.current.position.x -= Math.sin(angle) * 4) : true,
  //     // rassemblement ? (mesh.current.position.y -= Math.cos(angle) * 4) : true,
  //     camera.position.copy(v);
  //   }
  // });
  const fontUrl="https://fonts.googleapis.com/css2?family=Hanalei+Fill&display=swap"
  return (
    // <>
    <React.StrictMode>
      {/* <div onClick={oonClick}>AAfgdhdg</div> */}
      <Canvas
        camera={camera}
        style={{
          width: "50%",
          height: "900px",
          position: "absolute",
          left: "25%",
        }}
      >
        {/* <primitive position={[0, 0, 0]} object={new THREE.AxesHelper(2000)} /> */}
        <Portion upgradeShowText={upgradeShowText} thetaDebut={0} thetaEnd={1.7} close={props.close} />
        <Portion upgradeShowText={upgradeShowText} thetaDebut={1.8} thetaEnd={2.1} close={props.close} />
        <OrbitControls />
        
        <Dolly />
      </Canvas>
      <Canvas
      camera={camera2}
      style={{
        width: "50%",
        height: "900px",
        position: "absolute",
        right: "25%",
      }}
      >
        <Text visible={showText} rotation={[0,0,0]}  fontSize={100} position={[500,500,0]} color="black" anchorX="center" anchorY="middle">
          hello world!
          <meshNormalMaterial color={"white"} />
        </Text>
      </Canvas>
    </React.StrictMode>
  );
}
