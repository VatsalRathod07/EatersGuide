import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
import Job from './components/JobCard/Job'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login';

const Home = () => {
  return (
    <div className='mx-auto container bg-white'>
      <Navbar />
      <Search />
      <Job />
      <Footer />
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
