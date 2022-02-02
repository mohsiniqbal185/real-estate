import '../index.css';
import Data from './Data';
import View from './View';
import {useEffect, useState} from "react";
import {POST, request, StatusOK} from "./request_helper";

const getPropertyData = async (type) => {
    // instead of this call backend to get property data
    //
     let response = await request(POST, "/listing/search",{"type": type})
    //
     if (response.status === StatusOK) {
         return response.json();
     }
    return Data
}

const PropertyView = () => {
    const type = window.location.pathname.includes("propforrent") ? "rent" : "sale"
    const [data, setData] = useState([])
    useEffect(() => {
        getPropertyData(type).then(data => {
            setData(data);
        })
    }, []);
    return (
        <section class="featured" id="featured">

            <h1 class="heading"><span>Property</span> For {type} </h1>

            <div className='row gy-4'>
                {
                    data.map((val, ind) => {
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