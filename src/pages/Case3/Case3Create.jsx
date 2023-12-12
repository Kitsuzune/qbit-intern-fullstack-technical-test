import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Case3Navbar from '../../components/Case3Navbar';
import Case3Footer from '../../components/Case3Footer';
import { useNavigate  } from 'react-router-dom';

const Case3Create = () => {
    const [namaMenu, setNamaMenu] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const navigate = useNavigate()

    const handleNamaMenuChange = (event) => {
        setNamaMenu(event.target.value);
    };

    const handleDeskripsiChange = (event) => {
        setDeskripsi(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newMenu = {
            nama_menu: namaMenu,
            deskripsi: deskripsi,
        };

        const existingMenus = JSON.parse(localStorage.getItem('menus')) || [];
        existingMenus.push(newMenu);
        localStorage.setItem('menus', JSON.stringify(existingMenus));

        setNamaMenu('');
        setDeskripsi('');

        navigate('/case3/menu')
    };

    return (

        <>
            <Case3Navbar />

            <Container className='p-5'>
                <span className='fw-bold' style={{ fontSize: 50 }}>Create Menu</span>
                <Form onSubmit={handleSubmit} className='my-4'>
                    <Form.Group controlId="formNamaMenu" className='mb-4'>
                        <Form.Label>Nama Menu</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Masukkan nama menu"
                            value={namaMenu}
                            onChange={handleNamaMenuChange} />
                    </Form.Group>

                    <Form.Group controlId="formDeskripsi">
                        <Form.Label>Deskripsi</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Masukkan deskripsi menu"
                            value={deskripsi}
                            onChange={handleDeskripsiChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='mt-4 pt-3 w-25'>
                        Submit
                    </Button>
                </Form>
            </Container>

            <Case3Footer />
        </>
    );
};

export default Case3Create;
