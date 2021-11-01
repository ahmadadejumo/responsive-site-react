import "./App.css";
import styled from "styled-components";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const IntoShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: polygon(72% 0, 100% 0%, 100% 100%, 72% 100%, 55% 52%);
  background-color: crimson;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Intro />
      <IntoShape />
    </Container>
  );
}

export default App;
