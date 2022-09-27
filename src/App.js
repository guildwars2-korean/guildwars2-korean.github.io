import React from 'react';
import './App.css';

import Header from './layout/header/header';
import Main from './layout/main/main';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';



function App() {
  return (
  <div style={{width: "100%", height: "100%"}}>
    <Header />
    <Row style={{display: "inline-block", textAlign: "left", width: "100%", padding: "0", margin: "0"}}>
      <Col sm="12">
        <Main />
      </Col>
    </Row>
  </div>
  );
}

export default App;
