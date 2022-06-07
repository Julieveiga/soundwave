import React from 'react';
import logo from '../img/logo.png';
import {Navbar, Container, Nav} from 'react-bootstrap';


function Header() {
  return (
      <Navbar id="navbar" bg="dark" expand="lg" fixed="top">
          <Container>
            <img src={logo} alt="SoundWave logo"/>
            <Navbar.Brand href="#"></Navbar.Brand>
            <span>Soundwave</span>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav id="btn-nav">
                <Nav.Link href="#discover">Discover</Nav.Link>
                <Nav.Link href="#join-the-fun">Join</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}
export default Header
