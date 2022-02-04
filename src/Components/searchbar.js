import {useEffect, useState} from "react";
import {GET, POST, request, StatusOK} from "./request_helper";


const Searchbar = () => {

    const [message, setMessage] = useState("");
    const handleSubmit = async e => {
        e.preventDefault();
        console.log('submit clicked');
        const data = new FormData(e.target);
        let location = data.get('location');
        let minprice = data.get("minprice");

        let maxprice = data.get("maxprice");
        let minarea = data.get("minarea");
        let maxarea = data.get("maxarea");
        let type = data.get('type');
        let purpose = data.get('purpose');
        let no_of_bed=data.get("no_of_bedrooms");
        let no_of_bath=data.get("no_of_bathrooms");
        let sort_by_price=data.get("sort_by_price")
        let sort_by_area = data.get("sort_by_area");
        console.log(no_of_bed);
        console.log(no_of_bed);
       

        let path = ``;
       
        if (purpose == 'rent') {
            console.log(purpose);
            path += `/propforrent?`
        } else {
            path += '/propforsale?'
        }
        if (location!=""){
            path+=`&location=${location}`
        }
        if (minprice != "") {
            path+=`&price_from=${minprice}`
        }
        if (maxprice != "") {
            path+=`&price_to=${maxprice}`
        }
        if (minarea != "") {
            path+=`&area_from=${minarea}`
        }
        if (maxarea != "") {
            path+=`&area_to=${maxarea}`
        }
        if (type != "") {
            path+=`&type=${type}`
        }
        if (no_of_bed != "") {
            path+=`&no_of_bed=${no_of_bed}`
        }
        if (no_of_bath != "") {
            path+=`&no_of_bed=${no_of_bath}`
        }
        
        if (sort_by_price != "") {
            path+=`&sort_by_price=${sort_by_price}`
        }
        if (sort_by_area != "") {
            path+=`&sort_by_area=${sort_by_area}`
        }
        window.location.href=`${path}`
    }



return (
    <>
        <center>
            <div className="Searchbar">
                <u><h1>Find your Perfect Home</h1></u>
                <br />
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <input type="text" name ='location' placeholder="Location: " />
                            
                        </div>
                        <div>
                            <li><input type="text" name="minprice" placeholder=" Price From:" /></li>

                            <li><input type="text" name="maxprice" placeholder=" Price To:" /></li>
                        </div>
                        <div>
                            <li><input type="text" name="minarea" placeholder=" Area From:" /></li>

                            <li><input type="text" name="maxarea" placeholder=" Area To:" /></li>
                        </div>

                        <div>
                            <select name="type" id="type">
                                <option value="" selected>Type</option>
                                <option value="House">House</option>
                                <option value="Flat">Flat</option>
                                <option value="Plot">Plot</option>
                            </select>
                            <select name="purpose" id="purpose" required>
                                <option value="" disabled selected hidden>Purpose</option>
                                <option value="rent">rent</option>
                                <option value="sale">sale</option>

                            </select>
                        </div>
                        <br />
                        <div>
                            <select name="no_of_bedrooms" id="no_of_bedrooms">
                                <option value="" selected= 'selected' >Minimum No. of Bedrooms</option>
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
                            <select name="no_of_bathrooms" id="no_of_bathrooms">
                                <option value="" selected='selected'>Minimum No. of Bathrooms</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <div>
                            <select name="sort_by_price" id="sort_by_price">
                                <option value="" selected ='selected'>Sort by price</option>
                                <option value="lowest_to_highest">Lowest to Highest</option>
                                <option value="highest_to_lowest">Highest to Lowest</option>

                            </select>
                         
                        </div>

                    </div>
                    <br />
                    <center><button type="submit">Submit</button></center>
                </form>
            </div>
        </center>
        <br /><br />
    </>
);
}

export default Searchbar;