import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { mixins } from "../styles/theme";
import dateFormat from "../util/dateFormat.tsx";
import weatherFormat from "../util/weatherFormat.tsx";

function TopDock() {
  const [temp, setTemp] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState("");
  const weatherF = weatherFormat();
  useEffect(() => {
    (async () => {
      setTemp((await weatherF).temp);
      setWeatherIcon((await weatherF).weatherIcon);
      console.log(temp, weatherIcon);
    })();
  }, []);
  return (
    <DockBack>
      <Icon icon="ic:baseline-apple" width="2rem" color="var(--color-font)" />
      <RightBox>
        <Temp>{temp} °C</Temp>
        <Icon icon={weatherIcon} width="1.5rem" color="var(--color-font)" />
        <Icon icon="ic:outline-wifi" width="1.5rem" color="var(--color-font)" />
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
const Temp = styled.p`
  color: var(--color-font);
  line-height: 2rem;
`;
const RightBox = styled.div`
  ${mixins.centerFlex};
  gap: 1rem;
`;
const Date = styled.p`
  color: var(--color-font);
`;
export default TopDock;
