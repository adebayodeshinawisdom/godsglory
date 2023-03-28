
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Button, Col, Input, Label, Row} from 'react-bootstrap';
function Contactus (){
  const style1 = {backgroundColor: "navy"}
  const style2 = {color: "white"}
    return(
           <>
           <div className="container">
           <Breadcrumb>
          <Breadcrumb.Item>
          <a  style={{color: "black"}} href="/">Home</a>
          </Breadcrumb.Item>

            <Breadcrumb.Item>
               Contact 
            
            </Breadcrumb.Item>
           
           </Breadcrumb>


           <h3 className="text-center">Write us a message</h3>
           <hr/>




           <Form>
            <Row>
            <Col md="2">
            <Form.Label>Name:</Form.Label>
            
            </Col>

            <Col md="8">

            <Form.Control type="text"></Form.Control>
            
            
            </Col>



            </Row>




            <Row>
            <Col md="2">
            <Form.Label>Email:</Form.Label>
            
            </Col>

            <Col md="8">

            <Form.Control type="text"></Form.Control>
            
            
            </Col>



            </Row>


            <Row>
            <Col md="2">
            <Form.Label>Tel:</Form.Label>
            
            </Col>

            <Col md="8">

            <Form.Control type="number"></Form.Control>
            
            
            </Col>



            </Row>


            <Row>
            <Col md="2">
            <Form.Label>Message:</Form.Label>
            
            </Col>

            <Col md="8">

            <Form.Control type="textarea"></Form.Control>
            
            
            </Col>



            </Row>



            

            <Row>
            <Col md="2">
         
            
            </Col>

            <Col md="8">

            <Form.Control className="btn btn" type="submit" value="Submit" style={{...style1, ...style2}}></Form.Control>
            
            
            </Col>



            </Row>








           </Form>




           

           </div>
           
           
           
           </>
       
    )
}

export default Contactus;