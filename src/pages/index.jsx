import React from "react";
// import "./App.css";
import axios from "axios";
import { useState } from "react";
import AA from "../component_pate/SafeHydrate";
// import { A } from "@svgdotjs/svg.js";
import  MenuContainer  from "../component_pate/slide";
import { Navbar } from "../component/navbar/navbar";
import Menu_droit from "../component_pate/menu_droit";
import Scene from "../component_pate/camembert";
const Dashboard = () => {
  return (
    <AA>
      <GG />
    </AA>
  );
};
const GG = () => {
    const [sceneId, setSceneId] = useState(0);
    const [close, setClose] = useState(true);
    function handleCLick() {
      console.log("click");
      setSceneId(sceneId + 1);
    }
  return (
    <React.StrictMode>
      <div
        style={{ top: "10%", backgroundColor: "black" }}
        className={"w-100 h-100 position-absolute overflow-hidden "}
      />
      <div
        style={{ top: "10%", backgroundColor: "black" }}
        className={"h-50 overflow-hidden "}
      >
        {/* <CssBaseline /> */}

        <Navbar />
        <Menu_droit handleCLick={handleCLick} />
        {/* <Slide /> */}

        <MenuContainer />
        {/* <MenuSvg /> */}
        {/* <div> */}
        <Scene key={sceneId} close={close} />
      </div>
    </React.StrictMode>
  );
};

export default Dashboard;
