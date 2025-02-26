import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavigationContainer, DesktopMenu } from "./menu/DesktopMenu";
import { HamburgerMenu } from "./menu/HamburgerMenu";
import { WHITE } from "./styled/Variables";


const StyledHeader = styled.header`
  position: relative;
  top: 0;
  z-index: 100;
  color: ${WHITE};
  margin: 0;
  max-width: 100vw;
  padding: 0;
  padding-top: 2px;
  padding-bottom: 2px;
  //overflow-x: hidden;
  //overflow-y: visible;
  background-image: 
  linear-gradient(360deg, rgba(180, 30, 30, 0.95) 0%, rgba(133, 22, 22, 0.973064) 65%, rgba(118, 20, 20, 0.98025) 76%, rgba(99, 17, 17, 0.989288) 90%, #4E0D0D 100%),
  linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04));
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div id="top"></div>
      <NavigationContainer>
        <Link to="/"><img src="/images/logoHigh.svg" alt="Logo" width="140px" /></Link>
        <HamburgerMenu />
        <DesktopMenu />
      </NavigationContainer>
    </StyledHeader>
  );
};
