import React from "react";
import styled from "styled-components";

function MainContent() {
  return (
    <Div>
      <Section1 id="about">
        <p>section1</p>
      </Section1>
      <Section2 id="skill">
        <p>section2</p>
      </Section2>
      <Section3 id="project">
        <p>section3</p>
      </Section3>
      <Section4 id="contact">
        <p>section4</p>
      </Section4>
    </Div>
  );
}
const Div = styled.div`
  overflow: scroll;
  width: 100%;
  height: calc(85vh - 3.5rem);
`;
const Section1 = styled.section`
  height: 1500px;
  /* background-color: aliceblue; */
`;
const Section2 = styled.section`
  height: 1500px;
  background-color: lightblue;
`;

const Section3 = styled.section`
  background-color: skyblue;
  height: 1500px;
`;
const Section4 = styled.section`
  background-color: aquamarine;
  height: 1500px;
  border-bottom: 10px solid #fff;
`;

export default MainContent;
