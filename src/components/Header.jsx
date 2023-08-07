import { Link } from "react-router-dom";
import styled from "styled-components";
import LinkedInIcon from "../assets/linkedin.png";
import GithubIcon from "../assets/github.png";
import EmailIcon from "../assets/email.png";

const Header = () => {
  return (
    <Container>
      <Ul>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/about">About</Link>
        </Li>
        <Li>
          <Link to="/projects">Projects</Link>
        </Li>
      </Ul>
      <Div>
        <Anchor href="mailto:vboca660@gmail.com" target="_blank">
          <Img src={EmailIcon} alt="Email Icon" />
        </Anchor>
        <Anchor
          href="https://www.linkedin.com/in/valeria-bocanegra-406855286?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkPp38iZ2TI6bw1AHBhtp2Q%3D%3D"
          target="_blank"
        >
          <Img src={LinkedInIcon} alt="LinkedIn Icon" />
        </Anchor>
        <Anchor href="https://github.com/valeriaboca" target="_blank">
          <Img src={GithubIcon} alt="GitHub Icon" />
        </Anchor>
      </Div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Anchor = styled.a`
  transition: transform 1000ms;
  &:hover {
    transform: translate(2px);
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Img = styled.img`
  width: 38px;
  height: 38px;
`;

const Greeting = styled.span`
  display: flex;
  justify-content: center;
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
  font-size: 40px;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin-top: 0;
`;

const Li = styled.li`
  border-radius: 5px;
  transition: transform 1s;
  a {
    text-decoration: none;
    color: #ffc95f;
    font-weight: 900;
  }
  &:hover {
    transition: transform 0.7s;
    transform: scale(1.3);
    box-shadow: rgba(240, 46, 170, 0.4) 0px 5px,
      rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px,
      rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
  }
`;

export default Header;
