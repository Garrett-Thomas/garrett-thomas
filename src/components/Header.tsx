import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header 