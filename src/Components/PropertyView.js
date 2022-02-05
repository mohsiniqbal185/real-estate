import '../index.css';
import Data from './Data';
import View from './View';
import {useEffect, useState} from "react";
import {GET, POST, request, StatusOK} from "./request_helper";
import {useHistory} from "react-router-dom";

const getPropertyData = async (forRentOrSale) => {
    // instead of this call backend to get property data
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
    let location = urlSearchParams.get("location")
    if (location != null && location !== "") {
        path += `&location=${location}`
    }

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
    let type = urlSearchParams.get("type")
    if (type != null && type !== "") {
        path += `&type=${type}`
    }
    let no_of_bed = urlSearchParams.get("no_of_bed")
    if (no_of_bed != null && type !== "") {
        path += `&no_of_bed=${no_of_bed}`
    }
    let no_of_bath = urlSearchParams.get("no_of_bath")
    if (no_of_bath != null && no_of_bath !== "") {
        path += `&no_of_bath=${no_of_bath}`
    }
    let sort_by_price = urlSearchParams.get("sort_by_price")
    if (sort_by_price != null && sort_by_price !== "") {
        path += `&sort_by_price=${sort_by_price}`
    }
    // similarly add more filters they will be passed to page like http://localhost:3000/propforrent?price_from=1000&area_from=10

    let response = await request(GET, path, null);
    console.log(response);
    if (response.status === StatusOK) {
        return response.json();
    }
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
                    data.length > 0 &&
                    data.map((val, ind) => {
                        return <View key={ind}
                                     id={val.id}
                                     purpose={forRentOrSale}
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
                    data.length === 0 && <center>
                        <br/>
                        <br/>
                        <br/>
                        No properties available for search criteria
                    </center>

                }


            </div>
        </section>
    );
}

export default PropertyView;