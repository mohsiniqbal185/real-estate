import React from "react";
import { Route, Switch } from "react-router-dom";
import '../index.css';
import propertydetail from "./propertydetail";

const View = (props) => {
    return (
        <div className='col-md-4 col-10 mx-auto'>
            <div className="card">
                <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc}/>
                <div className="card-body">
                    <div class="content">
                        <div class="price">
                            <h3>Rs. {props.price}</h3>
                        </div>
                        <div class="location">
                            <h3>{props.title}</h3>
                            <p>{props.location}</p>
                            <p>{props.type}</p>

                        </div>
                        <div class="details">
                            <h3><i class="fas fa-expand"></i>{props.area} sq yards</h3>
                            <h3><i class="fas fa-bed"></i>{props.bedroom} bedrooms</h3>
                            <h3><i class="fas fa-bath"></i>{props.bathroom} bathrooms</h3>
                        </div>
                        <div class="buttons">
                            <a href={"/property/?prop_id="+props.id+"&purpose="+props.purpose} class="btn">Description</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default View;