import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Navigation() {
    return (
        <nav>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/get-data'>GET Data</Link></li>
                    <li><Link to='/post-data'>POST Data</Link></li>
                    <li><Link to='/put-data'>PUT Data</Link></li>
                    <li><Link to='/logout'>Logout</Link></li>
                </ul>
            </nav>
    )
}

export default Navigation;
