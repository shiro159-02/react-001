import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #adb1b8;
        text-decoration: none;
        &:hover {
          color: white;
        }
    }
`

export default function NaviBar() {
  // это хук
  const [show, setShow] = useState(false);
  // закрыть окно
  const handleClose = () => setShow(false);
  // показать окно
  const handleShow = () => setShow(true);

  return (
  <>
  <Styles>
      <Navbar collapsOnSelect expand="lg" bg="dark" variant="dark">
       <Container>
          <Navbar.Brand>WebDev</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                    <Nav.Link><Link to="/about">About</Link></Nav.Link>
              </Nav>
              <Nav>
                    <Button variant="primary" className="me-2" onClick={handleShow}>Log In</Button>
                    <Button variant="primary" onClick={handleShow}>Sign out</Button>
              </Nav>
          </Navbar.Collapse>
           </Container>
      </Navbar>
</Styles>

<Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>Log in</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Form.Group controlId="fromBasicEmail">
                <Form.Label>Email Adress</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
                <Form.Text className="text-muted">very very more text</Form.Text>
            </Form.Group>
            <Form.Group controlId="fromBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>
            </Form.Group>
            <Form.Group controlId="fromBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form>
    </Modal.Body>
</Modal>
  </>
);
}
