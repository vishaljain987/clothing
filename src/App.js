import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/ShopPage";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
      </Router>

    </div>
  );
}

export default App;
