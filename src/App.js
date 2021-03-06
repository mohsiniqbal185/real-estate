import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';


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
import propertydetail from './Components/propertydetail';
import PropertyView from "./Components/PropertyView";
import View from "./Components/View";
import Searchbar from './Components/searchbar';

function App() {

    return (

        <div className="wrapper">

            <Router>
                <Head/>

                <Switch>

                    {/* <Route path="/" component={home} /> */}
                    {/* <Route exact path="/" component={Header} /> */}
                    <Route exact path="/">
                        <Redirect to="/home"/>
                    </Route>
                    <Route exact path="/search">
                        <Searchbar/>

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
                    <Route exact path="/propforrent">
                        <PropertyView/>

                    </Route>
                    <Route exact path="/propforsale">
                        <PropertyView/>

                    </Route>
                    <Route path="/property/:id">
                        <View/>

                    </Route>
                    <Foot/>

                </Switch>

            </Router>

        </div>

    );

}

export default App;