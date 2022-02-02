import '../index.css';
import Data from './Data';
import View from './View';
import {useEffect, useState} from "react";
import {GET, POST, request, StatusOK} from "./request_helper";
import {useHistory} from "react-router-dom";

const getPropertyData = async (forRentOrSale) => {
    // instead of this call backend to get property data
<<<<<<< HEAD
    //
     let response = await request(POST, "/listing/search",{"type": type})
    //
     if (response.status === StatusOK) {
         return response.json();
     }
=======
    let urlSearchParams = new URLSearchParams(window.location.search)
    /*
		PriceFrom:     c.GetFloat64("price_from"),
		PriceTo:       c.GetFloat64("price_to"),
		AreaFrom:      c.GetFloat64("area_from"),
		AreaTo:        c.GetFloat64("area_to"),
		Page:          c.GetInt64("page"),
		Limit:         c.GetInt64("limit"),
		SortBy:        c.GetString("sort_by"),
		SortOrder:     c.GetString("sort_order"),*/
    let path = `/listing/search?f=${forRentOrSale}`
    let priceFrom = urlSearchParams.get("price_from")
    if (priceFrom != null && priceFrom !== "") {
        path += `&price_from=${priceFrom}`
    }

    let priceTo = urlSearchParams.get("price_to")
    if (priceTo != null && priceTo !== "") {
        path += `&price_to=${priceTo}`
    }

    let areaFrom = urlSearchParams.get("area_from")
    if (areaFrom != null && areaFrom !== "") {
        path += `&area_from=${areaFrom}`
    }

    let areaTo = urlSearchParams.get("area_to")
    if (areaTo != null && areaTo !== "") {
        path += `&area_to=${areaTo}`
    }

    // similarly add more filters they will be passed to page like http://localhost:3000/propforrent?price_from=1000&area_from=10

    let response = await request(GET, path, null);
    console.log(response);
    if (response.status === StatusOK) {
        return response.json();
    }
>>>>>>> 9c1a7cd05e0c23661ec45f0e4098953f5d58ec78
    return Data
}

const PropertyView = () => {
    const forRentOrSale = window.location.pathname.includes("propforrent") ? "rent" : "sale"
    const history = useHistory()

    const [data, setData] = useState([])
    useEffect(() => {
        getPropertyData(forRentOrSale).then(data => {
            setData(data);
        })
    }, []);
    useEffect(() => {
        return history.listen((location) => {
            const forRentOrSale = window.location.pathname.includes("propforrent") ? "rent" : "sale"

            getPropertyData(forRentOrSale).then(data => {
                setData(data);
            })
        })
    }, [history])
    return (
        <section class="featured" id="featured">

            <h1 class="heading"><span>Property</span> For {forRentOrSale} </h1>

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