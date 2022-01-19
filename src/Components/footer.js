import React, { Component } from 'react';

class Footer extends Component {

    render() {

        return (

            //This is the area where you paste your HTML codes
            
      <div><section className="section-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-20 col-md-4 section-md-t4">
            <div className="widget-a">
              <div className="w-header-a">
                <h2 className="w-title-a text-brand">Online Real Estate Market</h2>
              </div>
              <div className="w-body-a">
                <p className="w-text-a color-text-a">
                  Making buying and renting easier for you
                </p>
              </div>
              <div className="w-footer-a">
                <ul className="list-unstyled">
                  <li className="color-a">
                    <span className="color-text-a">Phone .</span> +923342000213
                  </li>
                  <li className="color-a">
                    <span className="color-text-a">Email .</span> hamzajunaid@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
         </div>
      </div>
    </section>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="nav-footer">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#">Home</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">About</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Property</a>
                </li>
    
              </ul>
            </nav>
            <div className="socials-a">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="bi bi-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="bi bi-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="bi bi-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="bi bi-linkedin" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright-footer">
              <p className="copyright color-text-a">
                © Copyright
                <span className="color-a"> OREM</span> All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer></div>
        )

    }

}

export default Footer;