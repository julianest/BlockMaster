import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../redux/actions/actionProfile";
import "../styles/index.css";
import Search from "./Search";

const NavbarP = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar bg="dark" expand="md" >
        <Container fluid>
          <Navbar.Brand href="/home"><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1651537312/Block-Master/logo_ae8sth.svg" alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: "white" }} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navLinks"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/home" className="blockMaster">HOME</Nav.Link>
              <Nav.Link href="/contact" className="blockMaster">ABOUT US</Nav.Link>
              <Nav.Link href="#home" onClick={() => dispatch(logoutAsync())} className="blockMaster">LOGOUT</Nav.Link>
            </Nav>
            <Search />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarP;