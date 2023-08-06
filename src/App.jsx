import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Header from "./components/Header";
import styled, { createGlobalStyle } from "styled-components";
import DarkModeToggle from "./components/DarkMode";

const GlobalStyle = createGlobalStyle`
  body {
font-family: 'Raleway', sans-serif;;
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {/* <Div>By Valeria Bocanegra</Div> */}
      <DarkModeToggle />
    </BrowserRouter>
  );
};

// const Div = styled.div`
//   font-style: italic;
//   font-weight: 900;
//   opacity: 0.4;
//   font-size: 15px;
//   display: flex;
// `;

export default App;
