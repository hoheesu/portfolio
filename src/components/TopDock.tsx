import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { mixins } from "../styles/theme";
import dateFormat from "../util/dateFormat.tsx";
import { getWeather } from "../api/api.tsx";

function TopDock() {
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <DockBack>
      <Icon icon="ic:baseline-apple" width="2rem" color="var(--color-font)" />
      <RightBox>
        <Icon
          icon="material-symbols:wifi"
          width="1.5rem"
          height="2rem"
          color="var(--color-font)"
        />
        <Date>{dateFormat()}</Date>
      </RightBox>
    </DockBack>
  );
}

const DockBack = styled.div`
  ${mixins.centerFlex};
  justify-content: space-between;
  padding: 0 2rem;
  box-sizing: border-box;
  width: 100vw;
  height: 3rem;
  background-color: #00000016;
`;
const RightBox = styled.div`
  ${mixins.centerFlex};
  gap: 1rem;
`;
const Date = styled.p`
  color: var(--color-font);
`;
export default TopDock;
