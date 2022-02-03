import React, {Component} from 'react';

class Home extends Component {

    render() {

        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0}
                            className="active" aria-current="true" aria-label="Slide 1"/>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1}
                            aria-label="Slide 2"/>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2}
                            aria-label="Slide 3"/>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="assets\img\slide-1.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Find your dream home with us!</h2>
                            <span>Property for Sale</span>
                            <span>Property for Rent</span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="assets\img\slide-2.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Find your dream home with us!</h2>
                            <span>Property for Sale</span>
                            <span>Property for Rent</span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="assets\img\slide-3.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Find your dream home with us!</h2>
                            <span>Property for Sale</span>
                            <span>Property for Rent</span>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        )
    }
}

export default Home;