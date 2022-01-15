import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 

import './App.css';
import AddProperty from './Components/addProperty';
import newSearch from './Components/newSearch';
import Header from './Components/header';

import home from './Components/home';
import Search from './Components/search';
 

function App() {

  return (

    <div className="wrapper">

      <Router>
        <Header/>
        <Switch>
        <newSearch/>
        <AddProperty/>

          {/* <Route path="/" component={home} /> */}
          <Route path="/" component={AddProperty} />
          <Route path="/" component={newSearch} />
          <Route path="/search" component={Search} />

        </Switch>

      </Router>

    </div>

  );

}

export default App;