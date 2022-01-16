import image1 from './images/img-1.jpg'
import image2 from './images/img-2.jpg'
import image3 from './images/img-3.jpg'
import image4 from './images/img-4.jpg'
import image5 from './images/img-5.jpg'
import image6 from './images/img-6.jpg'

const PropertyView = () => {
    return (  
        <section class="featured" id="featured">

        <h1 class="heading"> <span>Property</span> For Sale </h1>
    
        <div class="box-container">
    
            <div class="box">
                <div class="image-container">
                    <img src={image1} alt=""/>
                    <div class="info">
                    </div>
                </div>
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
    
            <div class="box">
                <div class="image-container">
                    <img src={image2} alt=""/>
                    <div class="info">
                    </div>
                </div>
                <div class="content">
                    <div class="price">
                        <h3>4 Crore</h3>
                    </div>
                    <div class="location">
                        <h3>Gulshan-E-Iqbal Villa</h3>
                        <p>Gulshan-e-Iqbal Town Block 1 Karachi Pakistan</p>
                    </div>
                    <div class="details">
                        <h3> <i class="fas fa-expand"></i> 300 sqft </h3>
                        <h3> <i class="fas fa-bed"></i> 4 bedroon </h3>
                        <h3> <i class="fas fa-bath"></i> 3 bathroon </h3>
                    </div>
                    <div class="buttons">
                        <a href="#" class="btn">Description</a>
                    </div>
                </div>
            </div>
    
            <div class="box">
                <div class="image-container">
                    <img src={image3} alt=""/>
                    <div class="info">
                    </div>
                </div>
                <div class="content">
                    <div class="price">
                        <h3>1 Crore</h3>
                    </div>
                    <div class="location">
                        <h3>Gohar Green City Malir Furnished Villa</h3>
                        <p>Gohar Green City Karachi Pakistan</p>
                    </div>
                    <div class="details">
                        <h3> <i class="fas fa-expand"></i> 100 sqft </h3>
                        <h3> <i class="fas fa-bed"></i> 2 bedroon </h3>
                        <h3> <i class="fas fa-bath"></i> 2 bathroon </h3>
                    </div>
                    <div class="buttons">
                        <a href="#" class="btn">Description</a>
                    </div>
                </div>
            </div>
    
            <div class="box">
                <div class="image-container">
                    <img src={image4} alt=""/>
                    <div class="info">
                    </div>
                </div>
                <div class="content">
                    <div class="price">
                        <h3>2 Crore</h3>
                    </div>
                    <div class="location">
                        <h3>Bahria Town Luxury Villa</h3>
                        <p>Precinct 27 Bahria Town Karachi Pakistan</p>
                    </div>
                    <div class="details">
                        <h3> <i class="fas fa-expand"></i> 250 sqft </h3>
                        <h3> <i class="fas fa-bed"></i> 3 bedroon </h3>
                        <h3> <i class="fas fa-bath"></i> 3 bathroon </h3>
                    </div>
                    <div class="buttons">
                        <a href="#" class="btn">Description</a>
                    </div>
                </div>
            </div>
    
            <div class="box">
                <div class="image-container">
                    <img src={image5} alt=""/>
                    <div class="info">
                    </div>
                </div>
                <div class="content">
                    <div class="price">
                        <h3>6 Crore</h3>
                    </div>
                    <div class="location">
                        <h3>DHA Phase 5 Villa</h3>
                        <p>DHA Defence Phase 5 Karachi Pakistan</p>
                    </div>
                    <div class="details">
                        <h3> <i class="fas fa-expand"></i> 500 sqft </h3>
                        <h3> <i class="fas fa-bed"></i> 5 bedroon </h3>
                        <h3> <i class="fas fa-bath"></i> 5 bathroon </h3>
                    </div>
                    <div class="buttons">
                        <a href="#" class="btn">Description</a>
                    </div>
                </div>
            </div>
    
            <div class="box">
                <div class="image-container">
                    <img src={image6} alt=""/>
                    <div class="info">
                    </div>
                </div>
                <div class="content">
                    <div class="price">
                        <h3>7 Crore</h3>
                    </div>
                    <div class="location">
                        <h3>Brand New Brigadier House</h3>
                        <p>Askari 5 - Sector H  Malir Cantonment Karachi Pakistan</p>
                    </div>
                    <div class="details">
                        <h3> <i class="fas fa-expand"></i> 450 sqft </h3>
                        <h3> <i class="fas fa-bed"></i> 5 bedroon </h3>
                        <h3> <i class="fas fa-bath"></i> 5 bathroon </h3>
                    </div>
                    <div class="buttons">
                        <a href="#" class="btn">Description</a>
                    </div>
                </div>
            </div>
    
        </div>
        
    </section>
    );
}
 
export default PropertyView;