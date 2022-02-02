const Searchbar = () => {
    return ( 
        <>
        <center>
        <div className="Searchbar">
        <u><h1>Find your Perfect Home</h1></u>
        <br />
        <div>
            <div>
            <input type="text" placeholder="Neighborhood"/>
            <input type="text" placeholder="City"/>
            </div>
            <br />
            <div>
            <select name="cars" id="cars">
                <option value="" disabled selected hidden>Min Price (PKR)</option>
                <option value="5000000">25 Lacs</option>
                <option value="7500000">50 Lacs</option>
                <option value="10000000">1 Crore</option>
            </select>
            <select name="cars" id="cars">
                <option value="" disabled selected hidden>Max Price (PKR)</option>
                <option value="25000000">2.5 Crore</option>
                <option value="50000000">5 Crore</option>
                <option value="100000000">10 Crore</option>
            </select>
            </div>
            <br />
            <div>
            <select name="cars" id="cars">
                <option value="" disabled selected hidden>Property Purpose</option>
                <option value="Sale">For Sale</option>
                <option value="Rent">For Rent</option>
            </select>
            <select name="cars" id="cars">
                <option value="" disabled selected hidden>Property Status</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            </div>
            <br />
            <div>
            <select name="cars" id="cars">
                <option value="" disabled selected hidden>Property Type</option>
                <option value="saab">House</option>
                <option value="opel">Flat</option>
                <option value="audi">Plot</option>
            </select>
            <select name="cars" id="cars">
                <option value="" disabled selected hidden>BHK</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            </div>
            <br />
            <div>
            <select name="cars" id="cars">
                <option value="" disabled selected hidden>Aminities</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            <select name="cars" id="cars">
                <option value="" disabled selected hidden>No. of Bedrooms</option>
                <option value="saab">3</option>
                <option value="opel">4</option>
                <option value="audi">4</option>
            </select>
            </div>
            <br />
            <select name="cars" id="cars">
                <option value="" disabled selected hidden>No. of Bathrooms</option>
                <option value="saab">2</option>
                <option value="opel">3</option>
                <option value="audi">4</option>
            </select>
        </div>
        <br />
        <center><button>Submit</button></center>
        </div>
        </center>
        <br /><br />
        </>
     );
}
 
export default Searchbar;