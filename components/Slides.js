import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/team1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Button className="btn btn-warning">Learn More</Button> <Button className='btn btn-warning'>Mission and Vission</Button>
          <h3>God's Glory Restoration Prophet Ministry</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/team2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <Button className="btn btn-warning">Learn More</Button> <Button className='btn btn-warning'>Mission and Vission</Button>

          <h3>God's Glory Restoration Prophet Ministry</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/team3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <Button className="btn btn-warning">Learn More</Button> <Button className='btn btn-warning'>Mission and Vission</Button>

          <h3>God's Glory Restoration Prophet Ministry</h3>
          <p>
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;