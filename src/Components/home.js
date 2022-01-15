import React, { Component } from 'react';

import Header from "./header";
import AddProperty from './addProperty';
import Footer from "./footer"; 

class Home extends Component {

    render() {

        return (
            
            <div>
              
               <Header /> 
               <AddProperty/>
      <div>
        <div className="intro intro-carousel swiper position-relative">
          <div className="swiper-wrapper">
            <div className="swiper-slide carousel-item-a intro-item bg-image" style={{backgroundImage: 'url(assets/img/slide-1.jpg)'}}>
              <div className="overlay overlay-a" />
              <div className="intro-content display-table">
                <div className="table-cell">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="intro-body">
                          <p className="intro-title-top">Doral, Florida
                            <br /> 78345
                          </p>
                          <h1 className="intro-title mb-4 ">
                            <span className="color-b">204 </span> Mount
                            <br /> Olive Road Two
                          </h1>
                          <p className="intro-subtitle intro-price">
                            <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            
            <div className="swiper-slide carousel-item-a intro-item bg-image" style={{backgroundImage: 'url(assets/img/slide-3.jpg)'}}>
              <div className="overlay overlay-a" />
              <div className="intro-content display-table">
                <div className="table-cell">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="intro-body">
                          <p className="intro-title-top">Doral, Florida
                            <br /> 78345
                          </p>
                          <h1 className="intro-title mb-4">
                            <span className="color-b">204 </span> Alira
                            <br /> Roan Road One
                          </h1>
                          <p className="intro-subtitle intro-price">
                            <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>{/* End Intro Section */}
        <main id="main">
          {/* ======= Services Section ======= */}
          <section className="section-services section-t8">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="title-wrap d-flex justify-content-between">
                    <div className="title-box">
                      <h2 className="title-a">Our Services</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card-box-c foo">
                    <div className="card-header-c d-flex">
                      <div className="card-box-ico">
                        <span className="bi bi-cart" />
                      </div>
                      <div className="card-title-c align-self-center">
                        <h2 className="title-c">Rent</h2>
                      </div>
                    </div>
                    <div className="card-body-c">
                      <p className="content-c">
                        Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                        convallis a pellentesque
                        nec, egestas non nisi.
                      </p>
                    </div>
                    <div className="card-footer-c">
                      <a href="#" className="link-c link-icon">Read more
                        <span className="bi bi-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="card-box-c foo">
                    <div className="card-header-c d-flex">
                      <div className="card-box-ico">
                        <span className="bi bi-card-checklist" />
                      </div>
                      <div className="card-title-c align-self-center">
                        <h2 className="title-c">Sell</h2>
                      </div>
                    </div>
                    <div className="card-body-c">
                      <p className="content-c">
                        Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                        convallis a pellentesque
                        nec, egestas non nisi.
                      </p>
                    </div>
                    <div className="card-footer-c">
                      <a href="#" className="link-c link-icon">Read more
                        <span className="bi bi-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Services Section */}
          {/* ======= Latest Properties Section ======= */}
          <section className="section-property section-t8">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="title-wrap d-flex justify-content-between">
                    <div className="title-box">
                      <h2 className="title-a">Latest Properties</h2>
                    </div>
                    <div className="title-link">
                      <a href="property-grid.html">All Property
                        <span className="bi bi-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="property-carousel" className="swiper">
                <div className="swiper-wrapper">
                  <div className="carousel-item-b swiper-slide">
                    <div className="card-box-a card-shadow">
                      <div className="img-box-a">
                        <img src="assets/img/property-6.jpg" alt="" className="img-a img-fluid" />
                      </div>
                      <div className="card-overlay">
                        <div className="card-overlay-a-content">
                          <div className="card-header-a">
                            <h2 className="card-title-a">
                              <a href="property-single.html">206 Mount
                                <br /> Olive Road Two</a>
                            </h2>
                          </div>
                          <div className="card-body-a">
                            <div className="price-box d-flex">
                              <span className="price-a">rent | $ 12.000</span>
                            </div>
                            <a href="#" className="link-a">Click here to view
                              <span className="bi bi-chevron-right" />
                            </a>
                          </div>
                          <div className="card-footer-a">
                            <ul className="card-info d-flex justify-content-around">
                              <li>
                                <h4 className="card-info-title">Area</h4>
                                <span>340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Beds</h4>
                                <span>2</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Baths</h4>
                                <span>4</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Garages</h4>
                                <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* End carousel item */}
                  <div className="carousel-item-b swiper-slide">
                    <div className="card-box-a card-shadow">
                      <div className="img-box-a">
                        <img src="assets/img/property-3.jpg" alt="" className="img-a img-fluid" />
                      </div>
                      <div className="card-overlay">
                        <div className="card-overlay-a-content">
                          <div className="card-header-a">
                            <h2 className="card-title-a">
                              <a href="property-single.html">157 West
                                <br /> Central Park</a>
                            </h2>
                          </div>
                          <div className="card-body-a">
                            <div className="price-box d-flex">
                              <span className="price-a">rent | $ 12.000</span>
                            </div>
                            <a href="property-single.html" className="link-a">Click here to view
                              <span className="bi bi-chevron-right" />
                            </a>
                          </div>
                          <div className="card-footer-a">
                            <ul className="card-info d-flex justify-content-around">
                              <li>
                                <h4 className="card-info-title">Area</h4>
                                <span>340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Beds</h4>
                                <span>2</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Baths</h4>
                                <span>4</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Garages</h4>
                                <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* End carousel item */}
                  <div className="carousel-item-b swiper-slide">
                    <div className="card-box-a card-shadow">
                      <div className="img-box-a">
                        <img src="assets/img/property-7.jpg" alt="" className="img-a img-fluid" />
                      </div>
                      <div className="card-overlay">
                        <div className="card-overlay-a-content">
                          <div className="card-header-a">
                            <h2 className="card-title-a">
                              <a href="property-single.html">245 Azabu
                                <br /> Nishi Park let</a>
                            </h2>
                          </div>
                          <div className="card-body-a">
                            <div className="price-box d-flex">
                              <span className="price-a">rent | $ 12.000</span>
                            </div>
                            <a href="property-single.html" className="link-a">Click here to view
                              <span className="bi bi-chevron-right" />
                            </a>
                          </div>
                          <div className="card-footer-a">
                            <ul className="card-info d-flex justify-content-around">
                              <li>
                                <h4 className="card-info-title">Area</h4>
                                <span>340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Beds</h4>
                                <span>2</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Baths</h4>
                                <span>4</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Garages</h4>
                                <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* End carousel item */}
                  <div className="carousel-item-b swiper-slide">
                    <div className="card-box-a card-shadow">
                      <div className="img-box-a">
                        <img src="assets/img/property-10.jpg" alt="" className="img-a img-fluid" />
                      </div>
                      <div className="card-overlay">
                        <div className="card-overlay-a-content">
                          <div className="card-header-a">
                            <h2 className="card-title-a">
                              <a href="property-single.html">204 Montal
                                <br /> South Bela Two</a>
                            </h2>
                          </div>
                          <div className="card-body-a">
                            <div className="price-box d-flex">
                              <span className="price-a">rent | $ 12.000</span>
                            </div>
                            <a href="property-single.html" className="link-a">Click here to view
                              <span className="bi bi-chevron-right" />
                            </a>
                          </div>
                          <div className="card-footer-a">
                            <ul className="card-info d-flex justify-content-around">
                              <li>
                                <h4 className="card-info-title">Area</h4>
                                <span>340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Beds</h4>
                                <span>2</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Baths</h4>
                                <span>4</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Garages</h4>
                                <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* End carousel item */}
                </div>
              </div>
              <div className="propery-carousel-pagination carousel-pagination" />
            </div>
          </section>{/* End Latest Properties Section */}
          
          
              
              
        </main>
      </div>
            <Footer />
            </div>
        )
    }
}

export default Home;