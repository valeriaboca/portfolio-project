import styled from "styled-components";
import { Artists } from "./Artists";
import { useState } from "react";
import LeftArrow from "../assets/arrowleft.png";
import RightArrow from "../assets/arrowright.png";

const About = () => {
  const artistKeys = Object.keys(Artists);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevArtist = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? artistKeys.length - 1 : prevIndex - 1
    );
  };

  const nextArtist = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === artistKeys.length - 1 ? 0 : prevIndex + 1
    );
  };
  const currentArtistKey = artistKeys[currentIndex];
  const currentArtist = Artists[currentArtistKey];

  return (
    <Container>
      <TextContainer>
        <H1>About Me</H1>
        <div>
          <P>
            My name is Valeria, I currently reside in Montreal QC, Canada.
            <br />
            <br />I started my journey with web development and I plan on keep
            improving my skills. My goal is to evolve into a versatile and
            well-rounded developer. I intend to delve into different programming
            languages and disciplines to cultivate a more comprehensive
            perspective on software development.
            <Music>
              Here are some artists and songs I love because i don't have
              anything to else to share :D
            </Music>
          </P>
        </div>
      </TextContainer>
      <Div>
        <Img src={currentArtist.img} alt={currentArtist.name} />
        <H2>{currentArtist.name}</H2>
        <Song>{currentArtist.song}</Song>
        <ButtonDiv>
          <Button onClick={prevArtist}>
            <ArrowIcon src={LeftArrow} alt="Left Arrow Icon" />
          </Button>
          <Button onClick={nextArtist}>
            <ArrowIcon src={RightArrow} alt="Right Arrow Icon" />
          </Button>
        </ButtonDiv>
      </Div>
    </Container>
  );
};

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transition: transform;
    scale: calc(1.3);
  }
`;

const ArrowIcon = styled.img`
  width: 35px;
`;

const ButtonDiv = styled.div`
  margin: 7px;
`;

const H2 = styled.h2`
  margin-bottom: 10px;
`;

const Song = styled.p`
  font-weight: bold;
  margin: 0;
  text-align: center;
  opacity: 0.5;
`;

const Img = styled.img`
  height: 200px;
  border-radius: 20px;
  display: flex;
  align-self: center;
`;

const Div = styled.div`
  max-width: 300px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;

const Music = styled.p`
  margin-top: 10px;
  color: #3c6255;
  font-size: 20px;
  margin-bottom: 0;
`;

const TextContainer = styled.div`
  margin-top: 20px;
  padding-left: 20px;
  background-color: #658864;
  border-radius: 15px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const H1 = styled.h1`
  border-bottom: 1px solid;
  margin-bottom: 40px;
  font-size: 50px;
`;

const P = styled.div`
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 0;
  max-width: 343px;
  padding: 20px;
`;

export default About;
