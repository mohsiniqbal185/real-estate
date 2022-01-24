import React from 'react'

const Head = () => {
  return ( 
    <div>
      <nav>
          <ul>
              <li>
                  <li>
                      <a className="navbar-brand" href="#">Online Real Estate <span style={{color:'green',}}>Market</span></a>
                  </li>
                  
                  <li>
                  <a className="home" href="/home">Home</a>
              </li>
              <li>
                  <a className="search" href="/search">Search</a>
              </li>
              <li className="nav-item dropdown d-inline-block">
                <a className="nav-link dropdown-toggle" style={{color:'black'}} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View Properties</a>              
                <div className="dropdown-menu">
                  <a className="dropdown-item " href="properties-for-rent.html">Properties for rent</a>
                  <a className="dropdown-item " href="properties-for-sale">Properties for sale</a>
                </div>
              </li>
              <li>
                  <a className="login" href="/login">Login</a>
              </li>
              <li>
                  <a className="ap" href="/addproperty">Add Property</a>
              </li>
              
              </li>
          </ul>
      </nav>
  </div>
   );
}
 
export default Head;