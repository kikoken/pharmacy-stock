import React from 'react'
import { Table, Button, Alert } from 'react-bootstrap'

const Stock = props => {
  const { items } = props

  if (items.length === 0) return (
    <>
      <Alert variant={light}>
        This moment not register any items
      </Alert>
    </>
  )

  return (
      <>
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
      </>
  )
}

export default Stock