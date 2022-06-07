import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import Circle from './Circle'

function Join() {
  return (
    <section id='join-the-fun'>
      <Circle/>
      <h1 className="h1-join">Join the <span className="p-fun">fun.</span></h1>
      <Form className='form'>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="name"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email"/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password"/>
        </Form.Group>

        <Button className="btn-join" variant="primary" type="submit">
          Join Now
        </Button>
      </Form>
    </section>
  );
}

export default Join
