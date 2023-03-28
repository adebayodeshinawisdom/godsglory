import React from 'react'
import { Nav } from 'react-bootstrap'


const CheckOutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
    <Nav.Item>
      {step1 ? (
        <a href='/login' style={{color: '#EE4B2B', textDecoration: 'none'}}>
          <Nav.Link style={{color: '#EE4B2B', textDecoration: 'none'}}>Sign In</Nav.Link>
        </a>
      ) : (
        <Nav.Link disabled>Sign In</Nav.Link>
      )}
    </Nav.Item>

    <Nav.Item>
      {step2 ? (
        <a href='/shipping' style={{color: '#EE4B2B', textDecoration: 'none'}}>
          <Nav.Link style={{color: '#EE4B2B', textDecoration: 'none'}}>Shipping</Nav.Link>
        </a>
      ) : (
        <Nav.Link disabled>Shipping</Nav.Link>
      )}
    </Nav.Item>

    <Nav.Item>
      {step3 ? (
        <a href='/payment' style={{color: '#EE4B2B', textDecoration: 'none'}}>
          <Nav.Link style={{color: '#EE4B2B', textDecoration: 'none'}}>Payment</Nav.Link>
        </a>
      ) : (
        <Nav.Link disabled>Payment</Nav.Link>
      )}
    </Nav.Item>

    <Nav.Item>
      {step4 ? (
        <a href='/placeorder' style={{color: '#EE4B2B', textDecoration: 'none'}}>
          <Nav.Link style={{color: '#EE4B2B', textDecoration: 'none'}}>Place Order</Nav.Link>
        </a>
      ) : (
        <Nav.Link disabled>Place Order</Nav.Link>
      )}
    </Nav.Item>
  </Nav>
)
}

  

export default CheckOutSteps
