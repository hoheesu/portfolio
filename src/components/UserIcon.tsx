import React from "react";
import styled from "styled-components";
import { mixins } from "../styles/theme";

function UserIcon() {
  return (
    <FlexBox>
      <IconBox>
        <UserImg src="src/assets/userImg.png" alt="user icon" />
      </IconBox>
      <UserName>윤준수</UserName>
      <ClickBox>
        <h3>포트폴리오를 보시려면 클릭해주세요</h3>
      </ClickBox>
    </FlexBox>
  );
}
const FlexBox = styled.div`
  ${mixins.centerFlex};
  flex-direction: column;
  width: max-content;
  gap: 2em;
`;
const UserName = styled.h2`
  font-size: 2em;
  color: var(--color-box);
  text-shadow: 1px 1px 1px #333;
`;
const ClickBox = styled.div`
  ${mixins.centerFlex};
  background-color: var(--color-box);
  width: 20em;
  height: 2em;
  border-radius: 1em;
`;
const IconBox = styled.div`
  ${mixins.centerFlex};
  width: max-content;
  border-radius: 50%;
  background-color: var(--color-box);
`;
const UserImg = styled.img`
  color: var(--color-icon);
  width: 10em;
  height: 10em;
`;

export default UserIcon;
