import React from "react";
import {Container, Navbar, Nav} from "react-bootstrap";

export default function NavBar() {
return (
    <Navbar className="border rounded border-2" bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)


}