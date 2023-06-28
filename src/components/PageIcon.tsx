import React from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { mixins } from "../styles/theme";

interface Props {
  iconTitle: string;
}

function PageIcon({ iconTitle }: Props) {
  return (
    <Folder>
      <FolderIcon icon="material-symbols:folder" width="6rem" />
      <Title>{iconTitle}</Title>
    </Folder>
  );
}

const Folder = styled.div`
  ${mixins.centerFlex};
  flex-direction: column;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(2px 3px 2px #fff);
  }
`;
const FolderIcon = styled(Icon)`
  color: var(--color-icon);
  filter: drop-shadow(2px 3px 2px #333);
`;
const Title = styled.p`
  color: #fff;
  text-shadow: 2px 3px 2px #333;
  font-size: 1.5rem;
`;
export default PageIcon;
