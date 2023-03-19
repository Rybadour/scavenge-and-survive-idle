import styled from "styled-components";
import { formatNumber } from "../shared/utils";

import useStore from "../store";
import ProgressBar from "./shared/progress-bar";

export default function Scavenge() {
  const scavenging = useStore(s => s.scavenging);

  return <Container>
    <Title>Scavenging</Title>
    <p>Has {scavenging.items.scrap} scrap metal!</p>
    {scavenging.isScavenging ?
      <ScavengeProgress>
        <p>scavenging...</p>
        <ProgressBar
          height={20}
          current={scavenging.currentProgress} max={scavenging.maxProgress}></ProgressBar>
        <ProgressAmount>
          {formatNumber(scavenging.currentProgress/1000, 1, 1)}s / {formatNumber(scavenging.maxProgress/1000, 1, 1)}s
        </ProgressAmount>
      </ScavengeProgress> :

      <button type="button" onClick={() => scavenging.startScavenging()}>Scavenge Nearby</button>
    }
  </Container>
}

const Container = styled.div`
  color: white;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  font-size: 20px;
`;

const ScavengeProgress = styled.div`
  
`;

const ProgressAmount = styled.p`
  font-size: 12px;
`