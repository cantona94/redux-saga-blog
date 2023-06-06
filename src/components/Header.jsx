import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../routes';
import { Container, Nav, Navbar, Offcanvas, Card } from 'react-bootstrap';
import myAvatar from '../assets/myAvatar.png';

export const Header = () => {
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
        <Navbar.Toggle />
        <Navbar.Brand className='ms-auto' as={Link} to="/">Blog</Navbar.Brand>
        <Navbar.Collapse placement={'top'} id="navbar-nav">
          <Offcanvas.Header />
          <Offcanvas.Body className='d-flex justify-content-between'>
            <Nav className='p-3'>
              <Nav.Link className='text-start' as={Link} to={ROUTES.HOME}>
                Home
              </Nav.Link>
              <Nav.Link className='text-start' as={Link} to={ROUTES.ABOUT}>
                About me
              </Nav.Link>
            </Nav>
            <Nav>
              <Card.Img
                style={{ width: '70px', height: '70px', margin: 'auto' }}
                src={myAvatar}
              />
              <Offcanvas.Body >
                Vladimir Staninov
              </Offcanvas.Body>
              <Offcanvas.Body>
                Email: vlstan@mail.ru
              </Offcanvas.Body>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}