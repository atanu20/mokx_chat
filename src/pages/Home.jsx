import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {
 const [loading,setLoading]= useState(true)
  useEffect(()=>{
setTimeout(() => {
  setLoading(false)
}, 1500);
  })
  return (
    <>
    <div className="body_box">
      {
        loading ? <div className="onload">
        <img src="./image/logo.png" alt="" />
       <div>
       <p>Back to Vedas 🕉️</p>
       </div>
      </div> :(
        <>
        
        <div className="welcome">
          <div className="up_img">
            <img src="./image/cartoon.png" alt="" />
          </div>
         <div className="below_div">
         <h2>Discover the timeless wisdom of <span>the Vedas.</span></h2>
         <p className='m-0'>Sign up and <span>journey through ancient knowledge with Arya 🌟</span></p>
         <br />
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
         <img src="./image/Or-uihut.png" alt="" />
         <NavLink to="/register" className='btn btn-warning btn-block mt-2'>Sign up with mail</NavLink>
         <p className='text-center mt-3'>Existing account? <NavLink to="/login">Log in</NavLink></p>
         </div>
      </div>
        </>
      )
      }
      
    </div>
    </>
  )
}

export default Home