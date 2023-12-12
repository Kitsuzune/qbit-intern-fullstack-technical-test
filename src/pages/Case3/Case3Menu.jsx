import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Button, Card } from 'react-bootstrap'
import Case3Navbar from '../../components/Case3Navbar'
import Case3Footer from '../../components/Case3Footer'

const Case3Menu = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const storedMenus = JSON.parse(localStorage.getItem('menus')) || [];
        setMenus(storedMenus);
    }, []);

    const generateRandomImageUrl = () => {
        return `https://source.unsplash.com/1600x900/?food,spices&_=${Math.floor(Math.random() * 100)}`;
    };

    const deleteMenu = (index) => {
        const updatedMenus = [...menus];
        updatedMenus.splice(index, 1);
        localStorage.setItem('menus', JSON.stringify(updatedMenus));
        setMenus(updatedMenus);
      };

    return (

        <>
            <Case3Navbar />

            <Container className='w-75 my-4'>
                <Row className='w-100 p-5' style={{ backgroundColor: '#33FFBD', borderRadius: 17, boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)' }}>
                    <Col md={6} className='d-flex justify-content-center align-center align-items-center'>
                        <Row>
                            <div>
                                <span className='fw-bold text-start' style={{ fontSize: 40 }}>
                                    Add Menu Here :3 <br />
                                </span>
                                <span className='fst-italic text-start' style={{ fontSize: 20 }}>
                                    *Image Is Generated Radomly
                                </span>
                            </div>

                            <Button className='mt-4 pt-3 mx-4' style={{ backgroundColor: '#FF5F1F', border: 'none', height: 45, width: 150, borderRadius: 17 }} href='/case3/create'>
                                Add
                            </Button>

                        </Row>
                    </Col>

                    <Col md={6}>
                        <img src='https://freepngimg.com/thumb/food/9-2-food-png-file.png' alt='food' className='w-100' />
                    </Col>
                </Row>

                <Row>
                    <Row xs={1} md={2} className="g-4">
                        {menus.map((menu, idx) => (
                            <Col key={idx}>
                                <Card>
                                    <Card.Img variant="top" src={generateRandomImageUrl()} />
                                    <Card.Body>
                                        <Row className='d-flex align-items-center align-center'>
                                            <Col md={9}  >
                                                <Card.Title>
                                                    <span className= 'fw-bold' style={{ fontSize: 20 }}>
                                                        {menu.nama_menu}
                                                    </span>
                                                </Card.Title>
                                            </Col>
                                            <Col md={3}>
                                                <Button variant="danger pt-3 w-100" style={{ borderRadius: 17 }} onClick={() => deleteMenu(idx)}>Delete</Button>
                                            </Col>

                                            <Card.Text>
                                                {menu.deskripsi}
                                            </Card.Text>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Row>

            </Container>

            <Case3Footer />
        </>
    )
}

export default Case3Menu