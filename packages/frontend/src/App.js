import './App.css';
import { Container, Row, Col, Navbar, Table, Button} from 'react-bootstrap';
function App() {
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
          <h3>STOCK ACTUAL</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Paracetamol</td>
                <td>3</td>
                <td><Button variant="danger">Delete</Button> </td>
              </tr>
            </tbody>
          </Table>
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
