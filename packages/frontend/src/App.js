import { useEffect, useState, useCallback } from "react";

import './App.css';
import { Container, Row, Col, Navbar} from 'react-bootstrap';
import axios from 'axios'
import config from './config'

import Stock from './components/stock'
import NewItem from './components/newItem'
const App = () => {
  const [stock, setStock] = useState([])

  const loadStock = useCallback(async () => {
    const response = await axios.get(config.url)
    setStock(response.data.data)
  }, [])


  const handlerNewItem = async (name, amount) => {
    await axios.post(config.url, { data: {
        name,
        amount
      }
    })
    loadStock()
  }

  const handlerDeleteItem = async (id) => {
    await axios.delete(`${config.url}/${id}`)
    loadStock()
  }

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
          <Stock items={stock} onDeleteItem={handlerDeleteItem}/>
        </Col>
      </Row>
      <footer>
        <NewItem onNewItem={handlerNewItem}/>
      </footer>


    </Container>
  );
}

export default App;
