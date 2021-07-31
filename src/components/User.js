import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

export default function User(props) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title className='text-center'>Username:- {props.username}</Card.Title>
        <Card.Text>
         
          <ListGroup className="list-group-flush">
          <ListGroupItem> Name:- {props.name}</ListGroupItem>
          <ListGroupItem> Email:- {props.email}</ListGroupItem>
          <ListGroupItem> Phone:- {props.phone}</ListGroupItem>
          <ListGroupItem> Website:- {props.website}</ListGroupItem>
            
          </ListGroup>
        </Card.Text>

        <Card.Footer className='text-center' >
          <Button variant="primary">View User Detail</Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
