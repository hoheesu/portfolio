import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/globalstyle.tsx";
import UserIcon from "./components/UserIcon.tsx";
import PageIcons from "./components/PageIcons.tsx";
import TopDock from "./components/TopDock.tsx";
import BotDock from "./components/BotDock.tsx";
import { mixins } from "./styles/theme";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const mainIcon = useSelector((state: RootState) => {
    return state.mainIcon.value;
  });
  return (
    <>
      <GlobalStyle />
      <MainBg>
        <TopDock />
        {mainIcon ? <PageIcons /> : <UserIcon />}
        {mainIcon ? <BotDock /> : <div></div>}
      </MainBg>
    </>
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
export default App;
