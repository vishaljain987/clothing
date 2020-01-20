import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={HomePage}/>
      </Router>

    </div>
  );
}

export default App;
