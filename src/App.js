import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
