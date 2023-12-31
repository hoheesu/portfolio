import React from "react";
import styled from "styled-components";
import VsHeader from "./VsHeader";
import VsNav from "./VsNav";
import MainContent from "../MainContent";

function VsCodeMain() {
  return (
    <VsBg>
      <VsHeader />
      <FlexBox>
        <VsNav />
        <MainContent />
      </FlexBox>
    </VsBg>
  );
}

const VsBg = styled.div`
  background-color: #373737;
  width: 95vw;
  height: 85vh;
  border-radius: 20px;
  overflow: hidden;
`;
const FlexBox = styled.div`
  display: flex;
`;

export default VsCodeMain;
