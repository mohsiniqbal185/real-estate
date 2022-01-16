import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 

import './App.css';

import home from './Components/home';
import Search from './Components/search';
 

function App() {

  return (

    <div className="wrapper">

      <Router>

        <Switch>

          <Route exact path="/" component={home} />
          <Route exact path="/search" component={Search} />

        </Switch>

      </Router>

    </div>

  );

}

export default App;