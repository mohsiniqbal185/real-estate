import React, {useState} from 'react'
import {request, POST, StatusOK} from "./request_helper";


const SignIn = () => {
    const [message, setMessage] = useState("");
    const handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData(e.target);
        let username = data.get("username");
        let password = data.get("password");

        const response = await request(POST, "/login", {
            "username": username,
            "password": password
        });
        console.log(response);
        if (response.status === StatusOK) {
            localStorage.setItem('user', JSON.stringify(username));
            // window.location.href = "/profile";
            setMessage("");
            console.log("Successfully logged in");
        } else {
            let json = await response.json()
            console.log(json)
            setMessage(json.error);
        }
    }

    return (
        <div className='container_SignIn'>
            <form onSubmit={handleSubmit}>
                <h2 className="Heading"><strong>Welcome to Log In</strong></h2>
                <br/><br/>

                <center>
                    <li><input type="email" name="username" placeholder="Enter your email" required
                    />
                    </li>
                </center>
                <br/><br/>
                <center>
                    <li><input type="password" name="password" placeholder="Enter your password" required
                    />
                    </li>
                </center>
                <br/><br/>
                <center>
                    <button className='logIn' type='submit'>Sign In</button>
                </center>

            </form>

            <center>
                <div className="error-message"
                     style={message === "" ? {display: "none"} : {}}>{message}
                </div>
            </center>

            <h4>Don't have an account? <a href="">Sign Up</a></h4>

        </div>
    );
}

export default SignIn;