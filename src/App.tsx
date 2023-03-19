import { useEffect } from 'react';
import styled from 'styled-components';
import './App.scss';
import Flywheel from './components/flywheel';
import Generator from './components/generator';
import Scavenge from './components/scavenge';
import useStore from './store';

export default function App() {
  const power = useStore(s => s.power);
  const scavenging = useStore(s => s.scavenging);

  useEffect(() => {
    let lastTime = Date.now();
    const intervalId = setInterval(() => {
      const delta = Date.now() - lastTime;

      power.update(delta);
      scavenging.update(delta);

      lastTime = Date.now();
    }, 50);
    return () => clearInterval(intervalId);
  }, [power, scavenging]);


  return <Container>
    <CenterContent>
      <Generator />

      <Scavenge />

      <Flywheel />
    </CenterContent>
  </Container>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const CenterContent = styled.div`
  width: 100%;
  max-width: 800px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;