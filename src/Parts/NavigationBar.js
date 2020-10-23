import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
// import "./nav.css"

const Styles = styled.div`
  .navbar { background-color:blue; 
  margin-left:180px}
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
`;

 const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand href="/">Prudential</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link>|</Nav.Link>
      <Nav.Link href="/">Participants</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </Styles>
)

export default NavigationBar