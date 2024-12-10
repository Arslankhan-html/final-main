import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Container, Nav} from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">CAFE</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/menu">Menu</Nav.Link>
                    <Nav.Link href="/add">Add Food Item</Nav.Link>
                    <Nav.Link href="/">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};
export default Navigation;