import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 

import './App.css';

import home from './Components/home';
import Search from './Components/search';

import Footer from './Components/footer';
import SignIn from './Components/signin';
import Header from './Components/header';
import SignUp from './Components/signup';
 

function App() {

  return (

    <div className="wrapper">
      
      <Router>
        <Header/>
        
        <Switch>
      
          {/* <Route path="/" component={home} /> */}
          {/* <Route exact path="/" component={Header} /> */}
          
          <Route path="/" component={SignIn} />
          <div>Hello</div>
          <Route path="/" component={SignUp} />

          {/* <Route path="/search" component={Search} /> */}
          <Route path="/search" component={Search} />
        </Switch>
        <Footer/>

      </Router>

    </div>

  );

}

export default App;