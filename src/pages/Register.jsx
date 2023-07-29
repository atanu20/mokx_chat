import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const his = useHistory();
    const onSub=async(e)=>{
        e.preventDefault()
        
    }

  return (
    <>
    <div className="body_box">
            <div className='form_box'>
                <img src="./image/logo.png" alt="" />
                <h5 className='text-center'>Sign up With Email</h5>
                <p className='pl-3 pr-3 textv text-center'>Welcome back! Sign in using your social account or email to continue us</p>
                <div className="arrow" onClick={()=>his.push("/")}>
                <i class="fa fa-long-arrow-left" aria-hidden="true"></i>

                </div>

<form onSubmit={onSub} >
<div class="form-group">
    <label for="name">Your Name</label>
    <input type="name" class="form-control" value={name} onChange={(e) => setName(e.target.value)}
                        required  />
  </div>
  <div class="form-group mt-4">
    <label for="name">Your Email</label>
    <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)}
                        required  />
  </div>
  <div class="form-group mt-4">
    <label for="name">Password</label>
    <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)}
                        required  />
  </div>
  <div class="form-group mt-4">
    <label for="name">Confirm Password</label>
    <input type="password" class="form-control" value={cpassword} onChange={(e) => setCPassword(e.target.value)}
                        required  />
  </div>
  <button className='btn btn-warning btn-block mt-4'>Create an account</button>
</form>

            </div>

    </div>
    
    </>
  )
}

export default Register