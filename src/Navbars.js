import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './sun.png';

const Navbars = () => {
 
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px 20px",
    fontFamily: "Arial",
    textDecoration: "none"
  }

  return (
   
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
        <img src={logo} className="" width={40}  alt="logo" />
          <Navbar.Brand className='fs-4'>TEMPRETURE - API</Navbar.Brand>
          <Nav className="me-auto ">
            <Link style={mystyle} to="/post">DATA-ENTER</Link>
            <Link style={mystyle} to="/get">CITY-DIS</Link>
            <Link style={mystyle} to="/search">SEARCH</Link>
            <Link style={mystyle} to="/maxtemp">MAX-TEMP</Link>
            <Link style={mystyle} to="/mintemp">MIN-TEMP</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
)}

export default Navbars
