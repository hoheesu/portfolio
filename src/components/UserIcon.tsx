import React from "react";
import styled from "styled-components";
import { mixins } from "../styles/theme";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { iconClick } from "../store/mainIconSlice";

function UserIcon() {
  const dispatch = useDispatch();
  const mainIcon = useSelector((state: RootState) => {
    return state.mainIcon.value;
  });

  const clickIcon = () => {
    dispatch(iconClick(true));
  };

  console.log(mainIcon);

  return (
    <FlexBox
      onClick={() => {
        clickIcon();
      }}
    >
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
  cursor: pointer;
  flex-direction: column;
  width: max-content;
  gap: 2em;
`;
const UserName = styled.h2`
  font-size: 2em;
  color: var(--color-font);
  text-shadow: 2px 3px 2px #333;
`;
const ClickBox = styled.div`
  ${mixins.centerFlex};
  background-color: var(--color-font);
  width: 20em;
  height: 2em;
  border-radius: 1em;
`;
const IconBox = styled.div`
  ${mixins.centerFlex};
  width: max-content;
  border-radius: 50%;
  background-color: var(--color-font);
`;
const UserImg = styled.img`
  color: var(--color-icon);
  width: 10em;
  height: 10em;
`;

export default UserIcon;
