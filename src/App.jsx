import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
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
      <DarkModeToggle />
    </BrowserRouter>
  );
};

export default App;
