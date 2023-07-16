import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mixins } from "../../styles/theme";

function VsHeader() {
  return (
    <>
      <Header>
        <BtnBox>
          <Button to="/" style={{ backgroundColor: "#F84040" }} />
          <Button to="/" style={{ backgroundColor: "#F8C440" }} />
          <Button to="/" style={{ backgroundColor: "#4FF840" }} />
        </BtnBox>
        <H2>윤준수의 포트폴리오</H2>
      </Header>
    </>
  );
}
const Header = styled.div`
  position: relative;
  padding: 1rem;
  border-bottom: 2px solid #272727;
  box-sizing: border-box;
  span {
    display: block;
    text-indent: -9999px;
  }
`;
const H2 = styled.h2`
  position: absolute;
  color: var(--color-font);
  top: 0;
  left: 50%;
  line-height: 3.5rem;
  transform: translateX(-50%);
`;
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

export default VsHeader;
