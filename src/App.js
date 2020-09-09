import React from 'react';
import './App.css';
import NavMenu from './components/nav/NavMenu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import BlogPage from './components/pages/BlogPage';

function App() {
  return (
    <Router >
      <div className="App">
          <NavMenu />
          <div id="page-body">
            <Route path='/' component={HomePage} exact/>
            <Route path='/blog' component={BlogPage} exact/>
          </div>
      </div>
    </Router>
    
  );
}

export default App;
