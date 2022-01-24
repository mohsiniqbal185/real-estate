import React from "react";
import ReactPaginate from "react-paginate";
import bootstrap from 'bootstrap'
// import image1 from '.../assets/img/about-1.jpg'
// import image2 from '.../assets/img/about-2.jpg'
// import image3 from '.../assets/img/agent-1.jpg'
// import image4 from '.../assets/img/agent-2.jpg'
// import image5 from '.../assets/img/agent-3.jpg'
// import image6 from '../assets/img/agent-4.jpg'
const PropertyDisplay = () => {
    
    return( 

        <div>
            <section class="featured" id="featured">

<h1 class="heading"> <span>Property</span> For Sale </h1>

<div class="box-container">

    <div class="box">
        {/* <div class="image-container">
            <img src={image1} alt=""/>
            <div class="info">
            </div> */}
        {/* </div> */}
        <div class="content">
            <div class="price">
                <h3>5 Crore</h3>
            </div>
            <div class="location">
                <h3>Bahria Hills Town Villa</h3>
                <p>Bahria Hills Bahria Town Karachi Pakistan</p>
            </div>
            <div class="details">
                <h3> <i class="fas fa-expand"></i> 500 sqft </h3>
                <h3> <i class="fas fa-bed"></i> 5 bedroon </h3>
                <h3> <i class="fas fa-bath"></i> 4 bathroon </h3>
            </div>
            <div class="buttons">
                <a href="#" class="btn">Description</a>
            </div>
        </div>
    </div>



</div>

</section>
        </div>
    );
}
export default PropertyDisplay;