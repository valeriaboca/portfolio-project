import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import BackgroundImage from "../assets/background.jpg";
import About from "./About";
import Projects from "./Projects";

const InteractiveGreeting = () => {
  const greetings = ["Adaptive Web", "Full-Stack", "Sleep Deprived"];
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex(
        (prevIndex) => (prevIndex + 1) % greetings.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Greeting>
      {greetings[currentGreetingIndex]}
      <Hello> Developer</Hello>
    </Greeting>
  );
};

const Home = () => {
  return (
    <>
      <div>
        <BackgroundImg src={BackgroundImage} alt="Background Image" />
        <div>
          <InteractiveGreeting />
        </div>
        <StyledHome>
          <Text>
            <Mark>
              Inspired to shape experiences that transcend traditional forms of
              self-expression; whether through the creation of visually
              captivating designs or the implementation of interactive
              functionalities.
              <br />
              <br />
              Driven by the desire to innovative.
            </Mark>
          </Text>
        </StyledHome>
      </div>
      <Container>
        <About />
        <Projects />
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 207px;
`;

const highlightAnimation = keyframes`
  to {
    background-position: 0 0;
  }
`;

const Mark = styled.mark`
  -webkit-animation: 1.5s ${highlightAnimation} 1.5s 1 normal forwards;
  animation: 1.5s ${highlightAnimation} 1.5s 1 normal forwards;
  background-color: none;
  background: linear-gradient(90deg, #e3dac9 50%, rgba(255, 255, 255, 0) 50%);
  background-size: 200% 100%;
  background-position: 100% 0;
`;

const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Hello = styled.div`
  font-family: "Gentium Plus", serif;
  font-size: 78px;
  font-weight: 900;
  opacity: 0.95;
  color: #7a9d54;
`;

const Greeting = styled.div`
  font-family: "Gentium Plus", serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  font-weight: 900;
  font-size: 30px;
`;

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 60px;
`;

const fadeInHighlight = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -100% 0;
  }
`;

const shadowAnimation = keyframes`
  from {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    transform: translateY(0) scale(1);
  }
  to {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
    transform: translateY(-10px) scale(1.02);
  }
`;

const Text = styled.span`
  margin: 20px;
  padding: 30px;
  font-size: 20px;
  max-width: 360px;
  position: relative;
  display: inline;
  transition: 2s ease;
  background-size: 200%;
  background-position: 0 0;
  line-height: 1.4;

  animation: ${shadowAnimation} 1s ease-in-out,
    ${fadeInHighlight} 0.5s ease-in-out 1s forwards;

  &:not(:hover) {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
    transform: translateY(-10px) scale(1.02);
    background-position: -100% 0;
  }
`;

export default Home;
