import styled from "styled-components";
import { BLACK, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, WHITE } from "./Variables";

export const Wrapper = styled.section`
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #ffffffd9;
padding-top: 10px;
padding-bottom: 30px;
border-radius: 10px;
margin-bottom: 20px;

@media screen and (min-width: ${BREAKPOINT_TABLET}) {
  width: 600px;
}

@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  width: 800px;
}
`;

export const TextWrapper = styled(Wrapper)`
  width: 350px;
  background-color: transparent;
  

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
  width: 450px;
}

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 550px;
  }
`;
export const TextWrapperLeft = styled(TextWrapper)`
  text-align: left;
  padding-bottom: 0;

`;

// Used in Home, FAQ.
export const WhiteWrapper = styled.section`
width: 90%;
//max-width: 1150px;
display: flex;
flex-direction: column;
padding-top: 30px;
padding-bottom: 30px;
align-items: center;
background-color: ${WHITE};
border-radius: 20px;
margin-top: 20px;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
gap: 25px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
  width: 80%; 
  flex-direction: row;
  flex-wrap: wrap; // Rowbreak
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 10px;
  margin-top: 30px;
  justify-content: space-around;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    padding: 40px;
    padding-top: 50px;
  }
`;

export const WhiteWrapperContact = styled.div `
display: flex;
flex-direction: column;
width: 450px; 
padding-top: 30px;
padding-bottom: 30px;
align-items: center;
background-color: ${WHITE};
border-radius: 20px;
margin-top: 20px;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
gap: 25px;

@media screen and (min-width: ${BREAKPOINT_TABLET}) {
  width: 600px; 
  }
  
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 700px; 
  }

`;

export const HomeWrapper = styled.section`
  width: 90%;
  max-width: 1150px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  background-color: ${WHITE};
  border-radius: 20px;
  gap: 20px;
  margin: 20px;
  padding: 30px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  gap: 25px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    flex-direction: column; 
    padding: 20px;
    margin-bottom: 10px;
    gap: 25px;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    padding: 40px;
    flex-direction: column; 
  }
`;

interface BlockWrapperProps {
  reverse?: boolean;
}
export const BlockWrapper = styled.div<BlockWrapperProps>`
  display: flex;
  flex-direction: column; 
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 1000px;
  margin: 10px 0;

  .image {
    order: 1;
  }
  .text {
    order: 2;
  }
  
  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')}; // 
    justify-content: space-between;
    gap: 20px; 

    .image {
      order: ${({ reverse }) => (reverse ? 2 : 1)};
    }
    .text {
      order: ${({ reverse }) => (reverse ? 1 : 2)};
    }
  }
`;

// Used in Home inside WhiteWrapper
export const TextBoxSmallTransparent = styled.div`
width: 100%;
align-items: center;
text-align: left;
background-color: transparent;
padding: 0 10px 0 10px;
margin: 0 10px 0 10px;
color: ${BLACK};
font-size: 1rem;
font-weight: 400;
font-family: "Inria Serif", serif;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 45%;
    font-size: 1.2rem;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 400px;
    font-size: 1.3rem;
  }
`;

export const TextBoxLongTransparent = styled(TextBoxSmallTransparent)`
  width: 90%;
`;



