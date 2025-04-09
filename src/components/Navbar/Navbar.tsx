// Navbar.tsx
import { Navbar, NavLinks, Logo } from "./Navbar.styles";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar>
      <Logo to="/">MyApp</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        {/* <Link to="/products">Products</Link> */}
        <Link to="/cart">Cart</Link>
      </NavLinks>
    </Navbar>
  );
};

export default NavBar;
