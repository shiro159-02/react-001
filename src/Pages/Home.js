import React from 'react';
import Slider from '../Components/Slider';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import img4 from '../Img/img4.jpg';
import img5 from '../Img/img5.jpg';

export const Home = () => (
    <>
        <Slider />
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Row>



                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>TEXT</Card.Title>
                            <Card.Text>
                                A description that I'm too lazy to fill out
                            </Card.Text>
                            <Button variant="primary">Button</Button>
                        </Card.Body>
                    </Card>
                </Col>



                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>TEXT</Card.Title>
                            <Card.Text>
                                A description that I'm too lazy to fill out
                            </Card.Text>
                            <Button variant="primary">Button</Button>
                        </Card.Body>
                    </Card>
                </Col>



                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>TEXT</Card.Title>
                            <Card.Text>
                                A description that I'm too lazy to fill out
                            </Card.Text>
                            <Button variant="primary">Button</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col>
                    <img src={img5} height={400} />
                </Col>
                <Col>
                    <h2>WebDev</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                    adipiscing elit molestie mauris, euismod
                    erat accumsan sagittis magna nam suspendisse ante,
                    maximus efficitur neque lacus facilisi libero malesuada
                    vestibulum aliquet, etiam quisque vitae hendrerit pulvinar
                    integer mi. Magnis pretium parturient eget senectus iaculis
                    aliquam, vestibulum facilisis commodo eleifend odio diam
                    elementum, pulvinar nec ac mauris nascetur.</p>
                </Col>
            </Row>
        </Container>
    </>

)
