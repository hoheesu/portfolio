import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/globalstyle.tsx";
import UserIcon from "./components/UserIcon.tsx";
import PageIcons from "./components/PageIcons.tsx";
import TopDock from "./components/TopDock.tsx";
import BotDock from "./components/BotDock.tsx";
import { mixins } from "./styles/theme";

function App() {
  const [userClick, setUserClick] = useState(false);
  useEffect(() => {}, [userClick]);
  return (
    <>
      <GlobalStyle />
      <MainBg>
        <TopDock />
        {userClick ? <PageIcons /> : <UserIcon setUserClick={setUserClick} />}
        {userClick ? <BotDock /> : <div></div>}
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
