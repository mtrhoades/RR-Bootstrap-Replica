import React from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Instacart from '../images/instacartLogo.webp'

export default function TopBar () {
  return (
    <div>
        <Navbar style={{display: 'flex', justifyContent: 'space-between'}} bg="light" expand="lg" >
            <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                <img style={{width: "100px"}} src={Instacart} /> 
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"> 
                </Nav>
                <Nav style={{ padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex", justifyContent: "flex-end" }} >
                    <Nav.Link style={{color: "#343538", padding: "1em", textDecoration: "none"}} href="#LogIn">Log In</Nav.Link>
                    <Button variant="success" style={{fontSize: "18px", backgroundColor: "#04c20a"}}>Sign Up</Button>{' '}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}
