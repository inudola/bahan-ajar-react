import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Logout() {
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem('isLogin')
        localStorage.removeItem('email')
        navigate('/')
        return () => {
            console.log('Halaman ditinggalkan');
        }
    }, [])

    return (
        <div>
        </div>
      )
}

export default Logout;
