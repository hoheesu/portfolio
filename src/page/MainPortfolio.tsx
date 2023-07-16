import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { mixins } from "../styles/theme";
import GlobalStyle from "../styles/globalstyle";
import TopDock from "../components/TopDock";
import VsCodeMain from "../components/vsCode/VsCodeMain";
import FolderMain from "../components/folder/FolderMain";
import ChromeMain from "../components/chrome/ChromeMain";
import MemoMain from "../components/note/NoteMain";

function MainPortfolio() {
  let mainPath = useLocation();
  const mainSite = () => {
    switch (mainPath.pathname) {
      case "/folderpt":
        return <FolderMain />;
      case "/chromept":
        return <ChromeMain />;
      case "/vspt":
        return <VsCodeMain />;
      case "/notept":
        return <MemoMain />;
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
