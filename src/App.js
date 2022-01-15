import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 

import './App.css';
import AddProperty from './Components/addProperty';
import newSearch from './Components/newSearch';
import Header from './Components/header';

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

<<<<<<< HEAD
          {/* <Route path="/" component={home} /> */}
          <Route path="/" component={AddProperty} />
          <Route path="/" component={newSearch} />
=======
          {/* <Route exact path="/" component={Header} /> */}

>>>>>>> eb790662f80c763340724064ecc2edcbc3efd755
          <Route path="/search" component={Search} />

        </Switch>
        <Footer/>

      </Router>

    </div>

  );

}

export default App;