import '../index.css';
import Data from './Data';
import View from './View';

const PropertyView = () => {
    return (  
        <section class="featured" id="featured">

        <h1 class="heading"> <span>Property</span> For Sale </h1>
    
        <div className='row gy-4'>
              {
                Data.map((val, ind) => {
                  return <View key={ind}
                    imgsrc={val.imgsrc}
                    price={val.price}
                    title={val.title}
                    location={val.location}
                    area={val.area}
                    bedroom={val.bathroom}
                    bathroom={val.bathroom}
                  />
                })
              }

            </div>
    </section>
    );
}
 
export default PropertyView;