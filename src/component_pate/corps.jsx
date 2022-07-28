import styled from "styled-components";



const Wrapper = styled.div`
    margin:0px 60px;
    right:0px;
    position:absolute;
    border-right:1px solid black;
`;

const Texte1 = styled.div`
    /* margin:30px 0px; */
    right:0px;
`;

const Texte2 = styled.div`
    /* margin:30px 0px; */
    right:0px;
    text-decoration-line: underline;
`;

const Texte3 = styled.div`
    /* margin:30px 0px; */
    right:0px;
`;

export default function Corps(){

    return(
        <Wrapper id="wrapper_main">
            <Texte1>
                AA
            </Texte1>
            <Texte2>
                Afxg
            </Texte2>
            <Texte3>
                Asfgsfg
            </Texte3>
        </Wrapper>
    )
}