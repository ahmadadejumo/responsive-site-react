import "./App.css";
import styled, { css } from "styled-components";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Feature from "./Components/Feature";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shapes = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shapes}
  clip-path: polygon(72% 0, 100% 0%, 100% 100%, 50% 100%, 72% 54%);
  background-color: crimson;
`;
const FeatureShape = styled.div`
  ${Shapes}
  clip-path: polygon(0 0, 50% 0, 28% 47%, 28% 100%, 0 100%);
  background-color: pink;
`;

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
    </>
  );
}

export default App;
