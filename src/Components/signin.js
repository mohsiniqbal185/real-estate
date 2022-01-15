import React from 'react'

const SignIn = () => {
    return ( 
        <div className='container_SignIn'>
        <form/>
            <h2 className="Heading"><strong>Welcome to Log In</strong></h2>
            <br/><br />

        <center><li><input type="email" placeholder="Enter your email" required/></li></center>
        <br/><br />
        <center><li><input type="password" placeholder="Enter your password" required/></li></center>
        <br/><br/>
        <center><button className='logIn' type='submit'>Sign In</button></center>
        
        <h4>Don't have an account? <a href="">Sign Up</a></h4>
        
    <form/>
    </div>
     );
}
 
export default SignIn;