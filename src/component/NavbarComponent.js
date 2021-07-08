import React from 'react'
import { Nav, Navbar, Form, Button, FormControl, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";

function NavbarComponent() {
    return (
        <Navbar variant="dark" expand="lg">
            <Container>
            <Navbar.Brand href="#home"><FontAwesomeIcon icon={faTags} className="mr-2"/><strong>Distro.id</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Daftar Transaksi</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent
