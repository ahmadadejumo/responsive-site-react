import React from "react";
import styled from "styled-components";

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
`;
const Title = styled.span``;
const SubTitle = styled.span``;
const Desc = styled.p``;
const Button = styled.button``;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src="https://www.vhv.rs/dpng/d/432-4325609_x-pictures-transparent-png-iphone-png-without-background.png" />
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
        <Desc>We care for your business and we guarantee</Desc>
        <Button>Learn more</Button>
      </Right>
    </Container>
  );
};

export default Feature;
