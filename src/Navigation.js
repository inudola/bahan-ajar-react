import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Navigation() {
    return (
        // <nav>
        //         <ul>
        //             <li><Link to='/home'>Home</Link></li>
        //             <li><Link to='/profile'>Profile</Link></li>
        //             <li><Link to='/get-data'>GET Data</Link></li>
        //             <li><Link to='/post-data'>POST Data</Link></li>
        //             <li><Link to='/put-data'>PUT Data</Link></li>
        //             <li><Link to='/product'>Products</Link></li>
        //             <li><Link to='/logout'>Logout</Link></li>
        //         </ul>
        //     </nav>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">eh-komers</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/get-data">Get Product</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Navigation;
