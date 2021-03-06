import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import SingleEvent from './pages/SingleEvent';


function App() {
     
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<SingleEvent />} />
    </Routes>
  </BrowserRouter>

  );

}

export default App;
