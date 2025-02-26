
import styled from 'styled-components';
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, DARK_RED, LOGO_RED, WHITE } from './Variables'; 

export const Container = styled.div`
  margin: 20px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column; 
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  transition: box-shadow 0.3s ease; 

  
  @media (min-width: ${BREAKPOINT_TABLET}) {
    flex-direction: row; 
  }
  @media (min-width: ${BREAKPOINT_DESKTOP}) {
    max-width: 50%;
  }
`;

export const CotwTitle = styled.h2`
    color: ${DARK_RED};
`;

export const CotwExpandTitle = styled.h2`
    color: ${DARK_RED};
    background-color: lightgrey;
    margin: 0;
    padding: 10px;
    border-radius: 4px;
`;

export const ImageContainer = styled.div`
  flex: 1 0 25%;
  margin-bottom: 20px; 
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: ${BREAKPOINT_TABLET}) {
    margin-right: 30px; 
    margin-bottom: 0; 
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  flex: 2;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const StyledListItem = styled.li`
  margin: 10px 0;
`;

export const StyledLabel = styled.label`
  font-size: 18px;
  cursor: pointer;
`;

export const LoadingText = styled.p`
  font-size: 18px;
  color: #666;
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;

@media (min-width: ${BREAKPOINT_TABLET}) {
  justify-content: flex-start;
}
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  font-size: 18px;
  background-color: ${DARK_RED};
  color: ${WHITE};
  border: 3px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${LOGO_RED};
  }
`;

export const ResultContainer = styled.div`
margin: 20px 0;
padding: 10px;
  border: 2px solid ${DARK_RED};
  border-radius: 8px;
`
