import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/useTheme';

function NavigationBar() {
  const { toggle, handleToggle } = useTheme();

  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          My App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Button variant="primary" onClick={handleToggle}>
            {toggle ? '🌚' : '🌞'}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
