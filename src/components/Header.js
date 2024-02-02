import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
    return <Navbar bg='dark' expand='lg' variant='dark'>
    <Container>
      <Navbar.Brand>Ecommerse Store</Navbar.Brand>
      <Nav>
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Products</Nav.Link>
        <Nav.Link>About</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
};

export default Header;