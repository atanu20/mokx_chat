import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory , NavLink } from 'react-router-dom';
const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(true);

    

    const his = useHistory();

    useEffect(()=>{
        if(email && password)
        {
            setStatus(false)
        }
    },[email,password])

    const onSub=async(e)=>{
        e.preventDefault()
        
    }

  return (
    <>
    <div className="body_box">
            <div className='form_box'>
                <img src="./image/logo.png" alt="" />
                <h5 className='text-center'>Log in to Mokx</h5>
                <p className='pl-3 pr-3 textv text-center'>Welcome back! Sign in using your social account or email to continue us</p>
                <div className="arrow" onClick={()=>his.push("/")}>
                <i class="fa fa-long-arrow-left" aria-hidden="true"></i>

                </div>
                <div className="dd_flex">
            <div className="icon_item">
              <i className='fa fa-facebook'></i>
            </div>
            <div className="icon_item">
              <i className='fa fa-google'></i>
            </div>
            <div className="icon_item">
              <i className='fa fa-apple'></i>
            </div>
         </div>
       

<form onSubmit={onSub}>

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
  
  <button className='btn btn-warning btn-block mt-4' disabled={status}>Log in</button>
  <div className="text-center mt-3">
<NavLink to="/" className=" m-2 texty">Forgot Password?</NavLink>
</div>
</form>



            </div>

    </div>
    
    </>
  )
}

export default Login