
import './App.css';
import Element from './components/Element';
import WrongRoute from './components/WrongRoute';
import React, { useEffect } from 'react';
import {Routes, Route} from "react-router-dom"

import Home from './components/Home';

const App = () => {
  return (
     <div className="App">
        <header><h1>Social Media App</h1></header>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/item/:id" element={<Element />} />
           <Route path="/*" element={<WrongRoute />} />
        </Routes>
     </div>
  );
}

export default App;
