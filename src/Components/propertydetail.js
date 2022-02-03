import React from "react";
import '../index.css';
import Data from './Data';
import View from './View';
import {useEffect, useState} from "react";
import {GET, POST, request, StatusOK} from "./request_helper";
import {useHistory} from "react-router-dom";

const getPropertyData = async () => {
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
    let path = `/listing/search?`

    let prop_id = urlSearchParams.get("prop_id")
    if (prop_id != null && prop_id !== "") {
        path += `&id=${prop_id}`
    }
    let purpose = urlSearchParams.get("purpose")
    if (purpose != null && purpose !== "") {
        path += `&f=${purpose}`
    }

    let response = await request(GET, path, null);
    console.log(response);
    if (response.status === StatusOK) {
        let data = response.json()
        return data;
    }
    return
}


const Propertydetail = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        getPropertyData().then(data => {
            setData(data);
            console.log(data)
        })
    }, []);
    return (
        <>
            <center><h2 className="propertydetail">Property Details</h2></center>
            <br/>
            <center>
                <table>

                    {data.map((val, ind) => {
                        return (
                            <div>
                                <tr>
                                    <th colspan={10}>
                                        <img src={"../" + val.imgsrc} alt={"test"}/>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Purpose</th>
                                    <td>{val.purpose}</td>

                                </tr>
                                <tr>
                                    <th>Type</th>
                                    <td>{val.type}</td>

                                </tr>

                                <tr>

                                    <th>Location</th>
                                    <td>{val.location}</td>
                                </tr>
                                <tr>

                                    <th>Property Title</th>
                                    <td>{val.title}</td>
                                </tr>

                                <tr>
                                    <th>Price(PKR)</th>

                                    <td>PKR. {val.price}</td>
                                </tr>

                                <th>Area(sq yards)</th>

                                <td>{val.area}</td>
                                <tr>

                                    <th>No of Beds</th>
                                    <td>{val.bedroom}</td>
                                </tr>
                                <tr>
                                    <th>No of Baths</th>
                                    <td>{val.bathroom}</td>

                                </tr>
                                <tr>
                                    <th>Agent Contact Number</th>
                                    <td>{val.agent_contact}</td>

                                </tr>
                                <tr>

                                    <th>Description</th>
                                    <td>{val.description}</td>
                                </tr>
                            </div>)
                    })
                    }
                </table>
                <br/>
            </center>
        </>

    );
}

export default Propertydetail;