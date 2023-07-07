import React from "react";
import styled from "styled-components";
import VsHeader from "./VsHeader";
import VsAside from "./VsAside";

function VsCodeMain() {
  return (
    <VsBg>
      <VsHeader />
      <VsAside />
    </VsBg>
  );
}

const VsBg = styled.div`
  background-color: #373737;
  width: 95vw;
  height: 85vh;
  border-radius: 20px;
`;

export default VsCodeMain;
