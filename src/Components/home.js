import React, { Component } from 'react';

class Home extends Component {

    render() {

        return (
            <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets\img\home4.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2>Find your dream home with us!</h2>
        <span>Property for Sale</span>
        <span>Property for Rent</span>
      </div>
    </div>
    <div class="carousel-item">
      <img src="assets\img\home2.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h2>Find your dream home with us!</h2>
      <span>Property for Sale</span>
        <span>Property for Rent</span>
      </div>
    </div>
    <div class="carousel-item">
      <img src="assets\img\home5.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h2>Find your dream home with us!</h2>
      <span>Property for Sale</span>
        <span>Property for Rent</span>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </>
            
        )
    }
}

export default Home;