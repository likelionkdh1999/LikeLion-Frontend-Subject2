
import {Navbar, Nav, Container, Col,Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Albums.css'
const Albums = () => {
    return (
      <Container className="top">
        <Row>
          <Col className="justify-content-left">
            <picture>
              <source srcSet="/floral.webp"/>  
              <img className = "responsive" alt ="vapor1" src="/floral.jpg" />
            </picture>
            <p>Vektroid</p>
            <h5>Floral Shoppe</h5>
          </Col>
          <Col className="justify-content-center">
            <picture>
              <source srcSet="/blankbanshee.webp"/>  
              <img className = "responsive" alt="vapor2" src="/blankbanshee.jpg" />
            </picture>
            <p>Blank Banshee</p>
            <h5>Blank Banshee 0</h5>
          </Col>
          <Col className="justify-content-right">
            <picture>
              <source srcSet="/saintpepsi.webp"/>  
              <img className = "responsive" alt="vapor3" src="/sainitpepsi.jpg" />
            </picture>
            <p>Saint Pepsi</p>
            <h5>Hit Vibes</h5>
          </Col>
        </Row>
      </Container>
    )
  };

  export default Albums;