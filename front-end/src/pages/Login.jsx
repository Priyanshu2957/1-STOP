import React from 'react'
import "./CSS/Login.css";
export const Login = () => {
  return (
    <div className='login'>
      <div className='login-container'>
        <h1>Sign Up</h1>
        <div className='login-fields'>
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='login-lg'> Already have an account? <span>Login Here</span></p>
        <div className='login-agree'>
          <input type='checkbox' name='' id=''/>
          <p> By continuing, I agree to user terms and condition.</p>
        </div>
      </div>
    </div>
  )
}
export default Login;