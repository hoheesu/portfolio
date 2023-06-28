import React from "react";
import styled from "styled-components";
import PageIcon from "./PageIcon.tsx";
import { mixins } from "../styles/theme";

function PageIcons() {
  return (
    <PageList>
      <li>
        <PageIcon iconTitle="Portfolio" />
      </li>
      <li>
        <PageIcon iconTitle="Skills" />
      </li>
      <li>
        <PageIcon iconTitle="Project" />
      </li>
      <li>
        <PageIcon iconTitle="Contact" />
      </li>
    </PageList>
  );
}

const PageList = styled.ul`
  ${mixins.centerFlex};
  gap: 4em;
`;

export default PageIcons;
