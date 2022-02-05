import React, { useState } from 'react'
import { request, POST, StatusOK } from "./request_helper";


const SignUp = () => {
    const [message, setMessage] = useState("");
    const handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData(e.target);
        let firstname = data.get("firstname");
        let lastname = data.get("lastname");
        let username = data.get("username");
        let password = data.get("password");
        let contact = data.get("contact");


        const response = await request(POST, "/signup", {
            "firstname": firstname,
            "lastname": lastname,
            "username": username,
            "password": password,
            "contact": contact,
        });
        console.log(response);
        if (response.status === StatusOK) {
            localStorage.setItem('user', JSON.stringify(username));
            window.location.href = "/login";
            setMessage("successfully signed up!");
            console.log("Successfully signed up");
            // window.location.href='/login';
        } else {
            let json = await response.json()
            console.log(json)
            setMessage(json.error);
        }
    }
    return (
        <div className='container_SignUp'>

            <form onSubmit={handleSubmit} >
                <h2 className="Heading"><strong>Welcome to Sign Up</strong></h2>
                <li><input type="text" name="firstname" placeholder=" First name" required /></li>
                <li><input type="text" name="lastname" placeholder=" Last name" required /></li>
                <li><input type="email" name="username" placeholder=" Email" required /></li>
                <center>
                    <div className="error-message"
                        style={message === "" ? { display: "none" } : {}}>{message}
                    </div>
                </center>
                <li><input type="password" name="password" placeholder=" Password" required /></li>
                <li><input type="number" name="contact" placeholder=" Contact " required /></li>
                
                <center><button className='logIn' type='Submit' >Sign Up</button></center>
                
                <h4>Already a member? <a href="">Sign In</a></h4>

            </form >
           
        </div>
    );
}


export default SignUp;