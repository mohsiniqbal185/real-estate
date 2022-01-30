import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
const Head = () => {
  return ( 
    <div>
      <nav>
          <ul>
              <li>
                  <li>
                      <a className="navbar-brand" ><Link to='/home'>Online Real Estate </Link><span style={{color:'green',}}>Market</span></a>
                  </li>
                  
                  <li>
                  <a className="home" ><Link to='/home'>Home</Link></a>
              </li>
              <li>
                  <a className="search"><Link to='/search'>Search</Link></a>
              </li>
              <li className="nav-item dropdown d-inline-block">
                <a className="nav-link dropdown-toggle" style={{color:'black'}} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View Properties</a>              
                <div className="dropdown-menu">
                  <a className="dropdown-item "><Link to='/propforrent'>Properties for rent</Link></a>
                  <a className="dropdown-item "><Link to='/propforsale'>Properties for sale</Link></a>
                </div>
              </li>
              <li>
                  <a className="login" ><Link to='/login'>Login</Link></a>
              </li>
              <li>
                  <a className="ap"><Link to='/addproperty'>Add Property</Link></a>
              </li>
              
              </li>
          </ul>
      </nav>
  </div>
   );
}
 
export default Head;