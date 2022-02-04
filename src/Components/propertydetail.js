import React from "react";
import '../index.css';
import Data from './Data';
import View from './View';
import { useEffect, useState } from "react";
import { GET, POST, request, StatusOK } from "./request_helper";
import { useHistory } from "react-router-dom";

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
    let data=response.json()
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
      <br />
      <center>
        <table>
          <tr>
            <th>Purpose</th>
            <th>Type</th>
            <th>Location</th>
            <th>Property Title</th>
            <th>Price(PKR)</th>
            <th>Area(sq yards)</th>
            <th>No of Beds</th>
            <th>No of Baths</th>
          </tr>
          {data.map((val, ind) => {
            return(<tr>

              <td>{val.type}</td>
              <td>House</td>
              <td>Gulshan-e-Iqbal</td>
              <td>Shadman House</td>
              <td>25000k</td>
              <td>400</td>
              <td>6</td>
              <td>4</td>
            </tr>)
          })
        }
        </table>
        <br />
      </center>
    </>

  );
}

export default Propertydetail;