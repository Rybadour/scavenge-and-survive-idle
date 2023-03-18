import { pick } from "lodash";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import useStore from "../store";

export default function Flywheel() {
  const power = useStore(s => s.power);
  const [isHeld, setIsHeld] = useState(false);

  useEffect(() => {
    let lastTime = Date.now();
    const intervalId = setInterval(() => {
      const delta = Date.now() - lastTime;
      if (isHeld) {
        power.chargeFlywheel(delta);
      } else {
        power.decayFlywheel(delta);
      }
      lastTime = Date.now();
    }, 50);
    return () => clearInterval(intervalId);
  }, [power.chargeFlywheel, isHeld]);

  return <Container>
    <Title>Flywheel</Title>
    <Bar onMouseDown={() => setIsHeld(true)} onMouseUp={() => setIsHeld(false)}>
      <ChargeMeter width={power.flywheelCharge / power.maxFlywheelCharge * 100} />
    </Bar>
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

const Bar = styled.div`
  width: 100%;
  max-width: 400px;
  height: 60px;
  border: 1px solid white;
`;

const ChargeMeter = styled.div<{width: number}>`
  background-color: white;
  height: 100%;
  width: ${props => props.width}%;
`;