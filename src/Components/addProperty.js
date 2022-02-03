import React, {Component, useState} from 'react';
import {request, POST, StatusOK} from "./request_helper";
import Authenticated from "./authenticated.js";

const AddProperty = () => {
    const [message, setMessage] = useState("");
    const onTypeChange = async e => {
        let type = document.querySelector("input[name='type']:checked").value
        let bed = document.querySelector("tr[id='no_of_bed']")
        let bath = document.querySelector("tr[id='no_of_bath']")
        if (type === "Plot") {
            document.querySelector("select[name='no_of_bed']").value = "";
            bed.style.display = "none";
            document.querySelector("select[name='no_of_bath']").value = "";
            bath.style.display = "none";
        } else {
            bed.style.display = "";
            bath.style.display = "";
        }
        return type
    };
    const handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData(e.target);

        let purpose = document.querySelector("input[name='purpose']:checked").value
        console.log(purpose);
        let type = document.querySelector("input[name='type']:checked").value
        let location = data.get("location");
        let prop_title = data.get("prop_title");
        let description = data.get("description");
        let price = data.get("price");
        let area = data.get("area");
        let no_of_bed = document.getElementById('no_of_bed').value;
        let no_of_bath = document.getElementById('no_of_bath').value;


        const response = await request(POST, "/user/addproperty", {
            "purpose": purpose,
            "type": type,
            "location": location,
            "prop_title": prop_title,
            "description": description,
            "price": price,
            "area": area,
            "no_of_bed": no_of_bed,
            "no_of_bath": no_of_bath,

        });
        console.log(response);
        if (response.status === StatusOK) {
            // localStorage.setItem('user', JSON.stringify(username));
            window.location.href = "/home";
            setMessage("successfully added property");
            console.log("Successfully added property");
            // window.location.href='/login';
        } else {
            let json = await response.json()
            console.log(json)
            setMessage(json.error);
        }
    }
    return (
        <div className="AddProperty">
            <Authenticated/>
            <div>
                <h2 className="propertydetail">Add Property</h2></div>
            <form onSubmit={handleSubmit} name="add_prop" class="add_prop_form">

                <table>
                    <tr>
                        <td><label for="purpose">Purpose :</label></td>
                        <td>
                            <div className="col-50"> Rent :</div>
                            <div className="col-50"><input type="radio" name="purpose" value="Rent"/></div>
                            <br/>
                            <div className="col-50">Sale :</div>
                            <div className="col-50"><input type="radio" name="purpose" value="Sale"/></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="type">Type :</label></td>
                        <td>
                            <div class="col-50">House :</div>
                            <div class="col-50"><input onChange={onTypeChange} type="radio" name="type" value="House"/>
                            </div>
                            <br/>
                            <div className="col-50">Flat :</div>

                            <div className="col-50"><input onChange={onTypeChange} type="radio" name="type"
                                                           value="Flat"/></div>
                            <br/>
                            <div className="col-50">Plot :</div>

                            <div className="col-50"><input onChange={onTypeChange} type="radio" name="type"
                                                           value="Plot"/></div>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="location">Location :</label></td>
                        <td><input type="text" name="location" id="location" placeholder="Location" required/></td>
                    </tr>
                    <tr>
                        <td><label for="Prop_title">Property Title :</label></td>
                        <td><input type="text" name="prop_title" id="prop_title" placeholder="Property Title" required/>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="description">Description :</label></td>
                        <td><input type="text" name="description" id="description" placeholder="Description" required/>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="price">Price :</label></td>
                        <td><input type="text" name="price" id="price" placeholder="Price" required/></td>
                    </tr>
                    <tr>
                        <td><label for="area">Area :</label></td>
                        <td><input type="text" name="area" id="area" placeholder="Area" required/></td>
                    </tr>
                    <tr id="no_of_bed">
                        <td><label for="no_of_bed">No. of Bedrooms :</label></td>
                        <td>
                            <select name="no_of_bed" id="no_of_bed">
                                <option value="">Select Bedrooms</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>

                            </select>
                        </td>
                    </tr>
                    <tr id="no_of_bath">
                        <td><label for="no_of_bath">No. of Bathrooms :</label></td>
                        <td>
                            <select name="no_of_bath" id="no_of_bath">
                                <option value="">Select Bathrooms</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                v <option value="5">5</option>
                                <option value="6">6</option>

                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2"><input type="submit" align='center' class="submit" value="Submit"/></td>
                    </tr>
                </table>
            </form>
        </div>
    )
        ;
}
export default AddProperty;