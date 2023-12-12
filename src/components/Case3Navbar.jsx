import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import KebabDiningOutlinedIcon from '@mui/icons-material/KebabDiningOutlined';

const Case3Navbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <KebabDiningOutlinedIcon style={{ fontSize: 30, color: "#FF5F1F" }} className='mx-3' />
                    <span className='fw-bold text-start' style={{ fontSize: 20, color: "#FF5F1F" }}>
                        Loyal UMKM
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href="/case3/index">Index</Nav.Link>
                        <Nav.Link eventKey={2} href="/case3/menu">
                            Menu
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Case3Navbar