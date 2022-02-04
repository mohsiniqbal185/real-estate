import '../index.css';
import Data from './Data';
import View from './View';
import {useEffect, useState} from "react";
import {GET, POST, request, StatusOK} from "./request_helper";
import {useHistory} from "react-router-dom";
import Authenticated from "./authenticated";

const getPropertyData = async (forRentOrSale) => {

    let path = `/listing/search?f=${forRentOrSale}&self=true`

    let response = await request(GET, path, null);
    console.log(response);
    if (response.status === StatusOK) {
        return response.json();
    }
    return Data
}

const MyPropertyView = () => {
    const [rentalProperties, setRentalProperties] = useState([])
    const [saleProperties, setSaleProperties] = useState([])
    useEffect(() => {

        getPropertyData("rent").then(data => {
            setRentalProperties(data);
        })
        getPropertyData("sale").then(data => {
            setSaleProperties(data);
        })
    }, []);
    return (
        <section class="featured" id="featured">
            <Authenticated/>
            
            <h1 class="heading"><span>My Properties</span> For Rent </h1>

            <div className='row gy-4'>
                {
                    rentalProperties.length > 0 &&
                    rentalProperties.map((val, ind) => {
                        return <View key={ind}
                                     id={val.id}
                                     purpose="rent"
                                     type={val.type}
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
                {
                    rentalProperties.length === 0 && <center>
                        <br/>
                        <br/>
                        <br/>
                        No properties added
                    </center>

                }


            </div>

            <br/>
            <br/>
            <h1 className="heading"><span>My Properties</span> For Sale </h1>

            <div className='row gy-4'>
                {
                    saleProperties.length > 0 &&
                    saleProperties.map((val, ind) => {
                        return <View key={ind}
                                     id={val.id}
                                     purpose="sale"
                                     type={val.type}
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
                {
                    saleProperties.length === 0 && <center>
                        <br/>
                        <br/>
                        <br/>
                        No properties added
                    </center>

                }


            </div>
        </section>

    );
}

export default MyPropertyView;