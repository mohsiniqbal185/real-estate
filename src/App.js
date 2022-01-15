import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 

import './App.css';
import AddProperty from './Components/addProperty';
import newSearch from './Components/newSearch';
import home from './Components/home';
import Search from './Components/search';
import Header from './Components/header';
import Footer from './Components/footer';
 

function App() {

  return (

    <div className="wrapper">

      <Router>
        <Header/>
        <Switch>
        <newSearch/>
        <AddProperty/>

          {/* <Route exact path="/" component={Header} /> */}

          <Route path="/search" component={Search} />

        </Switch>
        <Footer/>

      </Router>

    </div>

  );

}

export default App;