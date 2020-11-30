import { useState, useRef }  from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

const NewItem = props => {
    const { onNewItem } = props

    const [showAdd, setShowAdd] = useState(false)

    const nameItem = useRef(null)
    const amountItem = useRef(null)


    const handlerSubmit = (e) => {
        e.preventDefault()
        setShowAdd(false)
        onNewItem(nameItem.current.value, amountItem.current.value)
        nameItem.current.value = '' 
        amountItem.current.value = ''
    }

    return (
        <Row>
          <Col lg={4}>
            { (!showAdd) ? <Button variant="primary" onClick={() => setShowAdd(true)}>Add Item</Button>
            : 
            <Form onSubmit={handlerSubmit}>
                <hr />
                <h4>Add new item</h4>
                <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="input" placeholder="Enter name medicine" ref={nameItem} />
                </Form.Group>
                <Form.Group controlId="amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="input" placeholder="Enter amount item" ref={amountItem} />
                </Form.Group>
                <Button variant="primary" type="submit">Confirm</Button>
            </Form>
            }
          </Col>
        </Row>
    )
}

export default NewItem