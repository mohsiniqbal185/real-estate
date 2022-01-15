import React from 'react'

const SignIn = () => {
    return ( 
        <div className='container_SignIn'>
        <form/>
            <h2 className="Heading"><strong>Welcome to Log In</strong></h2>
        <li>Email:<input type="email" placeholder="Enter your email" required/></li>
        <br/><br />
        <li>Password:<input type="password" placeholder="Enter your password" required/></li>
        <br/><br/>
        <center><button className='logIn' type='submit'>Sign In</button></center>
        
        <h4>Don't have an account? <a href="">Sign Up</a></h4>
        
    <form/>
    </div>
     );
}
 
export default SignIn;