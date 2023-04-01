import React, { useEffect, useReducer } from 'react';
import Slides from '../components/Slides';
import Loader from '../components/Loader'
import Link from 'next/link'
import { getError } from '../utils/error';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, stream: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}


const Home = () => {
  
  const [{ loading, error, stream }, dispatch] = useReducer(reducer, {
    loading: true,
    stream: [],
    error: '',
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/stream`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchOrders();
  }, []);
  const style1 = {border: "none"}
  const style2 = {overflow: "hidden"}
  
  return (
    <>

    <div className='container-fluid'>
      <marquee><h3>Prayer & Counseling Call: 08037041821, 08097152442, 08029404829 | Free Gift Offering & Tithes: 0764705461 Access Bank</h3></marquee>
      <marquee><h2>Sun: Service 9:00AM | Mon: Bible Studies: 5:00pm | Wed: Hour of Mercy: 5:00pm | Last 3 days of the month: Prophetic Prayers for testimonies </h2></marquee>
     <Slides/>
    </div>
    <br/>
    <br/>
    <br/>

<Container>
      <Row>
            <h1 className='text-center'>Biography of Prophet Abiola Mathew </h1>
      
        <Col md={6}>
         
          <p> The biography of Prophet Abiola Matthew

Father: Late George Abiola

Mother: Mrs Deborah Abiola

Place of birth :Oloba, Ibadan, Oyo state. Wife: Mrs Shola Abiola and blessed with four children males and females</p>
<br/>
<br/>


      <h3 className='text-center'>ACADEMIC BACKGROUND</h3>


      <p style={{textAlign:"justify", lineHeight: "50px"}}>Primary School attended: SDA Primary school, Oloba , Ibadan East, oyo state. 1971-1977.

Secondary School attended: Community modern School Erunmu , Ibadan East , Oyo state.

1977-1979: Idi- Ito High School ,Erunmu, Ibadan , Oyo state.     1979-1984

Tertiary institution attended: Yaba College of Technology Yaba, Lagos; where he obtained Ordinary National Diploma and

Higher National Diploma  in Building  Technology respectively between 1988-1991 and 1992-1995. Later did his PGD in Public Administration at National Open University (NOUN), Abuja, Nigeria.</p>




        </Col>


        <Col md={6}>
          <img style={{height:"600px"}}src="/images/team2.jpg"/>


        </Col>

       

        <h1 className='text-center'>About God's Glory Restoration Prophetic Ministry.</h1>

        <Col md={6}>
          <p style={{textAlign: "justify", fontSize: "large", lineHeight:"40px" }}>In October 2nd, 2005 I heard a still small voice from God about God’s Glory Restoration Prophetic Ministry and I didn’t understand the Meaning of the Ministry’s name until God told me to leave my profession ( Building Engineering)and be a full time Minister after I have spent 20years in Mountain of Fire and Miracles Ministry.

            </p>

            <p style={{textAlign: "justify", fontSize: "large", LineHeight: "40px" }}>In Year 2010 I went with my family to meet my spiritual father ( Pastor Lawrence Olaseinde ) and  he told me that my revelation is real but I need to exercise Patience and confirm the voice he told me that when God calls a man there is time, there is location and mission or assignment and he advised me to start my assignment as a full time Minister in MFM for God to confirm His will in my life which I consented to, in order to confirm the name of the ministry and to have the deeper meaning of the name of the Ministry whenever I pray for anyone the voices used to speak through them and always say he had stolen their Glory . The voice can be the voice of family familiar spirit, spirit of the powers of their father’s house, or territorial powers. There always manifestation and the devils confessed he had stolen their Glory and he is ready to return their Glory after hot prayers. God confirmed the name of my Ministry.


            </p>


        </Col>

        <Col md={6}>

          <img src="/images/teamnew.jpeg" style={{height: '700px', width: '400px'}}/>



        </Col>




        <br/>
        <br/>


     



      </Row>
      <hr/>
     <br/>
     <Row className='container'>

     <Col md={6}>
      {loading ? (<Loader/>): (

     
      stream && stream.map(m=> {
        return(
          <div className='container'>

          <div className='container' dangerouslySetInnerHTML={{ __html: `${m.link}`}} />

            
        </div>
        )

      })
      )}
      </Col>
     </Row>
 </Container>


    <br/>
    <br/>
    <br/>

    
    

    
    
    </>
  )
}

export default Home

