import React from 'react'
import { Button, Col, Container, Row, Card } from 'react-bootstrap';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';
import TakeoutDiningOutlinedIcon from '@mui/icons-material/TakeoutDiningOutlined';
import Case3Navbar from '../../components/Case3Navbar';
import Case3Footer from '../../components/Case3Footer';

const Case3 = () => {
    return (

        <>
            <Case3Navbar />
            <Container className='w-75 my-4'>

                <Row className='w-100 p-5' style={{ backgroundColor: '#33FFBD', borderRadius: 17, boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)' }}>
                    <Col md={6} className='d-flex justify-content-center align-center align-items-center'>
                        <Row>
                            <div>
                                <span className='fw-bold text-start' style={{ fontSize: 40 }}>
                                    Enjoy Tasty Food With Delightfull Choices
                                </span>
                            </div>

                            <Button className='mt-4 pt-3 mx-4' style={{ backgroundColor: '#FF5F1F', border: 'none', height: 45, width: 150, borderRadius: 17 }} href='#detail' >
                                Explore More 
                            </Button>

                        </Row>
                    </Col>

                    <Col md={6}>
                        <img src='https://www.pngkit.com/png/full/9-91636_delicious-food-png-chinese-food-png.png' alt='food' className='w-100' />
                    </Col>
                </Row>

                <Row className='p-5'>
                    <span className='fw-bold text-center' style={{ fontSize: 30 }}>We Offer Delicious Food <br /> To Your Doorsteps</span>
                    <Col md={4}>
                        <Card className='w-auto my-4'>
                            <Card.Body className='text-center p-4'>
                                <FastfoodOutlinedIcon style={{ fontSize: 100 }} className='text-muted mb-4' />
                                <Card.Title>Restaurant Food Grade</Card.Title>
                                <Card.Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odit quas debitis
                                </Card.Text>
                                <Button variant="warning" className='pt-3'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='w-auto my-4'>
                            <Card.Body className='text-center p-4'>
                                <TakeoutDiningOutlinedIcon style={{ fontSize: 100 }} className='text-muted mb-4' />
                                <Card.Title>Sterilaztion 100%</Card.Title>
                                <Card.Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odit quas debitis
                                </Card.Text>
                                <Button variant="warning" className='pt-3'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='w-auto my-4'>
                            <Card.Body className='text-center p-4'>
                                <EmojiFoodBeverageOutlinedIcon style={{ fontSize: 100 }} className='text-muted mb-4' />
                                <Card.Title id='detail'>Satisfaction Priority</Card.Title>
                                <Card.Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odit quas debitis
                                </Card.Text>
                                <Button variant="warning" className='pt-3'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>



                <Row className='px-5'>
                    <span className='fw-bold text-center' style={{ fontSize: 30 }}>Our Menu</span>
                    <hr />

                    <Row className='w-auto p-5 mx-5 '>
                        <Col md={4}>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/010/856/590/small/pork-hamburger-homemade-with-grilled-bacon-contains-vegetables-cheese-lettuce-onion-chilli-spices-in-a-wooden-dish-isolated-on-white-backgroud-png.png" alt='food' className='w-100' />
                        </Col>
                        <Col md={8} className='d-flex justify-content-center align-center align-items-center'>
                            <Row>
                                <span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur error recusandae illum officiis quae eos aliquid consequuntur quibusdam id sunt ratione dolorem aut impedit quo eveniet, nobis dolorum sint.
                                </span>
                                <Button variant="success" className='pt-3 mb-3 w-50 m-3 ' href='/case3/menu'>Click Here To See Our Menu</Button>
                            </Row>
                        </Col>
                    </Row>

                    <hr />
                </Row>



            </Container>

            <Case3Footer />
        </>
    )
}

export default Case3