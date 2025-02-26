import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, GREY, WHITE } from "./styled/Variables";
import { NavLink } from "react-router-dom";

const FooterContainer = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px;
text-align: center;
margin-top: auto;
background-color: #4E0D0D;
background-image: linear-gradient(180deg, #B41E1E 0%, #9D1A1A 42%, #861616 62%, #701313 84.5%, #4E0D0D 100%);
color: ${WHITE};
overflow-x: hidden;
margin-left: 0;
margin-right: 0;
max-width: 100%;


@media screen and (min-width: ${BREAKPOINT_TABLET}) {
  gap: 3px;
}

@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  gap: 3px;
}
`;

const InnerFooter = styled.div `
font-size: 1rem;

@media screen and (min-width: ${BREAKPOINT_TABLET}) {
  font-size: 1.1rem;
}

a {
  color: ${WHITE};
  text-decoration: none;
  text-decoration: underline;
  &:hover {
    color: ${GREY};
  }
  li a:active {
      color: ${WHITE};
    }
}
`;

 const handleLinkClick = () => {
  const topElement = document.getElementById("top");
  if (topElement) {
    topElement.scrollIntoView({ behavior: "auto" });
  }
};

export const Footer = () => {

  return (
    <FooterContainer>
      <InnerFooter>
        Johannes Gutenberg University, Germany &nbsp; | &nbsp; &nbsp;
        <NavLink to="/contact" onClick={handleLinkClick}>Contact Us</NavLink>
      </InnerFooter>
    </FooterContainer>
  );
};