import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';

function NotFound() {
  return (
    <>
    <Container>
      <Row xl="12">
        <Col xl="12">
            <center>
                페이지를 찾을 수 없습니다.
            </center>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default NotFound;
