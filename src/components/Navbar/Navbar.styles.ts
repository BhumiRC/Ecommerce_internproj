// Navbar.styles.ts
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #333;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinks = styled.div`
  a {
    color: #fff;
    margin-left: 1.5rem;
    font-weight: bold;

    &:hover {
      color: #f0c040;
    }
  }
`;

export const Logo = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`;
