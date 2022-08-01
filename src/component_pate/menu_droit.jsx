import styled, { keyframes } from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import Portion from "./camembert"
const textePulse = () => keyframes`
0% {
  /* stroke:transparent; */
  transform: translate(0px, 50px);
  

}

20% {
  /* stroke:transparent; */
  /* transform: translate(50px, 0px); */
  

}

100%{
    /* stroke:black; */
    // transform: translate(5px, 5px);
    
  

}
`;

// const color=#fff;
const Wrapper = styled.div`
  margin: 0px 0px 0px 60px;
  right: 0px;
  position: absolute;
  border-right: 1px solid black;
  height: 85%;
  z-index: 2;
  display: flex;
  flex-direction: row;
  width: 15%;
`;

const Texte1 = styled.div`
top: 20%;
color:#fff;
  margin: 30px 0px;
  /* margin: 100px 0px; */
  position: absolute;
  font-size: 25px;
  /* right: 0px; */
  right: ${props => (props.selected==1 ? '40px' : '20px')};
  animation: ${textePulse} 4s alternate infinite;
  animation-delay: 1s;
  font-family:"Gilda Display", serif;
`;

const Texte2 = styled.div`
  color:#fff;
  margin: 30px 0px;
  top: 40%;
  /* margin:30px 0px; */
  position: absolute;
  font-size: 25px;
  /* right: 0px; */
  /* text-decoration-line: underline; */
  right: ${props => (props.selected==2 ? '40px' : '20px')};
  animation: ${textePulse} 6s alternate-reverse infinite;
  animation-delay: 0.7s;
  font-family:"Gilda Display", serif;
`;

const Texte3 = styled.div`
  margin: 30px 0px;
  color:#fff;
  position: absolute;
  /* right: 0px; */
  top: 60%;
  font-size: 25px;
  animation: ${textePulse} 4s alternate infinite;
  z-index: 1;
  /* &:hover {
    margin-right: 30px;
  }; */
  right: ${props => (props.selected==3 ? '40px' : '20px')};
  font-family:"Gilda Display", serif;
`;

const Col1 = styled.div`
  
  width: 50%;
  border-right: 1px solid white;
  background-color:#000;
  /* z-index: 2; */
`;

const Col2 = styled.div`
  width: 50%;
  background-color:#000;
  /* z-index: 4; */
  
`;



export default function Corps(props) {

  const [selected, setSelected] = useState(0);
  function handleClick(id) {
    setSelected(id)
    props.handleClick()
  }
  return (
    <>
    <Wrapper  id="wrapper_main">
      {/* <Portion /> */}
      <Col1 >
        <Texte1 selected={selected} onClick={()=>handleClick(1)}>Descriptif</Texte1>
        <Texte2 selected={selected} onClick={()=>handleClick(2)}>Caractéristiques camemberielles</Texte2>
        <Texte3 selected={selected} onClick={()=>handleClick(3)}>Localisation</Texte3>
      </Col1>
      <Col2 className="col w-20"></Col2>
    </Wrapper>
    </>
  );
}
