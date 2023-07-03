import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { mixins } from "../styles/theme";

function BotDock() {
  return (
    <DockBox>
      <DockList>
        <Icon icon="skill-icons:html" width="3rem" />
        <p>HTML</p>
      </DockList>
      <DockList>
        <Icon icon="skill-icons:css" width="3rem" />
        <p>CSS</p>
      </DockList>
      <DockList>
        <Icon icon="skill-icons:javascript" width="3rem" />
        <p>JavaScript</p>
      </DockList>
      <DockList>
        <Icon icon="skill-icons:react-dark" width="3rem" />
        <p>React</p>
      </DockList>
      <DockList>
        <Icon icon="skill-icons:typescript" width="3rem" />
        <p>TypeScript</p>
      </DockList>
      <DockList>
        <Icon icon="skill-icons:git" width="3rem" />
        <p>Git</p>
      </DockList>
      <DockList>
        <Icon icon="skill-icons:figma-dark" width="3rem" />
        <p>Figma</p>
      </DockList>
      <DockList>
        <Icon icon="devicon:slack" width="3rem" />
        <p>Slack</p>
      </DockList>
    </DockBox>
  );
}
const DockBox = styled.ul`
  ${mixins.centerFlex};
  gap: 2.5rem;
  width: 60rem;
  height: 5rem;
  background-color: #fdfdfd30;
  margin-bottom: 2rem;
  border-radius: 2rem;
`;
const DockList = styled.li`
  position: relative;
  p {
    position: absolute;
    opacity: 0;
    width: max-content;
    background-color: #333;
    color: var(--color-font);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  cursor: help;
  &:hover {
    zoom: 1.1;
    transition: all 3s;
    p {
      opacity: 1;
      transition: all 0.3s;
    }
  }
`;

export default BotDock;
