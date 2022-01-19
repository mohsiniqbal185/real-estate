import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 

import './App.css';


import home from './Components/home';


import Search from './Components/search';

import Footer from './Components/footer';
import SignIn from './Components/signin';
import Header from './Components/header';
import SignUp from './Components/signup';
 import AddProperty from './Components/addProperty'

function App() {

  return (

    <div className="wrapper">
      
      <Router>
        <Header/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Switch>
      
          {/* <Route path="/" component={home} /> */}
          {/* <Route exact path="/" component={Header} /> */}
          
          {/* <Route path="/" component={SignIn} /> */}
          <div>Hello</div>
           {/* <Route exactpath="/" component={SignUp} />  */}
        
          {/* <Route path="/search" component={Search} /> */}
          {/* <Route path="/search" component={Search} /> */}
        </Switch>
<Search/>
 <Footer/>

      </Router>

    </div>

  );

}

export default App;