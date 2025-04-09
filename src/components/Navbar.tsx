import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  position: fixed; /* Sticks to top */
  top: 0;
  left: 0;
  width: 100%;     /* Full horizontal width */
  z-index: 1000;
  background-color: #333;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

  const NavLinks = styled.div`
  a {
    color: #fff;
    margin-left: 1.5rem;
    font-weight: bold;

    &:hover {
      color: #f0c040;
    }
  }
`;

const Logo = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavBar = () => {
  return (
    <Navbar>
      <Logo to="/">MyApp</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </NavLinks>
    </Navbar>
  );
}
export default NavBar;
