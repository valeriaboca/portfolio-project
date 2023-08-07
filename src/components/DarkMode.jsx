import { useState } from "react";
import styled, {
  createGlobalStyle,
  StyleSheetManager,
} from "styled-components";
import DarkModeIcon from "../assets/darkMode.png";
import LightModeIcon from "../assets/lightMode.png";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "darkMode"}>
      <>
        <GlobalStyles darkMode={isDarkMode} />
        <ToggleButton
          onClick={toggleDarkMode}
          darkmode={isDarkMode ? "true" : undefined}
        >
          <IconImg
            src={isDarkMode ? DarkModeIcon : LightModeIcon}
            alt="Mode Icon"
          />
        </ToggleButton>
      </>
    </StyleSheetManager>
  );
};

const ToggleButton = styled.button`
  border: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;

  cursor: pointer;
  color: ${(props) => (props.darkmode ? "#d2d3db" : "#242424")};
  background-color: transparent;
`;

const IconImg = styled.img`
  width: 40px;
`;

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) =>
          props.darkMode ? "#242424" : "#fafafa"};
    color: ${(props) => (props.darkMode ? "#d2d3db" : "#242424")};
    }
`;

export default DarkModeToggle;
