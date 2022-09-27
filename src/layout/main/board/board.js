import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Comment from '../../../components/comment';
import { Container, Col, Row } from 'react-bootstrap';
import { GoogleAd } from '../../../layout/googleAd'

function Board() {
  return (
    <>
    <Container>
      <Row xl="12">
        <Col xl="12">
            <Comment repo="guildwars2-korean/comments" />
        </Col>
      </Row>
      {/* google ad */}
      <Row style={{
        margin: '20px 0px 0px 0px',
        padding: '0px 0px 0px 0px',
      }}>
        <Col sm="12">
          <center>
            <GoogleAd/>
          </center>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Board;
