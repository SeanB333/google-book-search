import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">React/Google book search</h1>
          <p className="lead">search for a book title.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbotron;