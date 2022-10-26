import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/img/siteLogo.webp';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaUser } from 'react-icons/fa';
import './Header.css';
const Header = () => {
    const [dark, setDark] = useState(false);
    const { user, logOut } = useContext(AuthContext);
  
    const handelLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const handelDarkState = () => {
        if (dark) {
            setDark(false);
        } else {
            setDark(true);
        }
    }

    return (
        <div>
            <Navbar collapseOnSelect className=' ' expand="lg" bg="light" variant="light">

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
                            {user?.uid ?
                                <Button onClick={handelLogout} className='mx-3'>Logout</Button>
                                : <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                            }
                            {dark ?
                                <Button onClick={handelDarkState} variant='secondary' className='ms-2'>LightMode</Button> : <Button onClick={handelDarkState} variant='dark' className='ms-2'>Dark</Button>}
                            {
                                user?.photoURL? <Image src={user.photoURL} roundedCircle style={{height:'40px',marginLeft:'20px'}}></Image> : <div style={{fontSize:'30px' ,marginLeft:'20px'}}><FaUser></FaUser></div>
                            }    
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