import React from 'react';
import { BrowserRouter as Router, Route, Switch , Redirect} from 'react-router-dom';

 

import './App.css';


import Home from './Components/home';



import Search from './Components/search';
import AddProperty from './Components/addProperty';
import Footer from './Components/footer';
import SignIn from './Components/signin';
import Header from './Components/header';
import SignUp from './Components/signup';
import Head from './Components/head';
import Foot from './Components/foot';
import PropertyDisplay from './Components/propertydisplay';
import propertydetail from './Components/propertydetail';
function App() {

  return (

    <div className="wrapper">
      
      <Router>
        <Head/>
        
        <Switch>
      
          {/* <Route path="/" component={home} /> */}
          {/* <Route exact path="/" component={Header} /> */}
          <Route exact path="/">
    <Redirect to="/home" />
</Route>
          <Route exact path="/search">
            <Search/>
            
          </Route>
          <Route exact path="/login">
            <SignIn/>
            
          </Route>
         <Route path="/addproperty">
           <AddProperty/>
         </Route>
         <Route exact path="/signup">
            <SignUp/>
            
          </Route>
         <Foot/>

        </Switch>

      </Router>

    </div>

  );

}

export default App;