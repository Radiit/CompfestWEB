import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
    return(
        <div className='intro'>
          <Container className='text-white d-flex text-center justify-content-center align-items-center '>
            <Row>
              <Col>
              <div className='title'>SLOGAN</div>
              <div className='title'>SLOGAN</div>
              <div className='introButton mt-4 text-center'>
                <Button variant='dark'>Lihat semua film</Button>
              </div>
              
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro