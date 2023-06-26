import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/globalstyle.tsx";
import UserIcon from "./components/UserIcon.tsx";
import { mixins } from "./styles/theme";

function App() {
  const [userClick, setUserClick] = useState(false);
  useEffect(() => {}, [userClick]);
  return (
    <>
      <GlobalStyle />
      <MainBg>
        {userClick ? "" : <UserIcon setUserClick={setUserClick} />}
      </MainBg>
    </>
  );
}
const backgroundImg = "src/assets/portfolioBg.jpg";
const MainBg = styled.div`
  ${mixins.centerFlex};
  background-image: url(${backgroundImg});
  width: 100vw;
  height: 100vh;
`;
export default App;
