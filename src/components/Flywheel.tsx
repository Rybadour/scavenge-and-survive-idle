import { useCallback } from "react";
import styled from "styled-components";
import { formatNumber } from "../shared/utils";

import useStore from "../store";
import ProgressBar from "./shared/progress-bar";

export default function Flywheel() {
  const power = useStore(s => s.power);

  const start = useCallback(() => {
    power.startFlywheel();
  }, [power.startFlywheel])
  const stop = useCallback(() => {
    power.stopFlywheel();
  }, [power.stopFlywheel])

  return <Container>
    <Title>Generator</Title>
    <ChargeBar onMouseDown={() => start()} onMouseUp={() => stop()}>
      <ProgressBar height={60} current={power.flywheelCharge} max={power.maxFlywheelCharge} />
    </ChargeBar>
    <ChargeAmount>
      {formatNumber(power.flywheelCharge, 0, 0)}J / {power.maxFlywheelCharge}J
    </ChargeAmount>
  </Container>;
}

const Container = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 4px 2px;
  text-align: center;
`;

const ChargeBar = styled.div`
  width: 100%;
  max-width: 400px;
  border: 1px solid white;
`;

const ChargeAmount = styled.p`
  font-size: 12px;
`;