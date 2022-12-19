import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
  function refreshPage() {
    window.location.reload(false);
  }

  let navigate = useNavigate();
  function changeLocation(placeToGo) {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  }

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand>WORDLE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/" onClick={() => changeLocation('/')}>
            <Nav.Link as={Link} to="/" exact>
              Home
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/rules" onClick={() => changeLocation('/rules')}>
            <Nav.Link as={Link} to="/" exact>
              Rules
            </Nav.Link>
          </LinkContainer>
          <LinkContainer
            to="/easylevel"
            onClick={() => changeLocation('/easylevel')}
          >
            <Nav.Link as={Link} to="/" exact>
              Easy Level
            </Nav.Link>
          </LinkContainer>
          <LinkContainer
            to="/difficultlevel"
            onClick={() => changeLocation('/difficultlevel')}
          >
            <Nav.Link as={Link} to="/" exact>
              Difficult Level
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to="/resetgame" onClick={() => refreshPage()}>
            <Nav.Link>Reset Game</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Navbar.Brand href="#home">WORDLE</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="me-auto">
    //       <Nav.Link href="#features">Home</Nav.Link>
    //       <Nav.Link href="#about">About</Nav.Link>
    //       <Nav.Link href="#deets">Easy Level</Nav.Link>
    //       <Nav.Link eventKey={2} href="#memes">
    //         Difficult Level
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}
export default NavigationBar;
