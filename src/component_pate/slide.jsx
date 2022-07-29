import SlidingPanel from "react-sliding-side-panel";
import React, { useState, Component, useEffect } from "react";
import MenuSvg from "./menu_svg";
import styled, { keyframes } from "styled-components";

const crossPulse = () => keyframes`
0% {
  /* stroke-dasharray:"1 30"; */
  /* stroke-dashoffset:0; */
  transform: translate(30px,30px);
  
  

}

100%{
  /* stroke-dasharray:"1 30"; */
  /* stroke-dashoffset:20; */

}
`;

const crossPulse2 = () => keyframes`
0% {
  /* stroke-dasharray:"1 30"; */
  /* stroke-dashoffset:0; */
  /* transform: translate(-30px,30px); */
  
  

}

100%{
  /* stroke-dasharray:"1 30"; */
  /* stroke-dashoffset:20; */
  transform: translate(-30px,30px);

}
`;

// const Xline=styled.svg.line`
// /* display: inline-block; */
// animation: ${circlePulse} 2s linear infinite;
// /* padding: 2rem 1rem; */
// /* font-size: 1.2rem; */
// `;

export default function MenuContainer() {
  const [visible, setVis] = useState(false);

  function toggleMenu() {
    // console.log("rr");
    setVis(!visible);
  }

  return (
    <div className="position-absolute">
      {/* {visible?"visible":"hidden"} */}
      <MenuSvg
        id="roundButton"
        menuVisibility={!visible}
        onMouseDown={toggleMenu}
      />

      <Menu onMouseDown={toggleMenu} menuVisibility={visible} />
    </div>
  );
}

export function Menu(props) {
  const [visibility, setVis] = useState("hide");

  useEffect(() => {
    if (props.menuVisibility && visibility != "show") {
      setVis("show");
    }
    if (!props.menuVisibility && visibility != "hide") {
      setVis("hide");
    }
  }, [props.menuVisibility]);

  const BurgerImageStyle = styled.svg`
    line {
      stroke-dasharray: "0";
    }
    &:hover {
      line.bar1 {
        stroke: white;
        animation: ${crossPulse} 1s alternate infinite;
      }
      line.bar2 {
        stroke: white;
        animation: ${crossPulse2} 1s alternate infinite;
      }
    }
  `;

  return (
    <div
      id="flyoutMenu"
      // style={{visibility: props.menuVisibility ? "visible" : "hidden"}}
      className={visibility}
    >
      <div className="d-flex flex-row align-items-center h-100">
        <div className="col w-50 m-auto align-items-center">
          <div className="m-auto d-flex flex-column p-4">
            <BurgerImageStyle
              xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" focusable="false" className="w-25
              cursor-pointer" // onMouseDown={props.onMouseDown}
              onClick={props.onMouseDown}>
              {/* <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                // fill="#fff"
              ></path> */}
              <line
                className="bar1"
                x1="0"
                y1="0"
                x2="24"
                y2="24"
                stroke-width="2"
                stroke="white"
              />
              <line className="bar2" x1="0" y1="24" x2="24" y2="0" stroke="white" stroke-width="2" />
            </BurgerImageStyle>
          </div>
        </div>
        <div className="d-flex col w-50 m-auto  flex-column align-content-between">
          <h2 className="row">
            <a href="#">Home</a>
          </h2>
          <h2 className="row">
            <a href="#">About</a>
          </h2>
          <h2 className="row">
            <a href="#">Contact</a>
          </h2>
          <h2 className="row">
            <a href="#">Search</a>
          </h2>
        </div>
      </div>
    </div>
  );
}

// export default Menu;
