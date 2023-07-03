import React from "react";
import styled from "styled-components";
import { mixins } from "../styles/theme";
import GlobalStyle from "../styles/globalstyle";
import TopDock from "../components/TopDock";
import VsCodeBack from "../components/VsCodeBack";

function MainPortfolio() {
  return (
    <MainBg>
      <GlobalStyle />
      <TopDock />
      <VsCodeBack />
      <P>for flex - space-between</P>
    </MainBg>
  );
}
const backgroundImg = "src/assets/portfolioBg.jpg";

const MainBg = styled.div`
  position: fixed;
  ${mixins.centerFlex};
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${backgroundImg});
  width: 100vw;
  height: 100vh;
`;
const P = styled.p`
  text-indent: -9999px;
`;
export default MainPortfolio;
