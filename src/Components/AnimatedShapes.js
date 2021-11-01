import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: blue;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  animation: square 30s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;
const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
  position: absolute;
  border-radius: 50%;
  top: 200px;
  left: -100px;
  z-index: -1;
  animation: circle 30s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;
const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;
  animation: triangle 30s linear alternate infinite;

  @keyframes triangle {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Circle />
      <Triangle />
    </>
  );
};

export default AnimatedShapes;
