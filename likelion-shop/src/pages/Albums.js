
import {Navbar, Nav, Container, Col,Row} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Albums.css'
const Albums = () => {

    const {id} = useParams();

    return (
      <Container className="top">
        <Row>
          <Col className="justify-content-left">
          <a href='detail/floral'>
            <picture>
              <source srcSet="/floral.webp"/>  
              <img className = "responsive" alt ="vapor1" src="/floral.jpg" />
            </picture>
          </a>
            <p>Vektroid</p>
            <h5>Floral Shoppe</h5>
          </Col>
          <Col className="justify-content-center">
          <a href='detail/blank'>
            <picture>
              <source srcSet="/blankbanshee.webp"/>  
              <img className = "responsive" alt="vapor2" src="/blankbanshee.jpg" />
            </picture>
            </a>
            <p>Blank Banshee</p>
            <h5>Blank Banshee 0</h5>
          </Col>
          <Col className="justify-content-right">
          <a href='detail/saintpepsi'>
            <picture>
              <source srcSet="/saintpepsi.webp"/>  
              <img className = "responsive" alt="vapor3" src="/saintpepsi.jpg" />
            </picture>
          </a>
            <p>Saint Pepsi</p>
            <h5>Hit Vibes</h5>
          </Col>
        </Row>
      </Container>
    )
  };

  export default Albums;