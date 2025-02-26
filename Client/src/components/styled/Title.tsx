import styled from "styled-components";
import { BLACK, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, DARK_RED, WHITE } from "./Variables";

// ------------------------ H1 ----------------------- //
export const H1WhiteTitle = styled.h1 `
    padding: 0;
    color: ${WHITE};
    font-size: 2rem;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      font-size: 2.3rem;
    }

    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      font-size: 3.2rem;
    }
`;

export const H1BlackTitle = styled(H1WhiteTitle) `
  color: ${BLACK};
`;

export const H1BlackTitleCenter = styled(H1WhiteTitle) `
  color: ${BLACK};
  text-align: center;
`;

export const H1RedTitle = styled(H1WhiteTitle)`
color: ${DARK_RED};
    font-size: 2.5rem;
    text-align: center;
`;


// ------------------------ H2 ----------------------- //

export const H2WhiteTitle = styled.h2`
  padding: 0;
  color: ${WHITE};
  font-size: 1.4rem;
  margin: 8px 0;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    font-size: 2rem;
  }
`;

export const H2NewsTitle = styled(H2WhiteTitle)` // used in Faq
  color: ${DARK_RED};
`;

export const H2NewsTitleCenter = styled(H2WhiteTitle)` // used in Faq
  color: ${DARK_RED};
  text-align: center;
`;

export const H2BlackTitle =styled(H2WhiteTitle)`
  color: black;
`;

export const H2DemosTitle = styled.h2`
  font-size: 2rem;
  margin: 8px 0;
  text-align: center;
  color: ${WHITE};
`;

// ------------------------ H3 ----------------------- //
export const H3WhiteTitle = styled.h3 `
  font-size: 1.1rem;
  line-height: 30px;
  color: ${WHITE};
  font-weight: 400;
  font-family: "Inria Serif", serif;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    font-size: 1.3rem;
    line-height: 33px;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    font-size: 1.4rem;
  }
`;

export const H3BlackTitle = styled(H3WhiteTitle)`
  color: black;
`;

// --------------- H4 ----------------- //

export const H4BlackTitle = styled.h4`
    color: black;
`;
