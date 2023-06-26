import React from "react";
import {Navbar, Container, NavDropdown, Nav, Row, Col, Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Header/Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/burn.jpg";
import {Link} from "react-router-dom";

function Header() {
    const navigate= useNavigate()
    const handlelogout=()=>{
        localStorage.removeItem("Token")
        localStorage.removeItem("Role")
       navigate("/")
        }
    return(
        <>
         <div className="top-header">
            <Container>
                <Row className="align-items-center">
                    <Col xs={2} md={4} lg={6}>
                        <div className="brand-logo" style={{display:"flex"}}>
                        <img src={logo} alt="Logo" width="90px"style={{borderRadius:"50%",height:"90px"}}/>
                        </div>
                    </Col>
                    <Col xs={2} md={4} lg={6}>
                        <div className="text-end">
                        <Dropdown>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                <i class="fas fa-user"></i>
                            </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={handlelogout}>logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
            <Navbar expand="lg" className="py-0 bg-default-theme">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="navitem-menu">
                        <Link className="nav-link" to="/manageuser">Manage Users</Link>
                        <NavDropdown title="Business/Vendors" id="basic-nav-dropdown">
                        <Link className="dropdown-item" to="/BusinessList">Business Listing</Link>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.2">New Requests</NavDropdown.Item>
                        </NavDropdown>
                        <Link className="nav-link" to="/ManageCatgory">Manage Categories</Link>
                        <Link className="nav-link" to="/ManagefeaturedBusiness">Manage Featured Businesses</Link>
                        <Link className="nav-link" to="/ManageRating">Manage Rating</Link>
                        <Link className="nav-link" to="/ManageNotification">Manage Notifications</Link>
                         { localStorage.getItem("Token")&& localStorage.getItem("Role")==="admin"&&
                          <Link className="nav-link" to="/AddServices">Add Services</Link>
                          }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;