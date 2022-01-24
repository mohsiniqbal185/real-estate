
import React, { Component } from 'react';
const AddProperty = () => {
    return (          
        <div className="AddProperty">
            <div className="head">
                <br></br>
            <h2 className="Heading"><strong>Add Property</strong></h2>            </div>
            <form name="add_prop" class="add_prop_form">
                <table >
                    <tr>
                    <td><label for="purpose">Purpose :</label></td>
                    <td>Rent : <input type="radio" name="purpose" value="rent"/>
                        Sale : <input type="radio" name="purpose" value="sale"/></td>  
                    </tr>
                    <tr>
                    <td><label for="type">Type :</label></td>
                    <td>House : <input type="radio" name="type" value="male"/>
                        Flat : <input type="radio" name="type" value="flat"/>
                        Plot : <input type="radio" name="type" value="plot"/></td>  
                    </tr>
                    <tr>
                    <td><label for="location">Location :</label></td>
                    <td><input type="text" name="location" id="location" placeholder="Location"/></td>
                    </tr>
                    <tr>
                    <td><label for="Prop_title">Property Title :</label></td>
                    <td><input type="text" name="Prop_title" id="Prop_title" placeholder="Property Title"/></td>
                    </tr>
                    <tr>
                    <td><label for="description">Description :</label></td>
                    <td><input type="text" name="description" id="description" placeholder="Description"/></td>
                    </tr>
                    <tr>
                    <td><label for="price">Price :</label></td>
                    <td><input type="text" name="price" id="price" placeholder="Price"/></td>
                    </tr>
                    <tr>
                    <td><label for="area">Area :</label></td>
                    <td><input type="text" name="area" id="area" placeholder="Area"/></td>
                    </tr>
                    <tr>
                        <td><label for="no_of_bed">No. of Bedrooms :</label></td>
                        <td>
                            <select name="no_of_bed" id="no_of_bed">
                                <option value="">Select Bedrooms</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="no_of_bath">No. of Bathrooms :</label></td>
                        <td>
                            <select name="no_of_bath" id="no_of_bath">
                                <option value="">Select Bathrooms</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                    <td colspan="2"><input type="submit" class="submit" value="Submit" /></td>
                    </tr>
                </table>
            </form>          
        </div>
    );
}
export default AddProperty;