import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" style={{ padding: '10px 0'}}>
            <Container  className="d-flex justify-content-between align-items-center" style = {{padding: '0 150px'}}>
                <Nav >
                    <Nav.Link href="/menu">Menu</Nav.Link>
                    <Nav.Link href="/add">Add Food Item</Nav.Link>

                </Nav>

            <Navbar.Brand href="/" style={{ fontSize: '2rem', textAlign: 'center', flexGrow: 1 }}>Café de Pantalons Fantaisie</Navbar.Brand>
            
                <Nav >
                    <Nav.Link href="/">Leave A Review</Nav.Link>

                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};
export default Navigation;

