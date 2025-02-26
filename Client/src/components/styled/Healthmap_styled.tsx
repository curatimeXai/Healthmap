
import { BREAKPOINT_TABLET, BREAKPOINT_DESKTOP,DARK_RED,WHITE,BLACK } from "./Variables";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const HomeWrapper = styled.section`
  width: 80%;
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

export const WhoPageWrapper = styled.section` 
display: flex;
align-items: center;
justify-content: center;
  background-color: transparent;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  width: 90vw;
  max-width: 1150px;
  margin: auto;
  padding: 24px;
  gap: 16px;
  box-sizing: border-box;

  @media (min-width: ${BREAKPOINT_TABLET}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 24px;
  }
  @media (min-width: ${BREAKPOINT_DESKTOP}) {
    margin: 30px auto;
  }
`;

export const WhoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${DARK_RED};
  border: none;
  margin: 0;
  border-radius: 16px;
  padding: 16px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  min-height: 200px;
  flex-grow: 1;

  @media (min-width: ${BREAKPOINT_TABLET}) {
    width: 45%;
    height: auto;
  }
  @media (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 30%;
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 150px;
  border: 4px solid ${WHITE};
  overflow: hidden;
  border-radius: 12px;
  margin: 0;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const WrapLine = styled.div`
  height: 0.4em;
  width: 100%;
  border-radius: 8px;
  background-color: ${WHITE};
  margin: 9px 0;
`;

export const Info = styled.p`
  font-size: 1.2em;
  margin-bottom: 8px;
  color: ${WHITE};
`;

export const WhoLink = styled(Link)`
  color: ${WHITE};
  text-decoration: none;
  font-size: 1.5em;
  margin-top: auto;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
  img {
    margin-left: 8px;
    height: 1em;
    width: auto;
  }
`;