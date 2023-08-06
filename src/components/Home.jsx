import { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../assets/loading.png";

const InteractiveGreeting = () => {
  const greetings = ["Hola!", "Hello!", "Bonjour!"];
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
    <>
      <Greeting>{greetings[currentGreetingIndex]} </Greeting>
      <H2>Full-Stack Web Developer</H2>
    </>
  );
};

const Home = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const generateRandomCircles = () => {
      const newCircles = [];
      for (let i = 0; i < 10; i++) {
        const randomTop = Math.floor(Math.random() * window.innerHeight);
        const randomLeft = Math.floor(Math.random() * window.innerWidth);
        newCircles.push({ top: randomTop, left: randomLeft });
      }
      setCircles(newCircles);
    };

    generateRandomCircles();
  }, []);

  return (
    <div>
      {circles.map((circle, index) => (
        <Circle
          key={index}
          style={{ top: circle.top + "px", left: circle.left + "px" }}
        />
      ))}
      <InteractiveGreeting />
      <StyledHome>
        <Text>
          Driven by the desire to create things I am passionate about; whether
          through visually captivating designs or interactive functionalities.
          Inspired to create experiences that transcend traditional forms of
          self-expression. <br />
          <Span>...in progress</Span>
        </Text>
        <Img src={Loading} alt="Loading Icon" />
      </StyledHome>
    </div>
  );
};

const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #3498db;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
`;

const Img = styled.img`
  z-index: -1;
  position: absolute;
  width: 100px;
  height: 100px;
  padding-top: 110px;
  padding-left: 290px;
`;

const H2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  color: #a653f5;
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: #8f8cf2;
`;

const Span = styled.span`
  color: #65b8bf;
`;

const Greeting = styled.div`
  display: flex;
  justify-content: center;
  font-size: 80px;
  padding: 20px;
  font-weight: 900;
`;

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 60px;
`;

const Text = styled.p`
  font-size: 20px;
  max-width: 360px;
`;

export default Home;
