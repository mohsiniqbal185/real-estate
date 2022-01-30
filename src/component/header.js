import React, { Component } from 'react';
class Header extends Component {

    render() {

        return (
            
            <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
        <div className="container">
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span />
            <span />
            <span />
          </button>
          <a className="navbar-brand text-brand" href="index.html">Online Real Estate <span className="color-b">Market</span></a>
          <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="search">Search</a>
              </li>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View Properties</a>              
              <div className="dropdown-menu">
                  <a className="dropdown-item " href="properties-for-rent.html">Properties for rent</a>
                  <a className="dropdown-item " href="properties-for-sale">Properties for sale</a>
                </div>
              </li>
              
              <li className="nav-item">
                <a className="nav-link " href="login.html">Login</a>
                
              </li>
              <li className="nav-item">
                <a className="nav-link " href="addproperty.html">Add Property</a>
              </li>

            </ul>
          </div>
          
        </div> </nav>
        
        )

    }

}

export default Header;