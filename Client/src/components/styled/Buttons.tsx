import styled from "styled-components";
import { BLACK, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, GREY, LIGHTORANGE, ORANGE, WHITE } from "./Variables";

export const Button = styled.button `
  padding: 0.5rem;
  margin: 0.5rem; 
  border: none;
  border-radius: 12px;
  background-color: ${WHITE};
  color: ${BLACK};
  font-weight: 600;
  width: 100px;
  height: 35px;
  cursor: pointer;
  &:hover {
    background-color: ${GREY};
    color: ${WHITE};
  }
  &:active {
    background-color: ${GREY};
    color: ${BLACK};
  }
`;

export const ButtonWrapper = styled.div `
  padding-bottom: 50px;
  padding-left: 0;
  padding-top: 20px;
`;

export const SendMessageBtn = styled(Button)`
  background-color: ${ORANGE};
  color: ${WHITE};
  &:hover {
    background-color: ${LIGHTORANGE};
    color: ${WHITE};
  }
  &:active {
    background-color: ${ORANGE};
    color: ${WHITE};
  }

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 120px;
    height: 40px;
    }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 135px;
    height: 45px;
    }
`;

export const ClearBtn = styled(SendMessageBtn)`


`;