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
    <>
    <div>
      <Header />
      <Row>
        <Col sm="2">
          
        </Col>
        <Col sm="8">
          <Main />
        </Col>
        <Col sm="2">
          <div style={{marginTop: 100}}>
            <GoogleAd/>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
    </>
  );
}

export default App;
