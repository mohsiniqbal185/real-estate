import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddProperty from '../src/component/addProperty';
import newSearch from '../src/component/newSearch';
import Header from '../src/component/header';
import home from '../src/component/home';
import Search from '../src/component/search';
import PropertyView from '../src/component/PropertyView';
import Footer from '../src/component/footer';
import SignIn from '../src/component/signin'
 

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