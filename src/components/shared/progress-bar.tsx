import styled from "styled-components";

interface ProgressBarProps {
  current: number;
  max: number;
  height: number;
}

export default function ProgressBar(props: ProgressBarProps) {
  return <Container style={{height: props.height}}>
    <Bar style={{width: (props.current / props.max * 100) + "%"}} />
  </Container>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Bar = styled.div`
  height: 100%;
  background-color: white;
`;