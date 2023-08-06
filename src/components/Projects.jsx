import styled, { keyframes } from "styled-components";
import JavaScriptIcon from "../assets/javascript.png";
import CssIcon from "../assets/css.png";
import HtmlIcon from "../assets/html.png";
import ReactIcon from "../assets/react.png";
import NyanCat from "../assets/nyan-cat.jpg";
import Placeholder from "../assets/placeholder.png";

const Projects = () => {
  return (
    <Container>
      <SkillsDiv>These are my current skils:</SkillsDiv>
      <IconDiv>
        <Icon>
          <Img src={JavaScriptIcon} alt="JavaScriptIcon" />
          <Skills>JavaScript</Skills>
        </Icon>
        <Icon>
          <Img src={ReactIcon} alt="ReactIcon" />
          <Skills>React</Skills>
        </Icon>
        <Icon>
          <Img src={CssIcon} alt="CssIcon" />
          <Skills>Css</Skills>
        </Icon>
        <Icon>
          <Img src={HtmlIcon} alt="HtmlIcon" />
          <Skills>Html</Skills>
        </Icon>
      </IconDiv>
      <Images>
        <ImgContainer>
          <a
            href="https://project-js-nyan-ogq839ped-valeriaboca.vercel.app/"
            target="_blank"
          >
            <GameImg src={NyanCat} alt="Nyan-Cat Game" />
            <GameText>Click to Play!</GameText>
          </a>
        </ImgContainer>
        <ImgContainer>
          <PlaceholderImg src={Placeholder} alt="Place Holder Image" />
          <Text>More to come!</Text>
        </ImgContainer>
        <ImgContainer>
          <PlaceholderImg src={Placeholder} alt="Place Holder Image" />
          <Text>More to come!</Text>
        </ImgContainer>
        <ImgContainer>
          <PlaceholderImg src={Placeholder} alt="Place Holder Image" />
          <Text>More to come!</Text>
        </ImgContainer>
        <ImgContainer>
          <PlaceholderImg src={Placeholder} alt="Place Holder Image" />
          <Text>More to come!</Text>
        </ImgContainer>
        <ImgContainer>
          <PlaceholderImg src={Placeholder} alt="Place Holder Image" />
          <Text>More to come!</Text>
        </ImgContainer>
      </Images>
    </Container>
  );
};

const GameText = styled.p`
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
  position: absolute;
  top: 58px;
  left: 63px;
  width: 50%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;
const ImgContainer = styled.div`
  position: relative;
  &:hover ${Text} {
    opacity: 1;
  }
  a {
    text-decoration: none;
  }
`;

const PlaceholderImg = styled.img`
  max-width: 250px;
  height: 250px;
`;

const Container = styled.div`
  margin-top: 100px;
`;

const SkillsDiv = styled.div`
  margin: 10px;
  font-weight: bolder;
  color: rgba(158, 33, 200, 0.692);
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 800px;
  margin: auto;
  padding-top: 45px;
`;

const slideAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const Skills = styled.p`
  text-align: center;
  font-style: italic;
  opacity: 0.5;
  white-space: nowrap;
  overflow: hidden;
  animation: ${slideAnimation} 1s linear 1;
`;

const Icon = styled.a`
  transition: transform 1000ms;
  &:hover {
    transform: translate(2px);
  }
`;

const GameImg = styled.img`
  width: 180px;
  height: 180px;

  margin-top: 35px;
  padding-left: 30px;
  padding-right: 30px;
  transition: 0.3s ease-in-out;
  &:hover {
    transition: transform 300ms;
    transform: scale(1.3);
  }
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

export default Projects;
