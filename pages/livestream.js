import React, { useState, useEffect, useContext, useReducer, } from 'react';
import axios from 'axios';
import { getError } from './../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'



function reducer(state, action) {
    switch (action.type) {
      
      case 'POST_REQUEST':
        return { ...state, loading: true, error: '' };
      case 'POST_SUCCESS':
        return {
          ...state,
          loading: false,
          error: '',
        };
      case 'POST_FAIL':
        return { ...state, loading: false, error: action.payload };
  
  
       
      default:
        return state;
    }
  }
  

function PostStream() {
  const [link, setLink] = useState("");
  
const router = useRouter()  


const [{ loading, error, loadingUpdate,  loadingUpload }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      
    
      dispatch({ type: 'POST_REQUEST' });
     await axios.post(`/api/stream`, {
        link: link
   
       
      });
      dispatch({ type: 'POST_SUCCESS' });
      toast.success('saved successfully');

    } catch (err) {
      dispatch({ type: 'POST_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
    
  
    router.push('/')    
     
  };




  return (
    <>
    <div className='container'>
       <h3 className='text-center text-danger'>Publish a stream
        </h3>
      
       
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='title....' className='form-control'
        
             onChange={(e)=> setLink(e.target.value)}
            />
           
            <button className='form-control btn btn-primary' type='submit'>Send</button>




        </form>
      
    </div>
    <br/>
    <br/>
    <br/>
    </>

  )
}

export default PostStream
PostStream.auth = true