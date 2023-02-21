import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import FethPage from './FetchPage';
import Profile from './Profile';
import Logout from './Logout';
import { useEffect, useState } from 'react';
import GetData from './GetData';
import PostData from './PostData';
import PutData from './PutData';
import Product from './Product';
import Users from './Users';

function App() {
  return (
   <div>
     <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/profile' exact element={<Profile />} />
      <Route path='/get-data' exact element={<GetData />} />
      <Route path='/post-data' exact element={<PostData />} />
      <Route path='/put-data' exact element={<PutData />} />
      <Route path='/product' exact element={<Product />} />
      <Route path='/users' exact element={<Users />} />
      <Route path='/logout' exact element={<Logout />} />
    </Routes>
  </BrowserRouter>
   </div>
  );
}

export default App;
