import styled from "styled-components";

export default function Generator() {
  return <Container>
    <Title>Generator</Title>
  </Container>;
}

const Container = styled.div`
  width: 100%;
  border: 1px solid white;
  color: white;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 4px 2px;
`;