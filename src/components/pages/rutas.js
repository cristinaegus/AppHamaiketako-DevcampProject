import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export default function RutasCard() {
  return (
    <Card>
      <Card.Img src="https://picsum.photos/id/237/536/354" />
      <Card.Body>
        <Card.Title as="h5">Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}