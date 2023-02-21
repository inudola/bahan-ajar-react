import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './Navigation';
import { Col, Row } from 'react-bootstrap';
function Profile() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('isLogin')) {
            navigate('/')
        }
    })
    return (
        <div className='margin-left15'>
            <Navigation />
            <h1>Profile</h1>
            <h2>Halo!, {localStorage.getItem('email')}</h2>
            <Row >
                <Col md={6}>
                    <Row>
                        <Col>A</Col>
                        <Col>B</Col>
                        <Col>C</Col>
                    </Row>
                </Col>
                <Col md={6}>2</Col>
            </Row>
        </div>
    )
}

export default Profile;
