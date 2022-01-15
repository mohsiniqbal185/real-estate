import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 

import './App.css';
import AddProperty from './Components/addProperty';
import newSearch from './Components/newSearch';
import home from './Components/home';
import Search from './Components/search';

import Footer from './Components/footer';
import SignIn from './Components/signin'
 

function App() {

  return (

    <div className="wrapper">

      <Router>
        <Header/>
        <Switch>
        


<<<<<<< HEAD
=======
          {/* <Route path="/" component={home} /> */}
          
>>>>>>> f5e4fa0ab43fc4175e68d2ccecebf218156dc620
          {/* <Route exact path="/" component={Header} /> */}
          
          <Route exact path="/" component={SignIn} />

          {/* <Route path="/search" component={Search} /> */}


          <Route path="/search" component={Search} />


        </Switch>
        <Footer/>

      </Router>

    </div>

  );

}

export default App;