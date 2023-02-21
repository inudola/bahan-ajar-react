import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import axios from 'axios';

function PutData() {
const [post, setPost] = useState({title:'', brand:''})
    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
        console.log(post)
    }

    const handleSubmit = () => {
        const id = 1
        axios.put(`https://dummyjson.com/products/${id}`, {
            title: post.title,
        })
        .then((res) => console.log(res))
        .catch((e) => console.log(e))
    }
    return (
       <div className='margin-left15'>
        <Navigation />
        <h1>PUT data</h1>
        <form>
            <input
            placeholder='title'
            type={'text'}
            name={'title'}
            value={post.title} 
            onChange={handleChange}
            />
        </form>
        <button onClick={() => handleSubmit()}>PUT</button>
       </div>
    )
}

export default PutData;
