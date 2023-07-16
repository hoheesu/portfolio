import React from "react";
import styled from "styled-components";
import PageIcon from "./PageIcon.tsx";
import { mixins } from "../styles/theme";

function PageIcons() {
  return (
    <PageList>
      <li>
        <PageIcon
          iconTitle="폴더로 보기"
          iconSrc="zondicons:folder"
          iconUrl="/folderpt"
        />
      </li>
      <li>
        <PageIcon
          iconTitle="크롬으로 보기"
          iconSrc="logos:chrome"
          iconUrl="/chromept"
        />
      </li>
      <li>
        <PageIcon
          iconTitle="VSCode로 보기"
          iconSrc="skill-icons:vscode-light"
          iconUrl="/vspt"
        />
      </li>
      <li>
        <PageIcon
          iconTitle="메모로 보기"
          iconSrc="fxemoji:emptynote"
          iconUrl="/notept"
        />
      </li>
    </PageList>
  );
}

const PageList = styled.ul`
  ${mixins.centerFlex};
  gap: 4em;
`;

export default PageIcons;
