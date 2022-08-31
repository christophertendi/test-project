import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
const time = current.toLocaleTimeString(); 


export default function Navbarz() {
  return (
    <Navbar bg="secondary" expand="sm">
        <Navbar.Brand className ="ms-3 text-white" as={Link} to = "/">
          <h1 className="display-5">Mr X's Coffee Shop</h1>
        </Navbar.Brand>
      <Nav className="justify-content-end me-4" style={{ width: "100%" }}>
        <div className="lead fs-4 text-white ">Contact: 081122334455</div>
      </Nav>
    </Navbar>
  )
}
