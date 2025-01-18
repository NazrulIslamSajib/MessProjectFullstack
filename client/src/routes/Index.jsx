import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/Profile";
import Error from "../components/Error"; 
import Logout from "../components/Logout";
import HomePage from "../components/HomePage";
import AboutPage from '../components/about/aboutUs';
import OurDetailsPage from '../components/ourDetails/ourDetails';
import Header from '../layout/Header';

const Index = () => (
  <BrowserRouter> 
    <Header/>
    <Routes>
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Profile" element={<Profile />} /> 
      <Route path='/about' element={<AboutPage />} />
      <Route path='/ourdetails/:name' element={<OurDetailsPage />} />
      <Route path="/Logout" element={<Logout/>} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default Index;
