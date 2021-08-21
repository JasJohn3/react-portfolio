import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import navigationLinks from '../../helpers/navigationLinks';

function createLinks() {
  return navigationLinks.map((element, index) => {
    return (
      <Nav.Link key={index} href={element.ref}>
        {element.name}
      </Nav.Link>
    );
  });
}
function Navigation() {
  return (
    <div>
      <Navbar
        sticky='top'
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Jason Lane Johnson</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>{createLinks()}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
