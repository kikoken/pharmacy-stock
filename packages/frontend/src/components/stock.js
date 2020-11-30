import React from 'react'
import { Table, Button, Alert } from 'react-bootstrap'

const Stock = props => {
  const { items, onDeleteItem } = props

  if (items.length === 0) return (
    <>
      <Alert variant='primary'>
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
            { items.map((item, idx) => (<tr key={idx}>
            <td>{idx + 1}</td>
            <td>{item.name}</td>
            <td>{item.amount}</td>
              <td><Button variant="danger" onClick={() => onDeleteItem(item._id)}>Delete</Button> </td>
            </tr>))}
          </tbody>
        </Table>
      </>
  )
}

export default Stock