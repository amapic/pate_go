import styled, { keyframes } from "styled-components";

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
  margin: 100px 0px;
  right: 0px;
`;

const Texte2 = styled.div`
  /* margin:30px 0px; */
  right: 0px;
  text-decoration-line: underline;
`;

const Texte3 = styled.div`
  margin: 30px 0px;
  right: 0px;
  top: 300px;
  font-size: 45px;
  animation: ${textePulse} 1s alternate infinite;
  z-index: 1;
  &:hover {
    margin-right: 30px;
  }
`;

const Col1 = styled.div`
  width: 50%;
  z-index: 2;
`;

const Col2 = styled.div`
  width: 50%;
  background-color:#fafafa;
  z-index: 4;
  
`;

export default function Corps() {
  return (
    <Wrapper  id="wrapper_main">
      <Col1 >
        <Texte1>Onctuosité</Texte1>
        <Texte2>Caractéristiques camemberielles</Texte2>
        <Texte3>Localisation</Texte3>
      </Col1>
      <Col2 className="col w-20"></Col2>
    </Wrapper>
  );
}
