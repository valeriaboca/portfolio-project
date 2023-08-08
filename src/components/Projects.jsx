import styled from "styled-components";
import JavaScriptIcon from "../assets/javascript.png";
import CssIcon from "../assets/css.png";
import HtmlIcon from "../assets/html.png";
import ReactIcon from "../assets/react.png";
import NyanCat from "../assets/nyan-cat.jpg";
import Placeholder from "../assets/placeholder.png";

const Projects = () => {
  return (
    <Container>
      <IconDiv>
        <Icon>
          <Img src={JavaScriptIcon} alt="JavaScriptIcon" />
        </Icon>
        <Icon>
          <Img src={ReactIcon} alt="ReactIcon" />
        </Icon>
        <Icon>
          <Img src={CssIcon} alt="CssIcon" />
        </Icon>
        <Icon>
          <Img src={HtmlIcon} alt="HtmlIcon" />
        </Icon>
      </IconDiv>
      <SkillsDiv>
        As a full-stack developer, I possess the ability to not only translate
        design concepts into visually appealing web pages but also to develop
        intricate functionality and interactive features that enhance user
        experiences. <br /> I am adept at crafting responsive user interfaces
        that seamlessly adapt across different devices as well as
        well-structured web pages.
        <Span>Here are some of my projects!</Span>
      </SkillsDiv>

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

const Span = styled.span`
  padding-top: 20px;
  font-weight: 900;
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: #c780fa;
  font-size: 20px;
`;

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
  margin-left: 25px;
  font-weight: 900;
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 800px;
  margin: auto;
  padding-top: 45px;
`;

const Icon = styled.a`
  transition: transform 1000ms;
  margin: 10px;
  margin-left: 20px;
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
`;

const Img = styled.img`
  width: 40px;
`;

export default Projects;
