import React from 'react'

const SignUp = () => {
    return ( 
<div className='container_SignUp'>
        <form/>
            <h2 className="Heading"><strong>Welcome to Sign Up</strong></h2>
            <li><input type="text" placeholder="Enter your first name" required/></li>
            <br /><br />
            <li>Last Name:<input type="text" placeholder="Enter your last name" required/></li>   
            <br /><br />
        <li>Email:<input type="email" placeholder="Enter your email" required/></li>
        <br/><br />
        <li>Password:<input type="password" placeholder="Enter your password" required/></li>
        <br/><br/>
        <li>Contact No:<input type="number" placeholder="Enter your contact number" required/></li>
        <br /><br />
        <center><button className='logIn' type='submit'>Sign Up</button></center>
        
        <h4>Already a member? <a href="">Sign In</a></h4>
        
    <form/>
    </div>
     );
}
 

export default SignUp;