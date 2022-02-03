import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import addProperty from '../src/Components/addProperty'
import newSearch from '../src/Components/newSearch';
import Header from '../src/Components/header';
import home from '../src/Components/home';
import Search from '../src/Components/search';
import PropertyView from '../src/Components/PropertyView';
import Footer from '../src/Components/footer';
import SignIn from '../src/Components/signin'
 

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