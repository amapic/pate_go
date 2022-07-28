import SlidingPanel from "react-sliding-side-panel";
import React, { useState, Component, useEffect } from "react";
import MenuSvg from "./menu_svg";

export default function Slide() {
  const [openPanel, setOpenPanel] = useState(false);
  return (
    <div>
      <div>
        <button onClick={() => setOpenPanel(true)}>Open</button>
      </div>
      <SlidingPanel type={"left"} isOpen={openPanel} size={30}>
        <div>
          <div>My Panel Content</div>
          <button onClick={() => setOpenPanel(false)}>close</button>
        </div>
      </SlidingPanel>
    </div>
  );
}


export function MenuContainer(props) {
  
  const [visible, setVis] = useState(false);


  function toggleMenu() {
    setVis(!visible);
  }

  return (
    <>
      {/* <MenuButton handleMouseDown={toggleMenu} /> */}
      <MenuSvg id="roundButton" menuVisibility={!visible} onMouseDown={toggleMenu} />

      <Menu onMouseDown={toggleMenu}   menuVisibility={visible} /> 
      
    </>
  );
}


export function Menu(props) {
  const [visibility, setVis] = useState("visible");

  useEffect(() => {
    if (props.menuVisibility) {
      setVis("hidden");
    }
  }, []);

  // render() {
  //   var visibility = "hide";

  //   if (this.props.menuVisibility) {
  //     visibility = "show";
  //     setVis("show");
  //   }

  return (
    <div
      id="flyoutMenu"
      onMouseDown={props.onMouseDown}
      style={{visibility: props.menuVisibility ? "visible" : "hidden"}}
    >
      <h2>
        <a href="#">Home</a>
      </h2>
      <h2>
        <a href="#">About</a>
      </h2>
      <h2>
        <a href="#">Contact</a>
      </h2>
      <h2>
        <a href="#">Search</a>
      </h2>
    </div>
  );
}

// export default Menu;
