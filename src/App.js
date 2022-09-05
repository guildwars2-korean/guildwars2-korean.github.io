import React from 'react';
import './App.css';

import Header from './layout/header/header';
import Footer from './layout/footer/footer';
import Main from './layout/main/main';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
