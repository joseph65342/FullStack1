import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Switch, Link } from "react-router-dom";
import React from 'react';
import { Component } from 'react';
import Home from './component/Home';
import NewRoute from './NewRoute';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import Navigation from './component/Navigation';
import Student from './component/Student';
import History from './component/History';
import Redirect from './component/Redirect';

const handleClick = () => {
  return <Redirect />
};

class App extends Component {
  render() {
    return (
      <BrowserRouter history={History}>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/student/:studentname/:studentno?" element={<Student />}></Route>
            <Route path="/redirect" element={<Redirect />}></Route>
            <Route path="/newroute" element={<NewRoute />}></Route>
            <Route element={<Error />}></Route>
          </Routes>
          <button onClick={handleClick()}>Redirect</button>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
