import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './navbarMain.css'


import { AiOutlineSearch } from 'react-icons/ai';


export const NavbarMain = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div className=" d-flex justify-content-center justify-content-lg-start align-items-center text-center logo-navbar-contain">
        <Navbar.Brand as={NavLink} to="/" >POLIS XXI LOGO</Navbar.Brand>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="m-auto pb-2  border-0 ">
                <div className="d-flex  flex-column flex-lg-row align-items-center justify-content-center w-100 navbar-links">
                    <li className="p-2 mx-3" >
                        <Nav.Link as={NavLink} to="/aboutUs" exact activeClassName="link-active">NOSOTROS</Nav.Link>
                    </li>
                    <li className="p-2 mx-3">
                        <Nav.Link as={NavLink} to="/novelties" activeClassName="link-active">NOVEDADES</Nav.Link>
                    </li>
                    <li className="p-2 mx-3">
                        <Nav.Link as={NavLink} to="/participate" activeClassName="link-active" >PARTICIPÁ/COLABORA</Nav.Link>
                    </li>
                </div>
            </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success"><AiOutlineSearch /> </Button>
      </Form>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  )
}
