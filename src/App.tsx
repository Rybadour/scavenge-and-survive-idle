import styled from 'styled-components';
import './App.scss';
import Flywheel from './components/Flywheel';
import Generator from './components/Generator';

export default function App() {
  return <Container>
    <CenterContent>
      <Generator />

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