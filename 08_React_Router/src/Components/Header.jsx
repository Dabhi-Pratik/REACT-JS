import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <Navbar expand="lg" bg="light">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/">
                    React App
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto" navbarScroll>

                        <Nav.Link as={NavLink} to="/">
                            Home
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/about">
                            About
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/service">
                            Service
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/product">
                            Product
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;