import { useEffect } from "react";
import styled from "styled-components";
import { formatNumber } from "../shared/utils";
import useStore from "../store";
import ProgressBar from "./shared/progress-bar";

export default function Generator() {
  const power = useStore(s => s.power);

  return <Container>
    <Title>Capacitors</Title>
    <PowerBar>
      <ProgressBar height={10} current={power.power} max={power.maxPower}></ProgressBar>
    </PowerBar>
    <PowerAmount>
      {formatNumber(power.power, 0, 0)}w / {formatNumber(power.maxPower, 0, 0)}w
    </PowerAmount>
  </Container>;
}

const Container = styled.div`
  width: 100%;
  color: white;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 4px 2px;
`;

const PowerBar = styled.div`
  width: 100%;
`;

const PowerAmount = styled.p`
  font-size: 12px;
`;