import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Comment from '../../../components/comment';
import { Container, Col, Row } from 'react-bootstrap';

function Board() {
  return (
    <>
    <Container>
      <Row xl="12">
        <Col xl="12" style={{height: "200px;"}}>
            <Comment repo="guildwars2-korean/comments" />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Board;
