import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 

import './App.css';

import home from './Components/home';
import Search from './Components/search';
import Header from './Components/header';
import Footer from './Components/footer';
import SignIn from './Components/signin'
 

function App() {

  return (

    <div className="wrapper">

      <Router>
        <Header/>
        <Switch>

          {/* <Route exact path="/" component={Header} /> */}
          
          <Route exact path="/" component={SignIn} />

          {/* <Route path="/search" component={Search} /> */}


        </Switch>
        <Footer/>

      </Router>

    </div>

  );

}

export default App;