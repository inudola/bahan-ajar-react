import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const handleSubmit = (e) => {
        if(!email.includes('@')) {
            alert('Format email salah')
        } else {
            localStorage.setItem('isLogin', 'true')
            localStorage.setItem('email', email)
            navigate('/home')
        }
    }
    return (
        <div  className='login-border'>
          <h1 className='margin-left15'>Login</h1>
         <form onSubmit={handleSubmit}>
         <input 
         placeholder='Input your email'
         className='margin-left15'
          type={'email'} 
          onChange={(e)=> setEmail(e.target.value)}
          value={email}
          />
          <button 
          disabled={email.length === 0 || !email.includes('@') || !email.includes('.com')}
          className='margin-left15'
          type={'submit'}
          >
            Login
          </button>
         </form>
        </div>
      )
}

export default Login;
