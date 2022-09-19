import React from 'react';
import './App.css';

import Header from './layout/header/header';
import Main from './layout/main/main';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { GoogleAd } from './layout/googleAd'


function App() {
  return (
  <div style={{width: "100%", height: "100%"}}>
    <Header />
    <Row style={{display: "inline-block", textAlign: "left", width: "100%", padding: "0", margin: "0"}}>
      <Col sm="12">
        <Main />
      </Col>
    </Row>
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
  </div>
  );
}

export default App;
