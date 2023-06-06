import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../routes';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const localion = useLocation();

  return (
    <Navbar key={false} bg="light" expand={false} className="sticky-top mb-3">
      <Container fluid>
        {!(localion.pathname === '/') &&
          <Navbar.Toggle className='me-2' as={Link} to={ROUTES.HOME}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
              className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 
                0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 
                8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg>
          </Navbar.Toggle>}
        <Navbar.Toggle onClick={handleShow} />
        <Navbar.Brand className='ms-auto' as={Link} to={ROUTES.HOME}>Blog</Navbar.Brand>
        <Navbar.Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              Blog Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link onClick={handleClose} as={Link} to={ROUTES.HOME}>Home</Nav.Link>
              <Nav.Link onClick={handleClose} as={Link} to={ROUTES.ABOUT}>About</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}