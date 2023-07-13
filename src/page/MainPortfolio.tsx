import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { mixins } from "../styles/theme";
import GlobalStyle from "../styles/globalstyle";
import TopDock from "../components/TopDock";
import VsCodeMain from "../components/vsCode/VsCodeMain";

function MainPortfolio() {
  let mainPath = useLocation();
  const mainSite = () => {
    switch (mainPath.pathname) {
      case "/vspt":
        return <VsCodeMain />;
      default:
        return "";
    }
  };
  useEffect(() => {
    console.log("url", mainPath?.pathname);
  }, []);
  return (
    <MainBg>
      <GlobalStyle />
      <TopDock />
      {mainSite()}
      <P>flex를 위한 태그</P>
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
