import React from 'react';
import './App.css';

import Header from './layout/header/header';
import Footer from './layout/footer/footer';
import Main from './layout/main/main';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { GoogleAd } from './layout/googleAd'


function App() {
  return (
  <div>
    <Header />
    <Row style={{minHeight: "calc(100vh - 290px)", width: "100%"}}>
      <Col sm="12">
        <Main />
      </Col>
    </Row>
    <Row style={{
      position: "sticky",
      "bottom": 0,
      margin: '20px 0px 0px 0px',
      padding: '0px 0px 0px 0px',
    }}>
      <Col sm="12" style={{}}>
        <GoogleAd/>
      </Col>
    </Row>
    <Footer style={{position: "sticky", "bottom": 0}} />
  </div>
  );
}

export default App;
