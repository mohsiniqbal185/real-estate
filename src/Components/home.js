import React, { Component } from 'react';

import Head from "./head";

import Foot from "./foot"; 

class Home extends Component {

    render() {

        return (
            
            <div>
               <Head /> 
              <Foot />
            </div>
        )
    }
}

export default Home;