import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 

import './App.css';
import AddProperty from './addProperty';
import newSearch from './newSearch';
import Header from './header';
import home from './home';
import Search from './search';
import PropertyView from './PropertyView';
import Footer from './footer';
import SignIn from './signin'
 

function App() {

  return (

    <div className="wrapper">

      <Router>
        <Header/>
        <Switch>
        


          {/* <Route path="/" component={home} /> */}
          
          {/* <Route exact path="/" component={Header} /> */}
          
          {/*<Route exact path="/" component={SignIn} />*/}
          <PropertyView/>

          {/* <Route path="/search" component={Search} /> */}


          <Route path="/search" component={Search} />


        </Switch>
        <Footer/>

      </Router>

    </div>

  );

}

export default App;