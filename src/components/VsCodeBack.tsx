import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function VsCodeBack() {
  return (
    <VsBg>
      <VsHeader>
        <BtnBox>
          <Button to="/" style={{ backgroundColor: "#F84040" }} />
          <Button to="/" style={{ backgroundColor: "#F8C440" }} />
          <Button to="/" style={{ backgroundColor: "#4FF840" }} />
        </BtnBox>
      </VsHeader>
    </VsBg>
  );
}

const VsBg = styled.div`
  background-color: #373737;
  width: 95vw;
  height: 85vh;
  border-radius: 20px;
`;
const VsHeader = styled.div``;
const BtnBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const Button = styled(Link)`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;

export default VsCodeBack;
