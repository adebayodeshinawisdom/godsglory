import React from 'react';
import { Card } from 'react-bootstrap'

const Biography = () => {
  return (
    <div className='container'>
        <h1 className='text-center'> Biography Of Prophet Abiola Mathew</h1><br/>

        <div className='row'>
            <div className='col-md-6'>
                <h3>
                The biography of Prophet Abiola Matthew <br/>
                Father: Late George Abiola <br/>
                Mother: Mrs Deborah Abiola <br/>
                Place of birth :Oloba, Ibadan, Oyo state.
                </h3>

            </div>
            <br/>
           
            <div className='col-md-12'>
              <br/>
              
            <h3>ACADEMIC BACKGROUND</h3>

                <p style={{fontSize: "x-large"}}>
                Primary School attended: SDA Primary school, Oloba , Ibadan East, oyo state. 1971-1977.
                Secondary School attended: Community modern School Erunmu, Ibadan East, Oyo state. 
                </p>

                <p style={{fontSize: "x-large", textAlign: "justify"}}> 1977-1979. Idi- Ito High School, Erunmu, Ibadan, Oyo state.     1979-1984
Tertiary institution attended: Yaba College of Technology Yaba, Lagos; where he obtained Ordinary National Diploma and
Higher National Diploma  in Building  Technology respectively between 1988-1991 and 1992-1995.
He studied public Administration at National open University of Nigeria.</p>
            </div>

            <div className='col-md-12'>
              <br/>
              <h3>WORKING EXPERIENCE:</h3>
              <p style={{fontSize: "x-large", textAlign: "justify"}}>

                He worked with K.Issardas Textile Industry, Oshodi, Lagos 1985-1995 as Jigger machine operator.
He worked with Sakamori construction Nigeria Limited, Lagos between 1995-1996 as a land surveyor assistant.
He was employed as site Engineer by Sochex Engineer  and mortgage Builders, Lagos in 1996- 2000.




              </p>
            </div>

            <div className='col-md-12'>
              <br/>
              <h3>His own companies:</h3>
              <p style={{fontSize: "x-large", textAlign: "justify"}}>
                He later registered his own companies F.S.H CONSTRUCTION NIGERIA LIMITED AND F.S.H CONSULTS respectively  in 2002 and 2006.

He supervised  many building projects both in Abuja and outside Abuja.
              </p>

            </div>

            <div className='col-md-6'>
              <Card.Img src="/images/grpmb.jpeg"/>
            </div>

            <div className='col-md-6'>
              <h3><Card style={{color: "red"}}>SALVATION EXPERIENCE</Card></h3>
            <p style={{fontSize: "x-large", }}>
              He was a member of C.M.S Odo -Oba, Ibadan, Oyo state which is the parents church from 1963-1981.
            </p>

             <p style={{fontSize: "x-large", textAlign: "justify" }}>
             He finally surrendered his life to Jesus Christ during a crusade organised by New Life for All Nation in Erunmu, Ibadan in 1981.
            </p>

            <p style={{fontSize: "x-large", textAlign: "justify" }}>
              He spent 5years under the ministration of pastor Orimadegun. He relocated to Lagos in 1985 and joined Deeper Life Bible Church, Gbagada , Lagos between 1985 – 1996  under the ministration of Pastor Williams Kumuyi  and pastor Ayelemelo ( Agege Regional coordinator (10years), he worked as Area Leader visitation and assistant House leader.                             He was deployed to Abuja from Lagos by his office (Sochex Engineer) and joined Mountain of Fire and Miracles Ministry Regional Headquarters, utako, Abuja where he spent 21years of service to God under the Ministration of:
            </p>
            
            
            
            </div>

          

        </div>
      
    </div>
  )
}

export default Biography
