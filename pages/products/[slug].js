import React, {useContext, useState} from 'react'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {Row, Col, ListGroup, Card, Form, Button, Container, Image } from 'react-bootstrap'
import Rating from '../../components/Rating'
import { Store } from '../../utils/Store'
import axios from 'axios'
import Product from '../../model/ProductModel'
import db from '../../utils/db'


export default function SingleProduct (props) {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const { state, dispatch } = useContext(Store);

  const   router   = useRouter()
  const { product } = props;

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    
    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  }
  
  if (!product) {
    return <div>Produt Not Found</div>
  }
  return (
    <div className='container'>
    <Link className='btn btn-light my-3' href='/'>
      Go Back
    </Link>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
      <>
    
        <Row>
          <Col  md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: N{product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>N{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                

                <ListGroup.Item>
                  <Button style={{backgroundColor: "#EE4B2B", color: "black", border: "#EE4B2B"}}
                    onClick={addToCartHandler}
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        
      </>
    )}
  </div>



  )
}

export async function getServerSideProps(context) {
  const { params } = context;
 const { slug } = params;

  await db.connect()
  const product = await Product.findOne( { slug } ).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product): null,
    },
  };
}


