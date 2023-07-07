import React from "react";
import styled from "styled-components";

function VsAside() {
  return (
    <AsideBox>
      <ul>
        <Li>
          <Button>About Me</Button>
        </Li>
        <Li>
          <Button>Skills</Button>
        </Li>
        <Li>
          <Button>Projects</Button>
        </Li>
        <Li>
          <Button>Contact</Button>
        </Li>
      </ul>
    </AsideBox>
  );
}

const AsideBox = styled.aside`
  width: 13rem;
  height: 100%;
  border-right: 2px solid #272727;
  box-sizing: border-box;
`;
const Li = styled.li`
  padding: 3rem 0 0 2rem;
  box-sizing: border-box;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 1.5rem;
  color: var(--color-font);
`;
export default VsAside;
