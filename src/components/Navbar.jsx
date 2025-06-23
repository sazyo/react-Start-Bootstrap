import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar
            expand="lg"
            bg="dark"
            variant="dark"
            fixed="top"
            expanded={expanded}
            className="text-uppercase custom-navbar py-3"
        >
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/"
                    className="fs-3 fw-bold text-white"
                >
                    Start Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="navbarResponsive"
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                    className="text-white border-0"
                >
                    <span>Menu</span> <i className="fas fa-bars ms-2"></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarResponsive">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/services"
                            className="mx-3 fw-bold text-white"
                            onClick={() => setExpanded(false)}
                        >
                            Portfolio
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className="mx-3 fw-bold text-white"
                            onClick={() => setExpanded(false)}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className="mx-3 fw-bold text-white"
                            onClick={() => setExpanded(false)}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
