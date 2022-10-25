import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/img/siteLogo.webp';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4 ' expand="lg" bg="light" variant="light">

              <div className='container'>
              <Navbar.Brand><Link to='/' className='ms-4'
                    style={{
                        textDecoration: 'none',
                        fontSize: '25px',
                        fontWeight: 'bolder',
                        color: 'black'
                    }}><img src={logo} alt="" style={{ height: '40px' }} /> Learn Development</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="prantsLink ms-auto">
                        <Link to='/'>Home</Link>
                        <Link to='/courses'>Courses</Link>
                        <Link to='/courses'> FAQ</Link>
                        <Link to='/courses'>Blog</Link>


                    </Nav>
                    <Nav>

                        <Link to="/profile">

                        </Link>
                    </Nav>

                </Navbar.Collapse>

              </div>
            </Navbar>
        </div>
    );
};

export default Header;