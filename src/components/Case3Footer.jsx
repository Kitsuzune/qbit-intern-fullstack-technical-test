import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

const Case3Footer = () => {
    return (
        <Row className='px-5 py-3 bg-dark'>
                <span className='text-white text-center'>&copy; {new Date().getFullYear()} Teguh Wibowo - Tes Qbit Fullstack</span>
        </Row>
    );
};

export default Case3Footer;
