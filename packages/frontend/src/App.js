import { useEffect, useState, useCallback } from "react";

import './App.css';
import { Container, Row, Col, Navbar, Table, Button} from 'react-bootstrap';
import axios from 'axios'
import config from './config'

import Stock from './components/stock'
const App = () => {
  const [stock, setStock] = useState([])

  const loadStock = useCallback(async () => {
    const response = await axios.get(config.url)
    setStock(response.data)
  }, [])


  useEffect(() => {
    loadStock()
  }, [loadStock])

  return (
    <Container>
      <header>
        <Navbar bg="light">
          <Navbar.Brand href="#home">PHARMACY STOCK</Navbar.Brand>
        </Navbar>
      </header>
      <hr/>
      <Row>
        <Col>
          <Stock items={stock}/>
        </Col>
      </Row>
      <footer>
        <Row>
          <Col>
            <Button variant="primary">Agregar</Button>
          </Col>
        </Row>
      </footer>


    </Container>
  );
}

export default App;
