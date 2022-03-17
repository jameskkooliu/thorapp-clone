import React from "react";
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/images/thor_apps_png_1.webp';

function Header() {
    return(
        <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand className="logo">
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end" style={{ width: "100%" }}>
                    <Nav className="d-flex">
                        <Nav className="navbar mx-3"><Link to='/'>Online</Link></Nav>
                        <Nav className="navbar mx-3"><Link to='/on-premise'>On-Premise</Link></Nav>
                        <Nav className="navbar mx-3"><Link to='/pricing'>Pricing</Link></Nav>
                        <Nav className="navbar mx-3"><Link to='/case-studies'>Case Studies</Link></Nav>
                        <Nav className="navbar mx-3"><Link to='/on-premise'>Support</Link></Nav>
                        <Nav className="navbar mx-3"><Link to='/on-premise'>FAQ</Link></Nav>
                        <Nav className="navbar mx-3"><Link to='/on-premise'>Support Policy</Link></Nav>
                        <Nav className="navbar mx-3"><Link to='/on-premise'>Contact Us</Link></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;