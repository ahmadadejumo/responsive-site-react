import React from "react";
import styled from "styled-components";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  width: 80%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.span`
  font-size: 70px;
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 150px;
  padding: 15px 20px;
  background-color: darkblue;
  border: none;
  font-size: 20px;
  color: white;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        {/* <Image src="https://www.vhv.rs/dpng/d/432-4325609_x-pictures-transparent-png-iphone-png-without-background.png" /> */}
      </Left>
      <Right>
        <Title>
          <b>good</b> busines
          <br />
          <b>good</b> busines
        </Title>
        <SubTitle>We know that good business means good business</SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experinces and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care for your business and we guarantee you to achieve marketing
          goals.
        </Desc>
        <Button>Learn more</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
