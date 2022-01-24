import React from 'react'

const SignUp = () => {
    return ( 
<div className='container_SignUp'>
        <form/>
            <h2 className="Heading"><strong>Welcome to Sign Up</strong></h2>
            <br />
            <li><input type="text" placeholder=" First name" required/></li>
            <br /><br />
            <li><input type="text" placeholder=" Last name" required/></li>   
            <br /><br />
        <li><input type="email" placeholder=" Email" required/></li>
        <br /><br />
        <li><input type="password" placeholder=" Password" required/></li>
        <br /><br />
        <li><input type="number" placeholder=" Contact " required/></li>
        <br /><br />
        <center><button className='logIn' type='Submit'>Sign Up</button></center>
        
        <h4>Already a member? <a href="">Sign In</a></h4>
        
    <form/>
    </div>
     );
}
 

export default SignUp;