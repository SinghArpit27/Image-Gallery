import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Category from "./components/Category";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from './components/Error';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
            {/* <Route path="/category" element={ <Category /> } /> */}
            <Route path='/about' element={ <About /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='*' element={ <Error /> } />
          {/* </Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App;
