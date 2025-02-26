import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, LIGHTERGREY, LIGHTGREY } from "./Variables";

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
    input::placeholder,
    textarea::placeholder {
      font-family: "Inria Serif", serif;
      color: #999;
      font-size: 16px;
}

  .contactInput {
    font-family: "Inria Serif", serif;
    font-size: 16px;
    line-height: 5px;
    background-color: ${LIGHTERGREY};
    color: ${LIGHTGREY};
    border: none;
    outline: none;
    padding: 10px;
    width: 300px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 350px;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 400px;
    }
  }

  .contactTextArea {
    font-family: "Inria Serif", serif;
    font-size: 16px;
    line-height: 5px;
    resize: none;
    background-color: ${LIGHTERGREY};
    color:  ${LIGHTGREY};
    border: none;
    outline: none;
    height: 260px;
    padding: 10px;
    width: 300px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 350px;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 400px;
    }
  }


`;
