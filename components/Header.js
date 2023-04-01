import React from 'react'
import Head from 'next/head'
import { Container, Row, Col, Navbar, NavLink, NavbarBrand, Nav, Form, Button, Offcanvas, Dropdown, NavDropdown } from 'react-bootstrap'
import { useState } from 'react';
import { useContext,  useEffect } from 'react';
import { Store } from '../utils/Store';
import { signOut, useSession } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {
  const [show, setShow] = useState(false);
  const router = useRouter()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const { status, data: session } = useSession();

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const handleLogout = () => {
    
     Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  }

  const [query, setQuery] = useState('');


  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };



  const userHistory = () => {
    router.push('/livestream')
  }

  const updateUser = () => {
    router.push('/profile')
  }

  const about = () => {
    router.push('/about')
  }
  const biography = () => {
    router.push('/biography')
  }

  const mission = () => {
    router.push('/mission')
  }

  const gallery = () => {
    router.push('/gallery')
  }

  const activities = () => {
    router.push('/weeklyactivities')
  }

  const covenant = () => {
    router.push('/covenant')
  }


  const prayeragainstevil = () => {
    router.push('/prayeragainstevil')
  }

  const prayerforpromotion = () => {
    router.push('/prayerforpromotion')
  }

  const specialfamilyprogram = () => {
    router.push('/specialfamilyprogram')
  }
  const adminDashboard = () => {
    router.push('/admin/dashboard')
  }

  return (
    <>
    <ToastContainer position="bottom-center" limit={1} />

    





    <Navbar  style={{backgroundColor: 'white'}} variant="light" expand="lg" fixed="top" collapseOnSelect>
        
        <Container>
        <NavbarBrand><img width="60px" height="60px" src="/images/logo.jpg"  />GGRPM</NavbarBrand>
        <Navbar.Toggle/>
        <Navbar.Collapse id='basic-navbar-nav'>

        <Nav className='ml-auto'>

        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/ourbelief">Our Belief</Nav.Link>

        
                  
             

              <NavDropdown nav right title="Who we are" > 
                <NavDropdown.Item><Nav.Link className="nav-link" onClick={about}>About Us </Nav.Link> </NavDropdown.Item>
                <NavDropdown.Item divider />
                <NavDropdown.Item><Nav.Link className="nav-link" onClick={biography}>Biography </Nav.Link></NavDropdown.Item>
                <NavDropdown.Item divider />
                <NavDropdown.Item><Nav.Link className="nav-link" onClick={mission}>Vision and Mission</Nav.Link></NavDropdown.Item>
               
                <NavDropdown.Item divider />
                <NavDropdown.Item><Nav.Link className="nav-link" onClick={gallery}>Gallery</Nav.Link></NavDropdown.Item>
              
              </NavDropdown>

              <NavDropdown nav right title="Our Program" > 
                <NavDropdown.Item><Nav.Link className="nav-link" onClick={activities}>Weekly & Monthly Activities </Nav.Link> </NavDropdown.Item>
                <NavDropdown.Item divider />
                <NavDropdown.Item><Nav.Link className="nav-link" onClick={covenant}>God's Covenant with GGRPM</Nav.Link></NavDropdown.Item>
                <NavDropdown.Item divider />
                <NavDropdown.Item><Nav.Link className="nav-link" onClick={prayerforpromotion}>Prayer Points for Promotion</Nav.Link></NavDropdown.Item>
                <NavDropdown.Item divider/>
                <NavDropdown.Item><Nav.Link className="nav-link" onClick={prayeragainstevil}>Prayer Against Evil dream Revelation & Prophecy</Nav.Link></NavDropdown.Item>
                <NavDropdown.Item divider />
               
                <NavDropdown.Item divider />
                <NavDropdown.Item><Nav.Link onClick={specialfamilyprogram}>Special Family Deliverance Program</Nav.Link></NavDropdown.Item>

             
              
              </NavDropdown>


              <NavDropdown nav right title="Social Media"> 
                <NavDropdown.Item><Nav.Link className="nav-link" href="/aboutus"> Facebook Links </Nav.Link> </NavDropdown.Item>
                <NavDropdown.Item divider />
                <NavDropdown.Item><Nav.Link className="nav-link" href="/aboutus">Video</Nav.Link></NavDropdown.Item>
                
              
              </NavDropdown>


              <Nav.Item className="nav-item">
                        <Nav.Link to="/contactus" className="nav-link">Topic - Ignorance and Faithfulness </Nav.Link>


                    </Nav.Item>



                    
                    <Nav.Item className="nav-item">
                        <Nav.Link to="/blog" className="nav-link">News </Nav.Link>


                    </Nav.Item>



        <Nav.Link href="/contact">Contact</Nav.Link>

        {status === 'loading' ? (
                'Loading'
              ) : session?.user && !session.user.isAdmin? (
                <>
                
                <NavDropdown title={session.user.name} id="username">
                  
                  <NavDropdown.Item onClick={updateUser}> Profile</NavDropdown.Item>
                  

                  
                  <NavDropdown.Item onClick={userHistory}> 
                    
                    Live Stream
                    
                    </NavDropdown.Item>
                    
                  
                
            
                  <NavDropdown.Item onClick={handleLogout}> Logout</NavDropdown.Item>
               

                </NavDropdown>

                </>)
               :session?.user.isAdmin? (
                <>
                <NavDropdown title={session.user.name}>
                  

                  <NavDropdown.Item onClick={handleLogout}> Logout</NavDropdown.Item>
                </NavDropdown>


                </>
              ) : (
                <a href="/login"  style={{lineHeight: "50px", color: 'navy'}}>
                  <i className='fas fa-user'></i>
                </a>
              )}
       

                <hr/>
        </Nav>
        </Navbar.Collapse>
        </Container>


    </Navbar>

    
      
    </>
  )
}

export default Header
