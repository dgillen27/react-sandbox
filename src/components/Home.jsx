import React, { Component } from 'react'
import { Header, Container } from 'semantic-ui-react';
import { Jumbotron, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome, To My React Sandbox!</h1>
        <p>
          This is a sandbox for testing out a variety of React libraries,
          on this page I am using React Bootstrap to create a beautiful homepage!
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  )
}
