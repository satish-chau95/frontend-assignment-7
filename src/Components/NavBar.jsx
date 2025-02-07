import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar expand="md" bg="dark" variant="dark" className="bg-gray-800 text-white"
    style={{}}>
      <Container className="mx-4">
      <Navbar.Brand href="#home">
          </Navbar.Brand>
        <Navbar.Brand href="#">Book Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav1">
          <Nav.Link as={NavLink} to="/"  className="text-yellow-400"> 
              Home
            </Nav.Link>
          <Nav.Link as={NavLink} to="/dashboard"  className="text-yellow-400">
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/create" className="text-yellow-400">
              Add Book
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
