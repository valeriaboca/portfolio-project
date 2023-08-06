import styled from "styled-components";
import AmyW from "../assets/AmyW.jpg";
import Biggie from "../assets/Biggie.jpg";
import EttaJames from "../assets/EttaJames.jpg";
import KanyeW from "../assets/KanyeW.jpg";
import KidCudi from "../assets/KidCudi.jpg";
import LilWayne from "../assets/LilWayne.jpg";
import MacMiller from "../assets/MacMiller.jpg";
import WColon from "../assets/WColon.jpg";

const About = () => {
  return (
    <Container>
      <TextContainer>
        <H1>About Me</H1>
        <div>
          <Location>📍 Based in Montreal QC, Canada</Location>
          <P>
            My name is Valeria Bocanegra, I was born in Colombia in the year
            2000.
          </P>
          <P>
            Web development serves as the canvas through which I choose to
            express myself, a realm that continuously challenges me to elevate
            my skills, and a collaborative platform that enables me to work with
            others in crafting meaningful digital experiences.
            <Music>
              I have no real hobbies that I can share. So here are some of the
              songs I love.
            </Music>
          </P>
        </div>
      </TextContainer>
      <Div>
        <ImgContainer>
          <Img src={AmyW} alt="Amy Whinehouse" />
          <ImgOverlay>Our Day Will Come</ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={Biggie} alt="The Notorious B.I.G" />
          <ImgOverlay>Kick in the Door</ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={EttaJames} alt="Etta James" />
          <ImgOverlay>Stormy Weather</ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={KanyeW} alt="Kanye West" />
          <ImgOverlay>Life Of The Party</ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={LilWayne} alt="Lil Wayne" />
          <ImgOverlay>Demon</ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={KidCudi} alt="Kid Cudi" />
          <ImgOverlay>Worth</ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={MacMiller} alt="Mac Miller" />
          <ImgOverlay>Complicated</ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={WColon} alt="Willie Colon" />
          <ImgOverlay>Eso Se Baila Así</ImgOverlay>
        </ImgContainer>
      </Div>
    </Container>
  );
};

const Music = styled.p`
  margin-top: 10px;
  color: #f96cff;
  font-size: 25px;
`;

const TextContainer = styled.div`
  padding-left: 20px;
`;

const ImgOverlay = styled.div`
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const Location = styled.div`
  justify-content: end;
  display: flex;
`;

const ImgContainer = styled.div`
  position: relative;
  margin: 10px;
  &:hover {
    ${ImgOverlay} {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 343px;
`;

const H1 = styled.h1`
  border-bottom: 1px solid;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 50px;
`;

const Img = styled.img`
  width: 130px;
  border-radius: 3px;
  height: 130px;
  display: flex;
  transition: transform 0.2s ease-in-out;
  ${ImgContainer}:hover & {
    transform: scale(1.1);
  }
`;

const P = styled.div`
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 0;
  max-width: 343px;
  padding: 20px;
`;

export default About;
