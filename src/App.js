import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbars';
import Get from './pages/Get_m';
import Post from './pages/Post_meth';
import Search from './pages/Search_meth';
import Mintemp from './pages/Min';
import Maxtemp from './pages/Max_getmeth';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/get" element={<Get />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mintemp" element={<Mintemp />} />
        <Route path="/maxtemp" element={<Maxtemp />} />
      </Routes>
    </Router>
  );
};

export default App;

