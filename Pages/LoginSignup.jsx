import React from 'react'
import './CSS/LoginSignup.css'

function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Your Name'/>
          <input type='password' placeholder='password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account?<span>Login here</span></p>
        <div className="loginsignup-agree">
        <input type='check' name='' id=''/>
        <p>i agree to the terms & conditions</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup