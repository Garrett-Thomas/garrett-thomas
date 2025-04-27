import { Nav } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';



function Header() {

    return (

        <Navbar expand="lg" className="bg-body-tertiary w-100">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header 
