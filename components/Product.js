import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'
import Link from 'next/link'
import { Store } from '../utils/Store'
import axios from 'axios'
import { toast } from 'react-toastify';

const Product = ({ product, addToCartHandler }) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  
  return (
    <Card className='my-3 p-3 rounded shadow-sm p-3 mb-5 bg-body'>
      <Link href={`/products/${product.slug}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link href={`/products/${product.slug}`}>
          <Card.Title as='div'>
            <span style={{color: "black"}}>{product.name}</span>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>N{product.price}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button className="form-control" 
        onClick={() => addToCartHandler(product)}
        style={{backgroundColor: "#EE4B2B", color: "black", border: "#EE4B2B"}}>Add to Cart</Button>
      </Card.Footer>
    </Card>
  )
}

export default Product