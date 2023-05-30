import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'

import {Navbar, Nav, Container, Col,Row} from "react-bootstrap";


const Home = () => {
    return(
      <Container>
        <Row>
          <Col>
            <Canvas>
              <mesh>
                <boxGeometry args={[1,1,1]} />
              </mesh>
            </Canvas>
          </Col>
          <Col>
            <div className='dis'>
              <img className='img' src="/main.jpg" alt="mainimg"/>
            </div>
          </Col>
        </Row>
      </Container>
      
    )
  };
  
  export default Home;