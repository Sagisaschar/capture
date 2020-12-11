import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About us</Link>
        </li>

        <li>
          <Link to="/work">2. Our Work</Link>
        </li>

        <li>
          <Link to="contact-us">3. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  display: flex;
  margin: auto;
  min-height: 10vh;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
  background: #2b2b2b;
  h1 {
    color: white;
    a {
      padding: 0;
    }
  }
  ul {
    list-style: none;
    display: flex;
  }
  a {
    text-decoration: none;
    color: white;
  }
  li {
    padding-left: 2rem;
    position: relative;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "lobster", cursive;
    font-weight: lighter;
  }
`;
