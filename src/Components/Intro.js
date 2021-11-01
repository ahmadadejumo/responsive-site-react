import React from "react";
import styled from "styled-components";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: red;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: grey;
  margin-top: 5px;
`;
const Right = styled.div`
  width: 40%;
`;

// const Image = styled.img`
//   width: 100%;
// `;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is only way to have a real impact on their business
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us (+234) 808 206 5510</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        {/* <Image
          src="https://media.istockphoto.com/photos/gorgeous-excited-woman-pointing-to-blank-screen-on-mobile-phone-over-picture-id1180965421?k=20&m=1180965421&s=612x612&w=0&h=aqONCmbLc7GWWKl-ebEGRAxK51uV1a4dXa5EQiGAZFM="
          alt=""
        /> */}
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
