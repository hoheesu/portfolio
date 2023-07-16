import React from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { mixins } from "../styles/theme";
import { Link } from "react-router-dom";

interface Props {
  iconTitle: string;
  iconSrc: string;
  iconUrl: string;
}

function PageIcon({ iconTitle, iconSrc, iconUrl }: Props) {
  return (
    <Folder to={iconUrl}>
      <FolderIcon icon={iconSrc} width="5rem" />
      <Title>{iconTitle}</Title>
    </Folder>
  );
}

const Folder = styled(Link)`
  text-decoration: none;
  ${mixins.centerFlex};
  flex-direction: column;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0px 1px 0px #d9d9d9);
  }
`;
const FolderIcon = styled(Icon)`
  color: var(--color-icon);
  filter: drop-shadow(2px 3px 2px #333);
`;
const Title = styled.p`
  margin-top: 15px;
  color: #fff;
  text-shadow: 2px 3px 2px #333;
  font-size: 1.5rem;
`;
export default PageIcon;
