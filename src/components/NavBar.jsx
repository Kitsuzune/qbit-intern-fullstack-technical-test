import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" sticky="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home">QBit Technical Test</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/case1">Case 1</Nav.Link>
                        <Nav.Link href="/case2">Case 2</Nav.Link>
                        <Nav.Link href="/case3/index">Case 3</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar