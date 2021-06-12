import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/Navbar.css';
import LOGO from '../img/logo.svg';
import { Link, animateScroll as scroll } from "react-scroll";

class testNav extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
      };
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                 <Link 
                         className="nav-link"
                         activeClass="active"
                         to="Home"
                         spy={true}
                         smooth={true}
                         offset={0}
                         duration={500}>
                         
                    <img
                        src={LOGO}
                        width="50"
                        height="50"
                        alt="React Bootstrap logo"
                    />
                </Link>

                <div className="nav-links">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Link 
                         className="nav-link"
                         activeClass="active"
                         to="Home"
                         spy={true}
                         smooth={true}
                         offset={0}
                         duration={500}
                         >Home</Link>

                        <Link 
                         className="nav-link"
                         activeClass="active"
                         to="Profile"
                         spy={true}
                         smooth={true}
                         offset={0}
                         duration={500}
                         >Profile</Link>


                        <Link 
                         className="nav-link"
                         activeClass="active"
                         to="Summary"
                         spy={true}
                         smooth={true}
                         offset={0}
                         duration={500}
                         >Summary</Link>

                        <Link 
                         className="nav-link"
                         activeClass="active"
                         to="Studies"
                         spy={true}
                         smooth={true}
                         offset={0}
                         duration={500}
                         >Studies</Link>

                        <Link 
                         className="nav-link"
                         activeClass="active"
                         to="Contact"
                         spy={true}
                         smooth={true}
                         offset={0}
                         duration={500}
                         >Contact</Link>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar >
        );
    }
}
export default testNav;