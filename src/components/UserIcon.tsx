import React from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { mixins } from "../styles/theme";

function UserIcon() {
  return (
    <FlexBox>
      {/* <User icon="solar:user-bold" /> */}
      <h2>윤준수</h2>
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
  gap: 1em;
`;
const ClickBox = styled.div`
  ${mixins.centerFlex};
  background-color: var(--color-box);
  width: 20em;
  height: 2em;
  border-radius: 1em;
`;
const User = styled(Icon)`
  color: var(--color-icon);
  width: 10em;
  height: 10em;
`;

export default UserIcon;
