import { useState } from 'react'
import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    const [state,setState] = useState("Login");

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state==="Sign Up"?<input type="text" placeholder='Your Name'/>:<></>}
                    <input type="email" placeholder='Email Address'/>
                    <input type="password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account? 
                    <span> Login Here</span>
                </p>
                <p className="loginsignup-login">Need to create an account? 
                    <span> Sign Up Here</span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>By continuing, I agree to the terms & privacy policies</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup