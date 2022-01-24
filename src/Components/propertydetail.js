import React from "react";



const propertydetail = () => {
    return ( 
        <>
        <center><img className="imgdetail" src= "assets\img\property-3.jpg" alt="Picture" /></center>
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
  <tr>
    <td>Sale</td>
    <td>House</td>
    <td>Gulshan-e-Iqbal</td>
    <td>Shadman House</td>
    <td>25000k</td>
    <td>400</td>
    <td>6</td>
    <td>4</td>
  </tr>
</table> 
<br />
<h4 className="rating">Rating:&nbsp;</h4>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span>
<br />
<button className="report" type="submit">Report Property</button>
</center>
<br /><br />

        </>
        
     );
}
 
export default propertydetail;