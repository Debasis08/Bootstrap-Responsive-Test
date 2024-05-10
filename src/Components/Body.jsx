import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <>
    <div className='mainBox'>
    <Row className='row'>
        <Col className='sideBar' sm={12} md={3}>Side Bar</Col>

        <Col sm={12} md={9} lg={6}>
          <Col className='navigation'>Navigation</Col>
          <Col className='main'>Main</Col>
        </Col>

        <Col className='ads'sm={12}  lg={3}>Ads</Col>
    </Row> 
    </div>
    </>
  );
}

export default App