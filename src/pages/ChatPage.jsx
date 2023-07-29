import React from 'react'
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const ChatPage = () => {
    SwiperCore.use([Autoplay]);
  return (
    <>
     <div className="body_box">
     <form class="search_main">
	<input type="text" name="input" class="input" placeholder="Search...."  />
	<div class="icon">
		<i class="fa fa-search" aria-hidden="true"></i>
	</div>
</form>

<div className="recent_online">
    
<Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={5}
                slidesPerView={'auto'}
                loop={true}
                //   autoplay={{ delay: 3000 }}
              >
                
{
    [1,2,3,4,5,6,8,7,5].map((val,ind)=>{
        return(
            <>
            
            <SwiperSlide >
                <div className="online_user">
    <img src="./image/user.png" alt="" />
    <div></div>
</div>
                          </SwiperSlide>
            </>
        )
    })
}

              </Swiper>
</div>



<div className="chat_boxx pt-2 mt-2">
 {
    [,1,2,3,4,5,6,1,2,4,6,8,7,,6,,5,4,7,8].map((val,ind)=>{
        return(
            <>
            <NavLink to="/chat/123" className="indi_chat_items">
<img src="./image/user.png" alt="" />
<div>
    <p className=''>Atanu Jana</p>   
    <small>You: i am atanu</small>
</div>
</NavLink>
            
            </>
        )
    })
 }
</div>




     </div>
   
    
    
    
    </>
  )
}

export default ChatPage