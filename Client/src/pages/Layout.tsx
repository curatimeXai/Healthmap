import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import styled from "styled-components";
import { Footer } from "../components/Footer";

const MainContainer = styled.main`
  overflow-x: hidden;
  margin-left: 0;
  margin-right: 0;
  padding: 0;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const Layout = () => {
  return (
    <AppContainer> 
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer></Footer>
      </AppContainer>
  );
};
