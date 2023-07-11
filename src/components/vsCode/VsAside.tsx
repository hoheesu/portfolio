import React, { useEffect, useState } from "react";
import styled from "styled-components";

function VsAside() {
  const [buttonNum, setButtonNum] = useState<string>("");
  useEffect(() => {
    switch (buttonNum) {
      case "about":
        console.log("about me");
        break;
      case "skill":
        console.log("skills");
        break;
      case "project":
        console.log("projects");
        break;
      case "contact":
        console.log("contact");
        break;
    }
  }, [buttonNum]);
  const checkBtn = () => {};
  return (
    <AsideBox>
      <ul>
        <Li>
          <Button href="#about" onClick={() => setButtonNum("about")}>
            About Me
          </Button>
        </Li>
        <Li>
          <Button href="#skill" onClick={() => setButtonNum("skill")}>
            Skills
          </Button>
        </Li>
        <Li>
          <Button href="#project" onClick={() => setButtonNum("project")}>
            Projects
          </Button>
        </Li>
        <Li>
          <Button href="#contact" onClick={() => setButtonNum("contact")}>
            Contact
          </Button>
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
const Button = styled.a`
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 1.5rem;
  color: var(--color-font);
  cursor: pointer;
`;
export default VsAside;
