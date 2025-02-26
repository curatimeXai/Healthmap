import styled from "styled-components";
import { BREAKPOINT_TABLET, BREAKPOINT_DESKTOP } from "./Variables";

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px; 
  margin: 10px auto;


  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 50%; 
  }

  img {
    width: 100%; 
    height: auto; 
  }
`;

export const HeartImage = styled.img`
  height: auto;
  margin-bottom: 10px;
  width: 370px;
  border-radius: 16px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
   //  width: 350px;
    width: 45%;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 400px;
  }
`;

// ---------------------------------------------------------------- //
// --------------------- HOME IMAGE WRAPPER ----------------------- //
// ---------------------------------------------------------------- //
export const HeroWrap = styled.div `
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.04)), to(rgba(255, 255, 255, 0.04))), url(/images/pannel.png);
  background: linear-gradient(rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)), url(/images/pannel.png);
  background-blend-mode: normal;
  background-size: cover;
  background-position: center;
  background-color: #484273;

`;
// ------------------------------- 2
export const HeroWrapOuter = styled.div `
  width: 100%;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
  
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {

  }
`;

// ------------------------------- 3
export const HeroWrapInner = styled.div `
  padding: 10px 0;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    padding: 30px 0;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
   
  }

`;

// ------------------------------- 4
export const HeroContainer = styled.div `
  width: 100%;
  max-width: 1280px;
  padding-left: 15px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    padding-left: 30px;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    padding-left: 40px;
  }

`;

// ------------------- END HOME IMAGE WRAPPER ---------------------- //


// ---------------------------------------------------------------- //
// --------------------- FLORENCE IMAGE WRAPPER ------------------- //
// ---------------------------------------------------------------- //
export const FlorenceWrap = styled.div `
  background: linear-gradient(rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)), url(/images/nightingale.png);
  background-blend-mode: normal;
  background-size: cover;
  background-position: center;
  border: 1px solid #241f45;
  border-radius: 5px;

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    background-position: right;

}

`;
// ------------------------------- 2
export const FlorenceWrapOuter = styled.div `
  width: 100%;

`;

// ------------------------------- 3
export const FlorenceWrapInner = styled.div `
  padding: 10px 0;
  margin-left: 10px;
  margin-right: 10px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    padding: 30px 0;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
   
  }

`;

// ------------------------------- 4
export const FlorenceContainer = styled.div `
  /*width: 100%;*/
  max-width: 1280px;
  padding-left: 15px;
  padding-right: 40px;
  /*margin-left: auto;
  margin-right: auto;*/

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    padding-left: 30px;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    padding-left: 40px;
  }

`;

// ------------------- END FLORENCE IMAGE WRAPPER ------------------- //